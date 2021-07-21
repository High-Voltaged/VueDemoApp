<template>
   
   <div class="main__container__main-steps flex items-center justify-between relative lg:mt-24 xl:mt-32 w-full">

      <div class="steps-bg__container relative">

         <div class="steps-bg__container--overlay w-full h-full absolute">
            <svg class="w-full h-full" viewBox="0 0 558 616" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path opacity="0.9" d="M403.211 -0.000488281H32C14.3269 -0.000488281 0 14.3264 0 31.9995V584C0 601.673 14.3269 616 32 616H403.211C415.853 616 427.311 608.556 432.449 597.005L555.215 321.005C558.898 312.726 558.898 303.273 555.215 294.994L432.449 18.9943C427.311 7.44292 415.853 -0.000488281 403.211 -0.000488281Z" fill="url(#paint0_linear)"/>
               <defs>
               <linearGradient id="paint0_linear" x1="500.594" y1="25.7829" x2="-10.493" y2="616" gradientUnits="userSpaceOnUse">
               <stop stop-color="#27272B" stop-opacity="0.5"/>
               <stop offset="1" stop-color="#27272B"/>
               </linearGradient>
               </defs>
            </svg>
         </div>

         <div class="steps-title flex flex-col items-start">

            <div class="steps-title__title flex items-center justify-center relative w-full">

               <span class="inline-block select-none"> 4 </span>

               <div class="steps-title__overlay absolute z-10"></div>

            </div>

            <span class="steps-title__text inline-block mt-8 z-20"> {{ utilText }} </span>

         </div>

      </div>

      <div class="steps-divider">
         <svg width="8" height="512" viewBox="0 0 8 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1.99951V505" stroke="#343437" stroke-linecap="round" stroke-dasharray="4 16"/>
            <circle cx="4" cy="3.99951" r="4" fill="#606067"/>
            <circle cx="4" cy="172" r="4" fill="#606067"/>
            <circle cx="4" cy="340" r="4" fill="#606067"/>
            <circle cx="4" cy="508" r="4" fill="#E0BD89"/>
         </svg>
      </div>

      <div class="steps-cards__container flex flex-col items-start">

         <StepCard 
            v-for="(card, i) in cards"
            :key="i"
            :icon="card.icon"
            :title="card.title"
            :text="card.text"
            :id="i"
         />

      </div>

      <div class="main__container__main-steps--overlay absolute">
         <img :src="require(`~/assets/images/misc_icons/steps_overlay.svg`)" class="select-none" />
      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import StepCard from '../cards/StepCard.vue';

   @Component({
      name: 'Steps',
      components: {
         StepCard,
      }
   })
   export default class Steps extends Vue {

      cards = [
         { icon: 'signup', title: 'Sign up', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
         { icon: 'investment', title: 'Choose appropriate investment plan', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
         { icon: 'detailed_stats', title: 'Receive Detailed statistics', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
         { icon: 'income', title: 'Collect your income', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      ];

      utilText = "простых шага, чтобы начать инвестировать";

   } 

</script>

<style lang="scss" scoped>

   .main__container__main-steps {
      --overlay-size: 205px;
   }

   .main__container__main-steps {

      &--overlay {
         bottom: -160px;
         z-index: -10;
      }

      .steps-bg__container {
         width: 34rem;
         height: 38.5rem;

         &--overlay {
            z-index: -5;
         }

         .steps-title {
            margin-top: 7.25rem;
            margin-left: 5rem;
            width: var(--overlay-size);
            height: var(--overlay-size);
            
            &__title span {
               @include typography(200px, 600, 205px);
               color: var(--color-secondary);
            }


            &__overlay {
               width: var(--overlay-size);
               height: var(--overlay-size);
               left: 50%;
               top: 50%;
               margin-left: calc(-1 * var(--overlay-size) / 2);
               margin-top: calc(-1 * var(--overlay-size) / 2);
               
               background: radial-gradient(50% 50% at 50% 50%, var(--color-secondary) 0%, rgba(224, 189, 137, 0) 100%);
               opacity: 0.3;
               filter: blur(60px);
               border-radius: 100px;
               z-index: -5;
            }

            &__text {
               @include typography(32px, 600, 44px);
               color: white;
            }
         }

      }

   }

</style>