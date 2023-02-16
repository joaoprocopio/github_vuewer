import { ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", () => {
  const searchResult = ref([])
  const isSearching = ref(false)

  return { searchResult, isSearching }
})
