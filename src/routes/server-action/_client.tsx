'use client'

import { useActionState } from '@hiogawa/react-server/client'
import { Button } from '@nextui-org/react'
import { changeCounter, returnJSX } from './_action'

export function ReturnJSX() {
  const [state, action] = useActionState(returnJSX, null)
  return (
    <div>
      {state}
      <Button
        onClick={async () => {
          action({})
        }}
      >
        Load
      </Button>
    </div>
  )
}

export function Counter({ value }: { value: number }) {
  return (
    <form action={changeCounter}>
      <div>Count: {value}</div>
      <div className="flex gap-2">
        <Button
          name="delta"
          type="submit"
          value={-1}
        >
          -1
        </Button>
        <Button
          name="delta"
          type="submit"
          value={+1}
        >
          +1
        </Button>
      </div>
    </form>
  )
}
