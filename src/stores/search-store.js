import { ref } from "vue"
import { defineStore } from "pinia"

export const useSearchStore = defineStore("searchStore", () => {
  const searchResult = ref([])
  const isSearching = ref(false)

  return { searchResult, isSearching }
})
