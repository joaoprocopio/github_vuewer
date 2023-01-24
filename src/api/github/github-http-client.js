import axios from "axios"

const githubHttpClient = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 60000,
})

export { githubHttpClient }
