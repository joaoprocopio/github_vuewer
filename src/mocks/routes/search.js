import { Response } from "miragejs"

export const search = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/search"

      this.get("/users", function (schema, request) {
        const params = {
          username: request?.queryParams?.q,
          page: parseInt(request?.queryParams?.page) || 1,
          per_page: parseInt(request?.queryParams?.per_page) || 30,
        }

        const items = schema.users.where((obj) =>
          obj.login.toLowerCase().includes(params.username.toLowerCase())
        )

        const totalCount = items.length

        return new Response(
          200,
          {},
          {
            total_count: totalCount,
            items: this.serialize(items).slice(
              params.page * params.per_page - params.per_page,
              params.page * params.per_page
            ),
          }
        )
      })
    },
  })
}
