<template>
  <VApp :theme="$globalTheme.theme">
    <AppBar />
    <VMain>
      <slot />
    </VMain>
    <VFooter />
  </VApp>
</template>

<script setup>
  import { AppBar } from "~/components"
  import { useGlobalThemeStore } from "../stores"

  const $globalTheme = useGlobalThemeStore()
</script>
