/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        colors: {
            // Apple-style premium dark palette
            appleBg: '#000000',
            appleCard: '#1c1c1e',
            appleGray: '#86868b',
            appleAccent: '#0071e3',
        },
        fontFamily: {
            sans: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        },
        },
    },
    plugins: [],
}