<template>
  <VApp :theme="$theme.theme">
    <AppBar />
    <VMain>
      <slot />
    </VMain>
  </VApp>
</template>

<script setup>
  import { AppBar } from "~/components"
  import { useThemeStore } from "../stores"

  const $theme = useThemeStore()
</script>
