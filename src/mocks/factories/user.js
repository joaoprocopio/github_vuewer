import { Factory } from "miragejs"
import { faker } from "@faker-js/faker"

export const user = Factory.extend({
  name() {
    return faker.company.name()
  },
})
