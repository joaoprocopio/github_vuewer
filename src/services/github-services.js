import { GithubApi } from "~/api"

const searchUsers = async (params) =>
  GithubApi.searchUsers(params)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error))

export const GithubServices = {
  searchUsers,
}
