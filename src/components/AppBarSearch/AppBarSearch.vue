<template>
  <VForm @submit.prevent="$emit('search-page', searchParam)">
    <VAutocomplete
      v-model="searchParam"
      :loading="$props.isSearching"
      :items="$props.searchResult"
      hide-no-data
      density="compact"
      hide-details="auto"
      variant="filled"
      prepend-inner-icon="search"
      @input="$emit('search-bar', searchParam)" />
  </VForm>
</template>

<script setup>
  import { ref } from "vue"

  const $emit = defineEmits(["search-bar", "search-page"])

  const $props = defineProps({
    isSearching: {
      type: Boolean,
      required: true,
      default: false,
    },
    searchResult: {
      type: Array,
      required: true,
      default: () => [],
    },
  })

  const searchParam = ref("")
</script>
