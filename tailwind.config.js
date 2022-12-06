/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    daisyui: {
        themes: [
            {
                myTheme: {
                    primary: "#00c7ff",
                    secondary: "#fff",
                    accent: "#7b89a8",
                    neutral: "#112240",
                    "base-100": "#000a1f",
                },
            },
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
