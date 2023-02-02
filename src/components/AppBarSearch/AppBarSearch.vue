<template>
  <VForm @submit.prevent="$emit('search-page', searchParam)">
    <VAutocomplete
      v-model="searchParam"
      :loading="$props.isSearching"
      :disabled="$props.isDisabled"
      :items="$props.searchResult"
      :prepend-inner-icon="$props.icon"
      hide-no-data
      density="compact"
      hide-details="auto"
      variant="filled"
      @input="$emit('search-bar', searchParam)" />
  </VForm>
</template>

<script setup>
  import { ref } from "vue"

  const $emit = defineEmits(["search-bar", "search-page"])

  const $props = defineProps({
    searchResult: {
      type: Array,
      required: true,
      default: () => [],
    },
    icon: {
      type: String,
      required: true,
    },
    isSearching: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  })

  const searchParam = ref("")
</script>
