import { Response } from "miragejs"

export const users = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/users"

      this.get("/:username/repos", function (schema, request) {
        const params = { username: request?.params?.username }

        const repositories = this.serialize(schema.repositories.all()).filter(
          (repository) => {
            return repository.owner.login === params.username
          }
        )

        return new Response(200, {}, repositories)
      })
    },
  })
}
