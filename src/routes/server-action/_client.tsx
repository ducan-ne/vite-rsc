'use client'

import { useActionState } from '@hiogawa/react-server/client'
import { changeCounter, returnJSX } from './_action'

export function ReturnJSX() {
  const [state, action] = useActionState(returnJSX, null)
  return (
    <>
      <hr />
      {state}
      <button
        onClick={async () => {
          await action({})
        }}
      >
        Load
      </button>
    </>
  )
}

export function Counter({ value }: { value: number }) {
  return (
    <form action={changeCounter}>
      <div>Count: {value}</div>
      <div>
        <button
          name="delta"
          value={-1}
        >
          -1
        </button>
        <button
          name="delta"
          value={+1}
        >
          +1
        </button>
      </div>
    </form>
  )
}
