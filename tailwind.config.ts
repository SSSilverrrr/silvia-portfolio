import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"], mono: ["Courier New", "monospace"] } } }, plugins: [] } satisfies Config;
