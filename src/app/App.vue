<template>
  <VApp :theme="$theme.theme">
    <!-- TODO: trocar search user por get users -->
    <AppBar
      :theme="$theme.theme"
      :users="$user.items"
      :repositories="$repository.items"
      :users-loading="$user.loading"
      :repositories-loading="$repository.loading"
      @toggle-theme="$theme.toggleTheme"
      @search-user="searchUserDebounced"
      @get-user-repos="getUserRepositoriesDebounced"
      @get-repository-contents="getRepositoryContentsDebounced" />
    <VMain>
      <!-- TODO: aqui vai a tela de interação com o repositório -->
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

  const searchUser = async (username) => {
    if (!username) {
      return
    }
    if ($user.items.findIndex((user) => user?.login === username) === 0) {
      return
    }

    const params = {
      q: username,
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
    $repository.loading = true

    $repository.contents = await GithubServices.getRepositoryContents(
      $user.name,
      repository
    ).finally(() => {
      $repository.name = repository
      $repository.loading = false
    })
  }

  const searchUserDebounced = debounce(searchUser, 500)
  const getUserRepositoriesDebounced = debounce(getUserRepositories, 500)
  const getRepositoryContentsDebounced = debounce(getRepositoryContents, 500)
</script>
