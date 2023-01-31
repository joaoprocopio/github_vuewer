<template>
  <VResponsive
    class="mx-auto pt-12 px-8"
    max-width="600px">
    Sorry, but the page
    <VCode class="d-inline-flex">{{ $route.fullPath }}</VCode> could not be
    found in our servers.
  </VResponsive>
</template>

<script setup>
  import { useRoute } from "vue-router"

  const $route = useRoute()
</script>
