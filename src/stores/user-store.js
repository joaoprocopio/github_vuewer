import { ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", () => {
  const name = ref("")
  const items = ref([])
  const loading = ref(false)

  return { name, items, loading }
})
