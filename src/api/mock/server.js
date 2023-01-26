import { createServer, Model } from "miragejs"

function mockServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", { name: "Bob" })
      server.create("user", { name: "Alice" })
    },

    routes() {
      this.get("/users", (schema) => {
        return schema.users.all()
      })
    },
  })

  return server
}

export { mockServer }
