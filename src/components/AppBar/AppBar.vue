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

    <VResponsive
      class="mr-8"
      max-width="300">
      <AppBarSearch
        icon="person"
        :search-result="$userSearch.searchResult"
        :is-searching="$userSearch.isSearching"
        :is-disabled="$userSearch.isDisabled"
        @search-bar="searchUser" />
    </VResponsive>
    <VResponsive max-width="300">
      <AppBarSearch
        icon="collections_bookmark"
        :search-result="$repositorySearch.searchResult"
        :is-searching="$repositorySearch.isSearching"
        :is-disabled="$repositorySearch.isDisabled"
        @search-bar="searchRepository" />
    </VResponsive>

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
  import { GithubServices } from "~/services"
  import { AppBarSearch } from "~/components"
  import { useGlobalTheme, useSearch } from "~/stores"
  import { debounce } from "lodash"

  const $globalTheme = useGlobalTheme()
  const $userSearch = useSearch()
  const $repositorySearch = useSearch()

  const searchUser = debounce(async (params) => {
    $userSearch.searchResult = await GithubServices.searchUsers(params).then(
      (response) => response.items
    )
  }, 500)

  const searchRepository = debounce(() => console.log("aiusdhaiusdh"), 500)
</script>
