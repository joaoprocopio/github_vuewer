import { Model, belongsTo } from "miragejs"

export const models = {
  user: Model,
  repository: Model.extend({
    owner: belongsTo("user"),
  }),
}
