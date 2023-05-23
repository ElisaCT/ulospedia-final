/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
    theme: {
        extend: {},
        colors: {
            //Primary Color
            transparant: 'transparant',
            current: 'currentColor',
            primary_main: '#3355B5',
            primary_surface: '#D6DDF0',
            primary_border: '#BBC6E6',
            primary_hover: '#2A4797',
            primary_pressed: '#192A5A',
            primary_focus: 'BCC3D6',

            //Secondary Color
            secondary_main: '#ECB11F',
            secondary_surface: '#FBEFD2',
            secondary_border: '#F9E5B4',
            secondary_hover: '#C5931A',
            secondary_pressed: '#76580F',
            secondary_focus: 'E1D5B8',

            //Danger Color
            danger_main: '#CB3A31',
            danger_surface: '#FFF4F2',
            danger_border: '#EEB4B0',
            danger_hover: '#BD251C',
            danger_pressed: '#731912',

            //Warning Color
            warning_main: '#CD7B2E',
            warning_surface: '#FFF9F2',
            warning_border: '#EECEB0',
            warning_hover: '#BF6919',
            warning_pressed: '#734011',

            //Success Color
            success_main: '#43936C',
            success_surface: '#F7F7F7',
            success_border: '#B8DBCA',
            success_hover: '#367A59',
            success_pressed: '#20573D',

            //Neutral Color
            neutral_10: '#FFFFFF',
            neutral_20: '#F5F5F5',
            neutral_30: '#EDEDED',
            neutral_40: '#E0E0E0',
            neutral_50: '#C2C2C2',
            neutral_60: '#9E9E9E',
            neutral_70: '#757575',
            neutral_80: '#616161',
            neutral_90: '#404040',
            neutral_100: '#0A0A0A'
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        }
    },
    plugins: [
        require('preline/plugin')
    ]
}