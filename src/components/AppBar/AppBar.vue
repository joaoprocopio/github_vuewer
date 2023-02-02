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
      <AppBarSearch icon="person" />
    </VResponsive>
    <VResponsive max-width="300">
      <AppBarSearch icon="book" />
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

  const $globalTheme = useGlobalTheme()
  const $search = useSearch()
</script>
