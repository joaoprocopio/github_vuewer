import { ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", () => {
  const items = ref([])
  const loading = ref(false)

  return { items, loading }
})
