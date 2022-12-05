/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
        themes: [
            {
                myTheme: {
                    primary: "#64ffda",
                    secondary: "#ccd6f6",
                    accent: "#8892b0",
                    neutral: "#112240",
                    "base-100": "#0a192f",
                },
            },
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
