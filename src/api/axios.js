import axios from "axios"

import { env } from "@/configs"

export const $axios = axios.create({
  baseURL: env.isDev && env.isMock ? env.apiMockUrl : env.apiUrl,
})
