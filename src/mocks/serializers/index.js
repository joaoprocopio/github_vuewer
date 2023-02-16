import { ActiveModelSerializer } from "miragejs"

export const serializers = {
  user: ActiveModelSerializer.extend({
    embed: true,
    root: false,
  }),
  repository: ActiveModelSerializer.extend({
    embed: true,
    root: false,
    include: ["owner"],
  }),
}
