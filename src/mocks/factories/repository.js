import { userSeeds } from "~/mocks/configs"
import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"
import { random } from "lodash"

export const repository = Factory.extend({
  name() {
    return faker.git.branch()
  },
  ownerId() {
    return random(1, userSeeds)
  },
})
