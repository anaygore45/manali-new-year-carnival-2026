import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { himalayan: "#1a6fad", himalyan: "#1a6fad", adventure: "#FF6B00", forest: "#0d2b1d", slate: "#0d1117" }, fontFamily: { display: ["var(--font-poppins)"], sans: ["var(--font-inter)"] } } }, plugins: [] } satisfies Config;
