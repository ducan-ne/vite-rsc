"use client";

import { Button } from '@nextui-org/react'
import React from "react";

export function Counter() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <span>Count: {value}</span>
      <div className="flex gap-2">
        <Button onClick={() => setValue((v) => v - 1)}>-1</Button>
        <Button onClick={() => setValue((v) => v + 1)}>+1</Button>
      </div>
    </div>
  );
}
