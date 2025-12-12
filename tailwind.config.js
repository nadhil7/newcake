/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Using your exact brand palette
                primary: {
                    50: '#f5f3f0',      // Very light cream
                    100: '#E1D4C2',     // Your brand color 5
                    200: '#BEB5A9',     // Your brand color 4
                    300: '#A78D78',     // Your brand color 3
                    400: '#8B7563',     // Mid tone
                    500: '#6E473B',     // Your brand color 2 - MAIN BROWN
                    600: '#5A3A2F',     // Darker
                    700: '#462E25',     // Even darker
                    800: '#33221B',     // Almost darkest
                    900: '#291C0E',     // Your brand color 1 - DARKEST
                },
                secondary: {
                    50: '#faf8f5',
                    100: '#f0ebe3',
                    200: '#E1D4C2',     // Your brand color 5
                    300: '#d4c4b0',
                    400: '#c7b49e',
                    500: '#BEB5A9',     // Your brand color 4
                    600: '#a89a8a',
                    700: '#8d7f6f',
                    800: '#6E473B',     // Your brand color 2
                    900: '#4a3a2e',
                },
            },
        },
    },
    plugins: [],
}
