export function seeds(server) {
  server.loadFixtures()
  server.createList("user", 10)
}
