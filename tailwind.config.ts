import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { himalayan: "#0F4C81", himalyan: "#0F4C81", adventure: "#FF6B00", forest: "#1B4332", slate: "#1F2937" }, fontFamily: { display: ["var(--font-poppins)"], sans: ["var(--font-inter)"] } } }, plugins: [] } satisfies Config;
