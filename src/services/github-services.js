import { GithubApi } from "~/api"

const searchUsers = async (params) =>
  GithubApi.searchUsers(params)
    .then(({ data }) => data.items)
    .catch((error) => Promise.reject(error))

const getUserRepositories = async (username, params) =>
  GithubApi.getUserRepositories(username, { params: params }).then(
    ({ data }) => data
  )

export const GithubServices = {
  searchUsers,
  getUserRepositories,
}
