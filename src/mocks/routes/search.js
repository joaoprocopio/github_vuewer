import { Response } from "miragejs"

export const search = function (server) {
  server.config({
    routes() {
      this.namespace = "/search/"

      this.get("/users/", function (schema, request) {
        const params = {
          page: parseInt(request?.queryParams?.page) || 1,
          per_page: parseInt(request?.queryParams?.per_page) || 30,
        }

        const totalCount = schema.users.all().length

        const items = this.serialize(
          schema.users
            .all()
            .slice(
              params.page * params.per_page - params.per_page,
              params.page * params.per_page
            )
            .sort((a, b) => {
              return new Date(b.updatedAt) - new Date(a.updatedAt)
            })
        )
        return new Response(200, {}, { total_count: totalCount, items: items })
      })
    },
  })
}
