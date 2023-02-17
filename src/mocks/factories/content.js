import { repositorySeeds } from "~/mocks/configs"
import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"
import { sampleSize, random } from "lodash"

export const content = Factory.extend({
  name() {
    return faker.system.fileName()
  },
  repositoryId() {
    return random(1, repositorySeeds)
  },
  path() {
    return faker.system.filePath()
  },
})
