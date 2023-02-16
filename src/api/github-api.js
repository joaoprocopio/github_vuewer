import { $axios } from "./axios"

const getUsers = (params) => $axios.get("/search/users", { params: params })

const getUserRepositories = (username) => $axios.get(`/users/${username}/repos`)

const getRepositoryContents = (username, repository) =>
  $axios.get(`/repos/${username}/${repository}/contents`)

export const GithubApi = {
  getUsers,
  getUserRepositories,
  getRepositoryContents,
}
