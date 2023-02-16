<template>
  <VAppBar
    class="px-4"
    elevation="0"
    density="comfortable"
    border>
    <template #prepend>
      <VBtn
        class="mr-2"
        :to="{ name: 'home-page' }"
        variant="plain"
        icon="home" />
    </template>

    <AppBarSearch
      :search-result="$userSearch.searchResult"
      :is-searching="$userSearch.isSearching"
      @search="searchUserDebounced" />

    <template #append>
      <VBtn
        class="ml-2"
        :icon="$globalTheme.theme === 'light' ? 'light_mode' : 'dark_mode'"
        variant="plain"
        @click="$globalTheme.toggleTheme" />
    </template>
  </VAppBar>
</template>

<script setup>
  import { debounce } from "lodash"

  import { AppBarSearch } from "~/components"

  import { GithubServices } from "~/services"
  import { useGlobalThemeStore, useSearchStore } from "~/stores"

  const $globalTheme = useGlobalThemeStore()
  const $userSearch = useSearchStore()

  const searchUser = async (query) => {
    if (!query) {
      return
    }

    $userSearch.isSearching = true

    $userSearch.searchResult = await GithubServices.searchUsers({
      q: query,
      per_page: 5,
    }).finally(() => {
      $userSearch.isSearching = false
    })
  }
  const searchUserDebounced = debounce(searchUser, 500)
</script>
