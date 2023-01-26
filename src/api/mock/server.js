import { createServer, Model } from "miragejs"

function mockServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", { username: "joaoprocopio" })
      server.create("user", { username: "alliceprocopio" })
    },

    routes() {
      this.get("users/:username", (schema, request) => {
        const username = request.params.username

        return schema.users.findBy({ username: username })
      })
    },
  })

  return server
}

export { mockServer }
