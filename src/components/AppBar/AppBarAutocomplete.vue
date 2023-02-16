<template>
  <VAutocomplete
    v-model="result"
    v-model:search="query"
    :loading="$props.loading"
    :items="$props.items"
    prepend-inner-icon="person"
    variant="filled"
    density="compact"
    item-title="login"
    hide-no-data
    hide-details
    @update:search="$emit('search', query)"
    @update:model-value="$emit('get', result)" />
</template>

<script setup>
  import { ref } from "vue"

  const $emit = defineEmits(["search", "get"])

  const $props = defineProps({
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  })

  const query = ref("")
  const result = ref("")
</script>
