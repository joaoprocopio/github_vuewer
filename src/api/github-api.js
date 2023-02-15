import { $axios } from "./axios"

const searchUser = (params) =>
  $axios
    .get("/search/users", { params: params })
    .then((response) => response.data)

const searchRepo = (query) =>
  $axios
    .get(`/search/repositories?q=${query}`)
    .then((response) => response.data)

const GithubApi = {
  searchUser,
  searchRepo,
}

export { GithubApi }
