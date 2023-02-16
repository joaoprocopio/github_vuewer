<template>
  <VAppBar
    border
    elevation="0"
    density="comfortable">
    <template #prepend>
      <VBtn
        variant="plain"
        icon="travel_explore" />
    </template>

    <VResponsive>
      <VRow>
        <VCol>
          <AppBarAutocomplete
            :items="$user.items"
            :loading="$user.loading"
            @search="searchUserDebounced"
            @get="getUserRepositoriesDebounced" />
        </VCol>
        <VCol>
          <AppBarSelect
            :items="$repository.items"
            :loading="$repository.loading"
            @get="getRepositoryContentsDebounced" />
        </VCol>
      </VRow>
    </VResponsive>

    <template #append>
      <VBtn
        :icon="$theme.theme === 'light' ? 'light_mode' : 'dark_mode'"
        variant="plain"
        @click="$theme.toggleTheme" />
    </template>
  </VAppBar>
</template>

<script setup>
  import { debounce } from "lodash"

  import { AppBarAutocomplete, AppBarSelect } from "~/components"

  import { GithubServices } from "~/services"
  import { useThemeStore, useUserStore, useRepositoryStore } from "~/stores"

  const $theme = useThemeStore()
  const $user = useUserStore()
  const $repository = useRepositoryStore()

  const searchUser = async (query) => {
    if (!query) {
      return
    }
    if ($user.items.findIndex((user) => user?.login === query) === 0) {
      return
    }

    const params = {
      q: query,
      per_page: 5,
    }

    $user.loading = true

    $user.items = await GithubServices.searchUsers(params).finally(() => {
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
    console.log(repository)
  }

  const searchUserDebounced = debounce(searchUser, 500)
  const getUserRepositoriesDebounced = debounce(getUserRepositories, 500)
  const getRepositoryContentsDebounced = debounce(getRepositoryContents, 500)
</script>
