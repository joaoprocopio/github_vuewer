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
            :search-result="$user.searchResult"
            :is-searching="$user.isSearching"
            @search="searchUserDebounced"
            @get="getUserReposDebounced" />
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

    $user.searchResult = await GithubServices.searchUsers({
      q: query,
      per_page: 5,
    }).finally(() => {
      $user.isSearching = false
    })
  }
  const getUserRepos = async () => {}

  const searchUserDebounced = debounce(searchUser, 500)
  const getUserReposDebounced = debounce(getUserRepos, 500)
</script>
