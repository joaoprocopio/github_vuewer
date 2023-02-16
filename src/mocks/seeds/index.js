import { userSeeds } from "~/mocks/configs"

export function seeds(server) {
  server.createList("user", userSeeds)
}
