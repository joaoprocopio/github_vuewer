<template>
  <VForm @submit.prevent="$emit('searchPage', searchParam)">
    <VAutocomplete
      v-model:search="searchParam"
      :loading="$props.isSearching"
      :disabled="$props.isDisabled"
      :items="$props.searchResult"
      :prepend-inner-icon="$props.icon"
      item-title="login"
      hide-no-data
      hide-details
      density="compact"
      variant="filled"
      @input="$emit('searchBar', searchParam)" />
  </VForm>
</template>

<script setup>
  import { ref } from "vue"

  const $emit = defineEmits(["searchBar", "searchPage"])

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
