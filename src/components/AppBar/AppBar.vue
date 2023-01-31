<template>
  <VAppBar
    class="px-4"
    elevation="0">
    <template #prepend>
      <VBtn
        class="mr-2"
        :to="{ name: 'home-page' }"
        variant="plain"
        icon="home" />
    </template>

    <VResponsive max-width="500">
      <AppBarSearch />
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
  import { useGlobalTheme } from "~/stores"

  const $globalTheme = useGlobalTheme()
</script>
