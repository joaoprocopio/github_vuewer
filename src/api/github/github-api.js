import { githubHttpClient } from "./github-http-client"

const searchUser = (query) =>
  githubHttpClient
    .get(`/search/users?q=${query}`)
    .then((response) => response.data)

const searchRepo = (query) =>
  githubHttpClient
    .get(`/search/repositories?q=${query}`)
    .then((response) => response.data)

const GithubApi = {
  searchUser,
  searchRepo,
}

export { GithubApi }
