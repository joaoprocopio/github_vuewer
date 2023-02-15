import { Response } from "miragejs"

export const search = function (server) {
  server.config({
    routes() {
      this.namespace = "/search/"

      this.get("/users/", (schema, request) => {
        return new Response(200, {}, schema.users.all())
      })
    },
  })
}
