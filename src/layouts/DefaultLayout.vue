<template>
  <VAppBar
    class="px-8 py-4"
    elevation="0">
    <VForm @submit.prevent="search">
      <VTextField
        v-model="searchParam"
        hide-details="auto"
        density="compact"
        variant="outlined"
        prepend-inner-icon="search"
        label="Search" />
    </VForm>
    <VBtn
      :icon="$globalTheme.theme === 'light' ? 'light_mode' : 'dark_mode'"
      @click="$globalTheme.toggleTheme" />
  </VAppBar>
  <VMain>
    <slot />
  </VMain>
  <VFooter>githubsearch</VFooter>
</template>

<script setup>
  import { useGlobalTheme } from "~/stores"
  import { ref } from "vue"
  // import { GithubApi } from "~/api"

  const $globalTheme = useGlobalTheme()
  const searchParam = ref("")

  const search = () => {
    console.log(searchParam.value)
  }
</script>
