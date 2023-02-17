import { ActiveModelSerializer } from "miragejs"

export const serializers = {
  user: ActiveModelSerializer.extend({
    embed: true,
    root: false,
  }),
  content: ActiveModelSerializer.extend({
    embed: true,
    root: false,
    include: ["repository"],
  }),
  repository: ActiveModelSerializer.extend({
    embed: true,
    root: false,
    include: ["owner"],
  }),
}
