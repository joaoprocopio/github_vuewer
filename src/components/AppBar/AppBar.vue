<template>
  <VAppBar border elevation="0" density="comfortable">
    <template #prepend>
      <VBtn variant="plain" icon="travel_explore" />
    </template>

    <VResponsive>
      <VRow>
        <VCol>
          <VAutocomplete
            v-model="usernameFind"
            v-model:search="usernameQuery"
            :items="$props.users"
            :loading="$props.usersLoading"
            item-title="login"
            prepend-inner-icon="person"
            variant="filled"
            density="compact"
            hide-no-data
            hide-details
            @update:search="$emit('getUsers', usernameQuery)"
            @update:model-value="$emit('getUserRepos', usernameFind)" />
        </VCol>
        <VCol>
          <VSelect
            v-model="repositorySelected"
            :items="$props.repositories"
            :loading="$props.repositoriesLoading"
            item-title="name"
            prepend-inner-icon="collections_bookmark"
            variant="filled"
            density="compact"
            hide-no-data
            hide-details
            @update:model-value="
              $emit('getRepositoryContents', repositorySelected)
            " />
        </VCol>
      </VRow>
    </VResponsive>

    <template #append>
      <VBtn
        :icon="$props.theme === 'light' ? 'light_mode' : 'dark_mode'"
        variant="plain"
        @click="$emit('toggleTheme')" />
    </template>
  </VAppBar>
</template>

<script setup>
  import { ref } from "vue"

  const usernameQuery = ref("")
  const usernameFind = ref("")
  const repositorySelected = ref("")

  const $props = defineProps({
    theme: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
    repositories: {
      type: Array,
      required: true,
    },
    usersLoading: {
      type: Boolean,
      required: true,
    },
    repositoriesLoading: {
      type: Boolean,
      required: true,
    },
  })
  const $emit = defineEmits([
    "toggleTheme",
    "getUsers",
    "getUserRepos",
    "getRepositoryContents",
  ])
</script>
