import { Response } from "miragejs"

export const search = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/search/"

      this.get("/users/", (schema) => {
        return new Response(200, {}, schema.users.all())
      })
    },
  })
}
