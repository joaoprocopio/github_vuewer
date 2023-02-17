import { Model, belongsTo, hasMany } from "miragejs"

export const models = {
  user: Model,
  content: Model.extend({
    repository: belongsTo("repository"),
  }),
  repository: Model.extend({
    owner: belongsTo("user"),
    content: hasMany("content"),
  }),
}
