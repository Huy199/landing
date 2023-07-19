/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                monstserrat: ["Montserrat", "sans-serif"],
                nunito: ["Nunito", "sans-serif"],
            },
        },
        screens: {
            xs: "0px",
            sm: "576px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
        },
    },
    plugins: [],
};
