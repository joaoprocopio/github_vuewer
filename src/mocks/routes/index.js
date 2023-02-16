import { repositories } from "./repositories"
import { search } from "./search"
import { users } from "./users"

export function routes() {
  repositories(this)
  users(this)
  search(this)
}
