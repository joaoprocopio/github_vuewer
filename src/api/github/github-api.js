import { githubHttpClient } from "./github-http-client"

const searchUser = (username, page, perPage) =>
  githubHttpClient.get(
    `/search/users?q=${username}&page=${page}&per_page=${perPage}`
  )

const getUser = (username) => githubHttpClient.get(`users/${username}`)

const GithubApi = {
  searchUser,
  getUser,
}

export { GithubApi }
