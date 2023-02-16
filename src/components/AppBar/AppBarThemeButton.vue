<template>
  <VBtn
    :icon="$theme.theme === 'light' ? 'light_mode' : 'dark_mode'"
    variant="plain"
    @click="$theme.toggleTheme" />
</template>
