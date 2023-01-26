import axios from "axios"

const isDevelopment = process.env.NODE_ENV === "development"

const githubHttpClient = axios.create({
  baseURL: isDevelopment ? undefined : "https://api.github.com/",
  timeout: 60000,
})

export { githubHttpClient }
