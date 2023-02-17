import { repositorySeeds } from "~/mocks/configs"
import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"
import { random } from "lodash"

export const content = Factory.extend({
  repositoryId() {
    return random(1, repositorySeeds)
  },
  name() {
    return this.type === "file"
      ? faker.system.commonFileName()
      : faker.system.directoryPath().split("/")[1]
  },
  type() {
    const types = new Array(5).fill("file")
    types.push("dir")

    return types[random(0, types.length - 1)]
  },
})
