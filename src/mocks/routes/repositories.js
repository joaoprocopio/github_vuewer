import { Response } from "miragejs"

export const repositories = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/repos"

      this.get("/:username/:repository/contents", (schema, request) => {
        const params = {
          username: request?.params?.username,
          repository: request?.params?.repository,
        }

        console.log(params)

        return new Response(200, {}, {})
      })
    },
  })
}
