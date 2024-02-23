/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
        animation :{
          'fullScreen' : 'expanding 0.7s linear',
          'fade-in' : 'fadeIn 1.8s linear',
          'contentFade-in' : 'contentFadeIn 0.5s linear',
          'showContent' : 'showFromRight 1s linear'
        },
        keyframes:{
          expanding: {
            '0%': {width: '100px',height:'100px',borderRadius:'100%'},
            '60%' : {width: '100px',height:'100px',borderRadius:'100%'},
            '100%' :{width:'100vw',height:'100vh',borderRadius:'0'}
          },
          showFromRight : {
            '0%' : {transform : 'translateX(-100px)',opacity : '0'},
            '100%':{transform: 'translateX(0)',opacity:'1'}
          },
          fadeIn: {
            '0%' :{opacity:'0'},
            '48%' :{opacity: '0'},
            '100%' : {opacity:'1'}
          },
          contentFadeIn: {
            '0%' :{opacity:'0'},
            '100%' : {opacity:'1'}
          }
        },
        colors :{
          shelifeRed: {
            50: '#FF4F62',
            100 : '#FF4F63',
            200 : '#E72F5E',
          },
          shelifeGray: '#7B7B7B',
          buttonColor: '#FF4F62',
          shelifeOrange : '#FA6C57',
          profileLine: '#F2E9DA',
          footerColor : '#FEEEEC',
          gradientEnd: '#2A70D9',
          gradientMid : '#D80037',
          gradientStart: '#FF7A00'
        },
        lineHeight:{
          '20':'61px;'
        },
        fontFamily:{
          yekanBakh : ['yekanBakh']
        },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
