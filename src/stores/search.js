import { ref } from "vue"
import { defineStore } from "pinia"

const useSearch = defineStore("useSearch", () => {
  const searchResult = ref([])
  const isSearching = ref(false)

  return { searchResult, isSearching }
})

export { useSearch }