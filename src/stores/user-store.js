import { ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", () => {
  const repositories = ref([])
  const search = ref([])
  const isSearching = ref(false)

  return { repositories, search, isSearching }
})
