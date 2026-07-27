/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                /* Backgrounds */
                'bg-warm': '#F5F3EF',  /* warm parchment */
                'bg-alt': '#EDEAE4',  /* bone — alternating sections */
                'bg-dark': '#19211E',  /* deep forest dark */

                /* Ink text tones */
                'ink': '#1A1F1E',
                'ink-muted': '#5A625F',
                'ink-faint': '#9BA3A0',

                /* Accent */
                'accent': '#2C5F52',  /* deep forest green */
                'accent-hover': '#3D7A69',  /* lighter hover */

                /* Borders */
                'rule': '#D9D5CE',  /* warm border */
                'rule-dark': '#2E3834',

            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Geist"', 'Helvetica', 'Arial', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                serif: ['"DM Serif Display"', 'Georgia', 'serif'],
            },
            boxShadow: {
                'xs': '0 1px 2px 0 rgba(26,31,30,0.05)',
                'sm': '0 2px 4px 0 rgba(26,31,30,0.06)',
            },
        },
    },
    plugins: [],
}
