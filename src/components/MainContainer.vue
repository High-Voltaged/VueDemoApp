<template>
   
   <div class="main__container flex-auto w-full overflow-x-hidden">

      <div class="main__container__banner w-full">

         <img :src="require('~/assets/images/main_background.png')" class="w-full h-full" />

         <div class="main__container__banner-overlay"></div>

      </div>

      <div class="main__container__main flex flex-col min-w-full">

         <Banner />  

         <div class="main__container__main-stat flex items-center justify-between lg:mt-24 xl:mt-32 w-full">
         
            <div 
               v-for="(s, i) in stats"
               :key="i"
               class="stat-item flex flex-col items-center space-y-3">

               <span> {{ s.first }} </span>

               <span> {{ s.second }} </span>

            </div>
         
         </div> 

         <Advantages />    

         <Calculator />

         <Steps />

         <Comments />

         <RegistrationBanner />

         <Footer />

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import Banner from './main_page/Banner.vue';
   import Advantages from './main_page/Advantages.vue';
   import Calculator from './main_page/Calculator.vue';
   import Steps from './main_page/Steps.vue';
   import Comments from './main_page/Comments.vue';
   import RegistrationBanner from './main_page/RegistrationBanner.vue';
   import Footer from './main_page/Footer.vue';
   
   @Component({
      name: 'MainContainer',
      components: {
         Banner,
         Advantages,
         Calculator,
         Steps,
         Comments,
         RegistrationBanner,
         Footer,
      }
   })
   export default class MainContainer extends Vue {

      stats = [
         { first: "$ 11,887,029", second: "Assets staking with us" },
         { first: "$ 1,000,000+", second: "Generated customer rewards" },
         { first: "2 345", second: "Number of customers" },
      ];

   } 

</script>

<style lang="scss" scoped>

   .main__container {

      &__banner {
         
         position: absolute;
         left: 0;
         top: 0;
         height: auto;
         width: 100%;
         z-index: -10;

         &-overlay {
            background: linear-gradient(180deg, rgba(23, 23, 25, 0) 70.85%, rgba(25, 25, 27, 0.04) 78.44%, rgba(30, 30, 32, 0.63) 87.1%, #202022 100%);
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
         }
      }

      padding-right: var(--container-spacing);
      padding-left: var(--container-spacing);

      &__main {

         &-stat {

            span:nth-of-type(1) {
               @include typography(48px, 600, 59px);
               color: var(--color-secondary);
            }

            span:nth-of-type(2) {
               @include typography(18px, 500, 32px);
               color: white;
            }

         }

      }

   }


</style>