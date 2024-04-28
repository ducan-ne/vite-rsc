import { getCounter } from './_action'
import { Counter, ReturnJSX } from './_client'

export default async function Page() {
  return (
    <div className="flex flex-col gap-2">
      <Counter value={getCounter()} />
      <ReturnJSX />
    </div>
  )
}
