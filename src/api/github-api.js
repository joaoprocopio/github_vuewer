import { $axios } from "./axios"

const searchUsers = (params) => $axios.get("/search/users", { params: params })

export const GithubApi = {
  searchUsers,
}
