/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts}"],
	theme: {
		extend: {
			colors: {
				java: {
					DEFAULT: "var(--java)",
					foreground: "var(--java-foreground)",
				},
				alert: {
					DEFAULT: "var(--alert)",
					foreground: "var(--alert-foreground)",
				},
				download: {
					DEFAULT: "var(--download)",
					foreground: "var(--download-foreground)",
					accent: "var(--download-accent)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				orange: {
					DEFAULT: "var(--orange)",
				},
			},
		},
	},
	plugins: [],
};
