import { repositorySeeds, userSeeds, contentSeeds } from "~/mocks/configs"

export function seeds(server) {
  server.createList("user", userSeeds)
  server.createList("repository", repositorySeeds)
  server.createList("content", contentSeeds)
}
