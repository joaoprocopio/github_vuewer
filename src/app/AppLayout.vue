<template>
  <VApp :theme="$globalTheme.theme">
    <component :is="layout">
      <slot />
    </component>
  </VApp>
</template>

<script setup>
  import { useGlobalThemeStore } from "~/stores"
  import { useRoute } from "vue-router"
  import { computed } from "vue"

  const $route = useRoute()
  const $globalTheme = useGlobalThemeStore()

  const layout = computed(() => $route?.meta?.layout || "DefaultLayout")
</script>
