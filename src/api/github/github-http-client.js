import axios from "axios"

import { env } from "@/configs"

const githubHttpClient = axios.create({
  baseURL: env.isMock ? undefined : env.apiUrl,
  timeout: 60000,
})

export { githubHttpClient }
