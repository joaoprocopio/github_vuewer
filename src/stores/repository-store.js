import { ref } from "vue"
import { defineStore } from "pinia"

export const useRepositoryStore = defineStore("repositoryStore", () => {
  const items = ref([])
  const loading = ref(false)

  return { items, loading }
})
