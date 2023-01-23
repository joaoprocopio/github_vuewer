import App from "./App.vue"

import { createApp } from "vue"

import { installPlugins } from "~/plugins"

const app = createApp(App)

app.use()

installPlugins(app)

app.mount("#app")

export { app }
