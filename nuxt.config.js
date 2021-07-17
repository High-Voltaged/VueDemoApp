const pkg = require('./package');

module.exports = {
   ssr: false,
   srcDir: 'src/',
   extension: ['js', 'ts'],
   server: {
      host: '127.0.0.1',
      port: 1337,
   },
   head: {
      title: "Vue Demo App",
      meta: [
         { charset: "utf-8" },
         { name: "viewport", content: "width=device-width, initial-scale=1" },
         { hid: "description", name: "description", content: "NTEST" }
      ],
      link: [
         { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ],
   },
   loading: { color: "#3B8070" },
   
   css: [
   '~assets/css/main.scss',
   ],
   
   styleResources: {
      scss: [
      ] 
   },
      
   buildModules: [
      '@nuxtjs/router',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/style-resources',
   ],

   modules: [
      "@nuxtjs/axios",
      "~/modules/typescript",
      ],

   plugins: [
      '~/plugins/vuesax.js',
   ],

   axios: {},

   build: {
      additionalExtensions: ['ts', 'tsx'],
      extend(config, ctx) { },
   },

   generate: {
      routes: [
         '/',
      ]
   },

}