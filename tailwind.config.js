const { nextui } = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/components/(input|modal|skeleton).js"
    ],
    theme: {
        extend: {
            boxShadow: {
                custom: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [nextui()],
}

