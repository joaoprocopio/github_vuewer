<template>
  <VResponsive>
    <VRow>
      <VCol>
        <VAutocomplete
          v-model="result"
          v-model:search="query"
          :loading="$props.isSearching"
          :items="$props.searchResult"
          prepend-inner-icon="person"
          variant="filled"
          density="compact"
          item-title="login"
          hide-no-data
          hide-details
          @update:search="$emit('search', query)"
          @update:model-value="$emit('get', result)" />
      </VCol>
      <VCol>
        <VSelect
          prepend-inner-icon="collections_bookmark"
          variant="filled"
          density="compact"
          hide-no-data
          hide-details />
      </VCol>
    </VRow>
  </VResponsive>
</template>

<script setup>
  import { ref } from "vue"

  const $emit = defineEmits(["search", "get"])

  const $props = defineProps({
    searchResult: {
      type: Array,
      required: true,
      default: () => [],
    },
    isSearching: {
      type: Boolean,
      default: false,
    },
  })

  const query = ref("")
  const result = ref("")
</script>
