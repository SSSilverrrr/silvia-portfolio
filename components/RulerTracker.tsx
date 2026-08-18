"use client";

import { useEffect, useState, type CSSProperties } from "react";

export function RulerTracker() {
  const [pointer, setPointer] = useState(50);
  useEffect(() => {
    const update = (event: PointerEvent) => setPointer(Math.round((event.clientX / window.innerWidth) * 100));
    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, []);
  return <div className="canvas-ruler" style={{ "--ruler-pointer": `${pointer}%`, "--ruler-shift": `${(pointer - 50) * .72}px` } as CSSProperties}>
    0 <span>100</span><span>200</span><span>300</span><span>400</span><span>500</span><span>600</span><span>700</span><span>800</span><span>900</span><span>1000</span>
  </div>;
}
