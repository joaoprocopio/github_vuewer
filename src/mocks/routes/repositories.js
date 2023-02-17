import { Response } from "miragejs"

export const repositories = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/repos"

      this.get("/:username/:repository/contents", function (schema, request) {
        const params = {
          username: request?.params?.username,
          repository: request?.params?.repository,
        }

        const contents = this.serialize(schema.contents.all()).filter(
          (content) => {
            return (
              content.repository.name === params.repository &&
              content.repository.owner.login === params.username
            )
          }
        )

        return new Response(200, {}, contents)
      })
    },
  })
}
