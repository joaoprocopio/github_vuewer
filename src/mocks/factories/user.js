import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"

import { env } from "@/configs"

export const user = Factory.extend({
  login() {
    return faker.internet.userName()
  },
  avatarUrl() {
    return faker.image.avatar()
  },
  url() {
    return `${env.apiMockUrl}/users/${this.login}`
  },
  reposUrl() {
    return `${env.apiMockUrl}/users/${this.login}/repos`
  },
})
