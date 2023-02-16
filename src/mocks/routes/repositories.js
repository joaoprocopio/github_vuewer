export const repositories = function (server) {
  server.config({
    routes() {
      this.namespace = "/api/repos/"
    },
  })
}
