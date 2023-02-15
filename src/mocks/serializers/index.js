import { ActiveModelSerializer } from "miragejs"

export const serializers = {
  user: ActiveModelSerializer.extend({
    embed: true,
    root: false,
  }),
}
