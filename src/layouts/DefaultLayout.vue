<template>
  <AppHeader />
  <VMain>
    <slot />
  </VMain>
  <AppFooter />
</template>

<script setup>
  import { AppHeader, AppFooter } from "~/components"
</script>
