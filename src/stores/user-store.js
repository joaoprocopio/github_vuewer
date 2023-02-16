import { ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", () => {
  const repos = ref([])
  const search = ref([])
  const isSearching = ref(false)

  return { repos, search, isSearching }
})
