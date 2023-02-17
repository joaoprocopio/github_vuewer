import { repositorySeeds } from "~/mocks/configs"
import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"
import { random } from "lodash"

export const content = Factory.extend({
  repositoryId() {
    return random(1, repositorySeeds)
  },
  name() {
    return faker.system.fileName()
  },
  path() {
    return faker.system.filePath()
  },
  type() {
    const types = ["file", "file", "file", "file", "file", "dir"]
    return types[random(0, types.length)]
  },
})
