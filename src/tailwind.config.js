// TailwindCSS Configuration File

// Docs: https://tailwindcss.com/docs/configuration
// Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
   theme: {
   
      screens: {
         'sm': '500px',
         'md': '768px',
         'lg': '1024px',
         'xl': '1280px',
         '2xl': '1536px',
      },

      extend: {

         flex: {
            '0': '0 0 auto',
         },

         transitionDuration: {
            '250': '250ms',
         },

         colors: {
            danger: '#ff4757',
            success: '#46c93a',
            warn: '#ffba00',
            
            gray: {
               1: '#1e1f21',
               2: '#2F3136',
               3: '#1e2023',
               4: '#242427',
               
               dark: '#18191c',
               
               light: '#27282D',
               dull: '#9b9b9b',

               100: '#f7fafc',
               200: '#edf2f7',
               300: '#e2e8f0',
               400: '#cbd5e0',
               500: '#a0aec0',
               600: '#718096',
               700: '#4a5568',
               800: '#2d3748',
               900: '#1a202c',
            },

            purple: {
               1: '#9370DB',
            }  
         },

      },

   },

   variants: {},

   plugins: []
}
