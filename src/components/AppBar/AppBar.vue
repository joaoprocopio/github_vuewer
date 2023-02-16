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
            :search-result="$user.search"
            :is-searching="$user.isSearching"
            @search="searchUserDebounced"
            @get="getUserRepositoriesDebounced" />
        </VCol>
        <VCol>
          <AppBarSelect />
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
  import { useThemeStore, useUserStore } from "~/stores"

  const $theme = useThemeStore()
  const $user = useUserStore()

  const searchUser = async (query) => {
    if (!query) {
      return
    }

    $user.isSearching = true

    $user.search = await GithubServices.searchUsers({
      q: query,
      per_page: 5,
    }).finally(() => {
      $user.isSearching = false
    })
  }
  const getUserRepositories = async (username) => {
    $user.isSearching = true

    $user.repositories = await GithubServices.getUserRepositories(
      username
    ).finally(() => {
      $user.isSearching = false
    })
  }

  const searchUserDebounced = debounce(searchUser, 500)
  const getUserRepositoriesDebounced = debounce(getUserRepositories, 500)
</script>
