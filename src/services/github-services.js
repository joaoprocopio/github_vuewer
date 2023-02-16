import { GithubApi } from "~/api"

const getUsers = async (params) =>
  GithubApi.getUsers(params)
    .then(({ data }) => data.items)
    .catch((error) => Promise.reject(error))

const getUserRepositories = async (username, params) =>
  GithubApi.getUserRepositories(username, { params: params })
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error))

const getRepositoryContents = async (username, repository) =>
  GithubApi.getRepositoryContents(username, repository)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(error))

export const GithubServices = {
  getUsers,
  getUserRepositories,
  getRepositoryContents,
}
