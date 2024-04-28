import { getCounter } from './_action'
import { Counter, ReturnJSX } from './_client'

export default async function Page() {
  return (
    <div>
      <Counter value={getCounter()} />
      <ReturnJSX />
    </div>
  )
}
