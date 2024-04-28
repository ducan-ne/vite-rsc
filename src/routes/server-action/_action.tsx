'use server'

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
    <p>
      Line 2
    </p>
  )
}][0]

// prevent component from being client component by compiler
const LoadData1 = [async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 2e3)
  })
  return (
    <div>
      Line 1
      <Suspense fallback={<div>Loading data 2...</div>}>
        <LoadData2/>
      </Suspense>
    </div>
  )
}][0]

export function returnJSX() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadData1 />
    </Suspense>
  )
}