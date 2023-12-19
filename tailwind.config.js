/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            "-3xl": { max: "1600px" },
            "-2xl": { max: "1535px" },
            "-xl": { max: "1279px" },
            "-lg": { max: "1100px" },
            "-2md": { max: "890px" },
            "-md": { max: "767px" },
            "-sm": { max: "640px" },
            sm: "640px",
            md: "767px",
            "2md": "890px",
            lg: "1100px",
            xl: "1280px",
            "2xl": "1535px",
            "3xl": "1600px",
        },
        extend: {
            colors: {
                primary: {
                    general: "#14C000",
                    success: "#1DE306",
                    light: "#23FF0A",
                },
            },
        },
    },
    plugins: [],
});
