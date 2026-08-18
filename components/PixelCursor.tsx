"use client";
import { useEffect, useState } from "react";
export default function PixelCursor() { const [p, setP] = useState({ x: -80, y: -80 }); useEffect(() => { const m = (e: MouseEvent) => setP({ x: e.clientX, y: e.clientY }); window.addEventListener("mousemove", m); return () => window.removeEventListener("mousemove", m); }, []); return <div aria-hidden className="pixel-cursor hidden md:block" style={{ transform: `translate(${p.x}px,${p.y}px)` }}><i /><span>YOU</span></div>; }
