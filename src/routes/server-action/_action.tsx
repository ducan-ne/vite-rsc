'use server'

import { Card, CardBody, Spinner } from './ui'
import { Suspense } from 'react'

let counter = 0

export function getCounter() {
  return counter
}

export function changeCounter(formData: FormData) {
  counter += Number(formData.get('delta'))
}

const LoadData2 = [async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 3e3)
  })
  return (
    <Card>
      <CardBody>
        Line 2 <span className="text-red-500">text red</span>
      </CardBody>
    </Card>
  )
}][0]

// prevent component from being client component by compiler
const LoadData1 = [async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 2e3)
  })
  return (
    <div className="p-2">
      Line 1
      <Suspense fallback={<div><Spinner label="Loading line 2" /></div>}>
        <LoadData2 />
      </Suspense>
    </div>
  )
}][0]

export async function returnJSX() {
  return (
    <Suspense fallback={<div><Spinner /></div>}>
      <LoadData1 />
    </Suspense>
  )
}