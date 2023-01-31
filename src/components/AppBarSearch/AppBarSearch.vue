<template>
  <VForm @submit.prevent="search">
    <VAutocomplete
      v-model="searchParam"
      :loading="isLoading"
      hide-details="auto"
      density="compact"
      variant="filled"
      prepend-inner-icon="search" />
  </VForm>
</template>

<script setup></script>
