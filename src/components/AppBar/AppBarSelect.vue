<template>
  <VSelect
    v-model="selected"
    :items="$props.items"
    :loading="$props.loading"
    item-title="name"
    prepend-inner-icon="collections_bookmark"
    variant="filled"
    density="compact"
    hide-no-data
    hide-details
    @update:model-value="$emit('get', selected)" />
</template>

<script setup>
  import { ref } from "vue"

  const $emit = defineEmits(["get"])

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

  const selected = ref("")
</script>
