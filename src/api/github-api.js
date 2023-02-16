import { $axios } from "./axios"

const searchUsers = (params) => $axios.get("/search/users", { params: params })

const getUserRepositories = (username, params) =>
  $axios.get(`/users/${username}/repos`, { params: params })

export const GithubApi = {
  searchUsers,
  getUserRepositories,
}
