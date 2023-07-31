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
                montserrat: ["Montserrat"],
                nunito: ["Nunito"],
                arial: ["Arial"]
            },
            spacing: {
                22: "88px",
                24: "96px",
                13: "50px",
                3.5: "14px",
                4: "16px",
                7.5: "30px",
                8: "32px",
                8.5: "34px",
                16: "90px",
            },
            lineHeight: {
                6: "24px",
            },
            colors: {
                'footer': '#EBEBEB',
              },
        },

        screens: {
            xs: "320px",
            sm: "576px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
            "3xl": "3600px",
        },
        colors: {
            header: "rgba(188, 235, 255, 0.80);",
            black: "#000000",
            mobifone: "#0761AF",
            white: "#FFF",
        
        },
        fontSize: {
            base: "16px",
            "2xl": "24px",
            "8xl": "83px",
        },
    },
    plugins: [],
};
