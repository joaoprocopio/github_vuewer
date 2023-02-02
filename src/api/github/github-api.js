import { githubHttpClient } from "./github-http-client"

const searchUser = (username) =>
  githubHttpClient.get(`/search/users?q=${username}`)

const searchRepo = (query) =>
  githubHttpClient.get(`/search/repositories?q=${query}`)

const GithubApi = {
  searchUser,
  searchRepo,
}

export { GithubApi }
