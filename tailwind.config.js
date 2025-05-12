/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class', // Enables class-based dark mode
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.blue,
                secondary: colors.purple,
                dark: {
                    bg: '#1a202c',
                    text: '#e2e8f0',
                },
            },
        },
    },
    plugins: [],
};