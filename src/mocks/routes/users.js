import { Response } from "miragejs"

export const users = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/users"

      this.get("/:username/repos", function (schema, request) {
        return new Response(
          200,
          {},
          schema.users.findBy({ login: request.params.username })
        )
      })
    },
  })
}
