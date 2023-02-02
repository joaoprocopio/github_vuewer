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
        @search-bar="searchUserDebounced" />
    </VResponsive>
    <VResponsive max-width="300">
      <AppBarSearch
        icon="collections_bookmark"
        :search-result="$repositorySearch.searchResult"
        :is-searching="$repositorySearch.isSearching"
        :is-disabled="$repositorySearch.isDisabled"
        @search-bar="searchRepositoryDebounced" />
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
  import { AppBarSearch } from "~/components"
  import { useGlobalTheme, useSearch } from "~/stores"
  import { debouncer } from "~/utils"
  import { GithubApi } from "~/api"

  const $globalTheme = useGlobalTheme()
  const $userSearch = useSearch()
  const $repositorySearch = useSearch()

  const searchUser = async (query) => {
    try {
      $userSearch.searchResult = await GithubApi.searchUser(query).then(
        (response) => response.items
      )
    } catch (error) {
      return error
    }
  }
  const searchUserDebounced = debouncer(() => searchUser(), 500)

  const searchRepository = () => console.log("aiusdhaiusdh")
  const searchRepositoryDebounced = debouncer(() => searchRepository())
</script>
