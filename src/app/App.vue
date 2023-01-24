<template>
  <v-btn
    prepend-icon="waving_hand"
    @click="fetch"
    >hello world!</v-btn
  >
</template>

<script setup>
  import { GithubApi } from "~/api"

  const fetch = async () => {
    const username = "joaoprocopio"
    const response = await GithubApi.getUser(username)

    console.log(response.data)
  }
</script>
