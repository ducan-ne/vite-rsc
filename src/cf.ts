import { handler } from './entry-server'

export default import.meta.env.DEV ? handler : {
  fetch: handler,
}
