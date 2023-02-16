<template>
  <VSelect
    :items="$props.items"
    :loading="$props.loading"
    item-title="name"
    prepend-inner-icon="collections_bookmark"
    variant="filled"
    density="compact"
    hide-no-data
    hide-details />
</template>

<script setup>
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
</script>
