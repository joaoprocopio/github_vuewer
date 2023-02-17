import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useRepositoryStore = defineStore("repositoryStore", () => {
  const name = ref("")
  const path = ref("")
  const contents = ref([])
  const items = ref([])
  const loading = ref(false)

  const orderedContents = computed(() =>
    contents.value.sort((previous, next) =>
      previous.type.localeCompare(next.type)
    )
  )

  return { name, path, contents, items, loading, orderedContents }
})
