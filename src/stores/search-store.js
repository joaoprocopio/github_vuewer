import { ref } from "vue"
import { defineStore } from "pinia"

export const useSearchStore = defineStore("useSearchStore", () => {
  const searchResult = ref([])
  const isSearching = ref(false)

  return { searchResult, isSearching }
})
