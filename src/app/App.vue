<template>
  <VApp :theme="$theme.theme">
    <AppBar
      :theme="$theme.theme"
      :users="$user.items"
      :users-loading="$user.loading"
      :repositories="$repository.items"
      :repositories-loading="$repository.loading"
      @get-users="getUsersDebounced"
      @get-user-repos="getUserRepositoriesDebounced"
      @get-repository-contents="getRepositoryContentsDebounced"
      @toggle-theme="$theme.toggleTheme" />
    <VMain>
      <VResponsive class="mx-auto px-8 py-16" max-width="600">
        <template
          v-for="content in $repository.orderedContents"
          :key="content.id">
          <template v-if="content.type === 'dir'">
            <VRow align="center">
              <VBtn disabled variant="plain" icon="folder" />
              <VCode> {{ content.name }}/ </VCode>
            </VRow>
          </template>
          <template v-if="content.type === 'file'">
            <VRow align="center">
              <VBtn disabled variant="plain" icon="insert_drive_file" />
              <VCode> {{ content.name }} </VCode>
            </VRow>
          </template>
        </template>
      </VResponsive>
    </VMain>
  </VApp>
</template>

<script setup>
  import { debounce } from "lodash"

  import { AppBar } from "~/components"
  import { useThemeStore, useUserStore, useRepositoryStore } from "~/stores"
  import { GithubServices } from "~/services"

  const $theme = useThemeStore()
  const $user = useUserStore()
  const $repository = useRepositoryStore()

  const getUsers = async (username) => {
    if (!username) {
      return
    }

    const params = {
      q: username,
      per_page: 5,
    }

    $user.loading = true

    $user.items = await GithubServices.getUsers(params).finally(() => {
      $user.loading = false
    })
  }
  const getUserRepositories = async (username) => {
    $repository.loading = true

    $repository.items = await GithubServices.getUserRepositories(
      username
    ).finally(() => {
      $user.name = username
      $repository.loading = false
    })
  }
  const getRepositoryContents = async (repository) => {
    $repository.loading = true

    $repository.contents = await GithubServices.getRepositoryContents(
      $user.name,
      repository
    ).finally(() => {
      $repository.name = repository
      $repository.loading = false
    })
  }

  const getUsersDebounced = debounce(getUsers, 500)
  const getUserRepositoriesDebounced = debounce(getUserRepositories, 500)
  const getRepositoryContentsDebounced = debounce(getRepositoryContents, 500)
</script>
