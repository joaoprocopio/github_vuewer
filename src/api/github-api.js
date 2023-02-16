import { $axios } from "./axios"

const searchUsers = (params) => $axios.get("/search/users", { params: params })

const getUserRepositories = (user, params) =>
  $axios.get(`/users/${user}/repos`, { params: params })

export const GithubApi = {
  searchUsers,
  getUserRepositories,
}
