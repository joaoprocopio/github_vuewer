<template>
  <VApp :theme="$theme.theme">
    <AppBar />
    <VMain>
      <!-- TODO: aqui vai a tela de interação com o repositório -->
    </VMain>
  </VApp>
</template>

<script setup>
  import { AppBar } from "~/components"
  import { useThemeStore } from "../stores"

  const $theme = useThemeStore()
</script>
