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
                montserrat: ["var(--monstserrat-font)"],
                nunito: [`var(--nunito-font)` ],
            },
            spacing: {
                '22': '88px',
                '24' : '96px',
                '13': '50px',
                '3.5': '14px',
                '4': '16px',
                '7.5': '30px'
            }
        },
       
        screens: {
            sm: "576px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
            "3xl": "3600px",
        },
        colors: {
            'header': 'rgba(188, 235, 255, 0.80);',
            'black': '#000000',
           
        },
        fontSize: {
            '2xl': '24px',
          }
    },
    plugins: [],
};
