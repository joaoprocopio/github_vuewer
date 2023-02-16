import { Response } from "miragejs"

export const users = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/users"

      this.get("/:username/repos", function (schema, request) {
        const username = request?.params?.username

        if (!username) {
          return new Response(422, {}, {})
        }

        const repositories = this.serialize(schema.repositories.all()).filter(
          (repository) => {
            return repository.owner.login === username
          }
        )

        return new Response(200, {}, repositories)
      })
    },
  })
}
