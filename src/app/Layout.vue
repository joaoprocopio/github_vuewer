<template>
  <VApp :theme="$globalTheme.theme">
    <component :is="layout">
      <slot />
    </component>
  </VApp>
</template>

<script setup>
  import { useGlobalTheme } from "~/stores"
  import { useRoute } from "vue-router"
  import { computed } from "vue"

  const $route = useRoute()
  const $globalTheme = useGlobalTheme()

  const layout = computed(() => $route?.meta?.layout || "DefaultLayout")
</script>
