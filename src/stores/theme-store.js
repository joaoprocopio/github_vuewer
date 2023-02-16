import { ref } from "vue"
import { defineStore } from "pinia"

export const useThemeStore = defineStore("useThemeStore", () => {
  const theme = ref("dark")

  const toggleTheme = () =>
    (theme.value = theme.value === "light" ? "dark" : "light")

  return { theme, toggleTheme }
})
