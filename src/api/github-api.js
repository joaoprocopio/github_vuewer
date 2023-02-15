import { $axios } from "./axios"

const searchUsers = (params) => $axios.get("/search/users", { params: params })

const searchRepos = (params) =>
  $axios.get("/search/repositories", { params: params })

const GithubApi = {
  searchUsers,
  searchRepos,
}

export { GithubApi }
