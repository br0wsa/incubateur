module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    
    theme: {
        extend: {
            width: {
                '201': '360rem',
              },
            colors: {
                primary: {
                    light: '#4da6ff',
                    DEFAULT: '#0B84FF',
                    dark: '#0066cc',
                },
                secondary: {
                    light: '#f39e58',
                    DEFAULT: '#ed7410',
                    dark: '#bf5d0d',
                },
                    shark: {
                        '900': '#222629',
                        'text': '#86C232',
                        'bg': '#6B6E70',
                        'secondary': '#6B6E70',
                    },
            },
        },
    },
    plugins: [require('@tailwindcss/forms'),
    require('autoprefixer')],
}
