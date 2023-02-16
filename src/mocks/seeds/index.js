import { repositorySeeds, userSeeds } from "~/mocks/configs"

export function seeds(server) {
  server.createList("user", userSeeds)
  server.createList("repository", repositorySeeds)
}
