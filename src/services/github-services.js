import { GithubApi } from "~/api"

const searchUsers = async (params) =>
  GithubApi.searchUsers(params)
    .then(({ data }) => data.items)
    .catch((error) => Promise.reject(error))

const getUserRepos = async (username, params) =>
  GithubApi.getUserRepos(username, { params: params }).then(({ data }) => data)

export const GithubServices = {
  searchUsers,
  getUserRepos,
}
