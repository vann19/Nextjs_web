"use client";

import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setstate] = useState(0);
  return (
    <div>
      {/* <div>Hello world {state}</div> */}
      {/* <button onClick={() => setstate(state + 1)}>+</button> */}
      {children}
    </div>
  );
}
