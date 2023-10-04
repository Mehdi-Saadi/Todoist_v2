import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/*.js',
        './resources/assets/js/**/*.js',
    ],

    theme: {
        extend: {
            colors: {
                red: {
                    550: '#dc4c3e',
                    850: '#b03d32',
                }
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            spacing: {
                '13': '3.25rem',
            },
        },
    },

    plugins: [forms],
};
