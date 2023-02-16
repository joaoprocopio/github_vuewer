import { ref } from "vue"
import { defineStore } from "pinia"

export const useRepositoryStore = defineStore("repositoryStore", () => {
  const name = ref("")
  const contents = ref([])
  const items = ref([])
  const loading = ref(false)

  return { name, contents, items, loading }
})
