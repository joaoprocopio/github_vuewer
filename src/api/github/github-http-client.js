import axios from "axios"

import { env } from "@/configs"

const githubHttpClient = axios.create({
  baseURL: env.isDev && env.isMock ? undefined : env.apiUrl,
})

export { githubHttpClient }
