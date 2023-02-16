import { GithubApi } from "~/api"

const searchUsers = async (params) =>
  GithubApi.searchUsers(params)
    .then(({ data }) => data.items)
    .catch((error) => Promise.reject(error))

export const GithubServices = {
  searchUsers,
}
