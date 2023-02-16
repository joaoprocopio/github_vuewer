import { search } from "./search"
import { users } from "./users"

export function routes() {
  users(this)
  search(this)
}
