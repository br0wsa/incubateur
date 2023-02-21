/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
    ],
    theme: {
        extend: {
            colors: {
                shark: {
                    'gris': '#474B4F',
                    '900': '#222629',
                    'text': '#86C232',
                    'bg': '#6B6E70',
                    'secondary': '#6B6E70',
                },
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}

