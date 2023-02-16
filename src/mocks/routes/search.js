import { Response } from "miragejs"

export const search = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/search/"

      this.get("/users/", function (schema, request) {
        const params = {
          q: request?.queryParams?.q,
          page: parseInt(request?.queryParams?.page) || 1,
          per_page: parseInt(request?.queryParams?.per_page) || 30,
        }

        if (!params.q) {
          return new Response(422, {}, {})
        }

        const items = this.serialize(
          // TODO: isso daqui é MUITO, mas MUITO LENTO!!!!!!!!
          schema.users.where((obj) =>
            obj.login.toLowerCase().includes(params.q.toLowerCase())
          )
        )

        const totalCount = items.length

        return new Response(
          200,
          {},
          {
            total_count: totalCount,
            items: items
              .slice(
                params.page * params.per_page - params.per_page,
                params.page * params.per_page
              )
              .sort((a, b) => {
                return new Date(b.updatedAt) - new Date(a.updatedAt)
              }),
          }
        )
      })
    },
  })
}
