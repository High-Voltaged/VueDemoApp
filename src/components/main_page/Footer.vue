<template>
   
   <div class="main__container__footer flex flex-col items-start lg:mt-24 xl:mt-32 space-y-6 w-full">

      <div class="main__container__footer--first-row flex items-center justify-between w-full space-x-6 xl:space-x-10">

         <div class="inline-block">
            <svg width="111" height="36" viewBox="0 0 111 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M30.632 30.728C27.208 34.088 23 35.768 18.008 35.768C13.016 35.768 8.792 34.088 5.336 30.728C1.912 27.336 0.2 23.16 0.2 18.2C0.2 13.24 1.912 9.08 5.336 5.72C8.792 2.328 13.016 0.631999 18.008 0.631999C23 0.631999 27.208 2.328 30.632 5.72C34.088 9.08 35.816 13.24 35.816 18.2C35.816 23.16 34.088 27.336 30.632 30.728ZM12.104 24.056C13.672 25.592 15.64 26.36 18.008 26.36C20.376 26.36 22.328 25.592 23.864 24.056C25.432 22.488 26.216 20.536 26.216 18.2C26.216 15.864 25.432 13.928 23.864 12.392C22.328 10.824 20.376 10.04 18.008 10.04C15.64 10.04 13.672 10.824 12.104 12.392C10.568 13.928 9.8 15.864 9.8 18.2C9.8 20.536 10.568 22.488 12.104 24.056ZM74.4556 1.4V35H64.8556V18.632L57.3676 31.208H56.5036L49.0156 18.632V35H39.4156V1.4H49.0156L56.9356 15.08L64.8556 1.4H74.4556ZM95.6274 35.768C90.5714 35.768 86.3794 34.088 83.0514 30.728C79.7234 27.368 78.0594 23.192 78.0594 18.2C78.0594 13.208 79.7234 9.032 83.0514 5.672C86.3794 2.312 90.5714 0.631999 95.6274 0.631999C98.7314 0.631999 101.595 1.368 104.219 2.84C106.843 4.312 108.891 6.296 110.363 8.792L102.011 13.592C101.467 12.504 100.619 11.64 99.4674 11C98.3154 10.36 97.0354 10.04 95.6274 10.04C93.2594 10.04 91.3394 10.808 89.8674 12.344C88.3954 13.88 87.6594 15.832 87.6594 18.2C87.6594 20.568 88.3954 22.52 89.8674 24.056C91.3394 25.592 93.2594 26.36 95.6274 26.36C97.0674 26.36 98.3474 26.04 99.4674 25.4C100.619 24.76 101.467 23.88 102.011 22.76L110.363 27.56C108.891 30.088 106.843 32.088 104.219 33.56C101.595 35.032 98.7314 35.768 95.6274 35.768Z" fill="#E0BD89"/>
            </svg>
         </div>

         <div class="main__container__footer--tabs flex items-center space-x-2 xl:space-x-4"> 

            <div 
               v-for="(tab, i) in tabs"
               :key="i"
               class="main__container__footer--tabs__tab relative cursor-pointer">

               <span class="inline-block hover:text-white"> {{ tab.title }} </span>

            </div>

         </div>

         <div class="main__container__footer--mail flex items-center space-x-2">

            <span class="inline-block">
               <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.3335 4H20.3335C21.4335 4 22.3335 4.9 22.3335 6V18C22.3335 19.1 21.4335 20 20.3335 20H4.3335C3.2335 20 2.3335 19.1 2.3335 18V6C2.3335 4.9 3.2335 4 4.3335 4Z" stroke="#E0BD89" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22.3335 6L12.3335 13L2.3335 6" stroke="#E0BD89" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </span>

            <span class="mail"> {{ mail }} </span>

         </div>

         <div class="main__container__footer--btn">

            <button class="flex items-center space-x-2"> 
               
               <span> {{ utilText[0] }} </span> 
            
               <span class="inline-block">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H10" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M6.66675 11.3334L10.0001 8.00008L6.66675 4.66675" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M10 8H2" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </span>
            
            </button>

         </div>

      </div>

      <div class="main__container__footer--divider w-full"></div>

      <div class="main__container__footer--second-row flex items-center justify-between w-full space-x-8">
         
         <div class="icon-container flex items-center space-x-4">

            <div class="inline-block">
               <img :src="require(`~/assets/images/misc_icons/visa.svg`)" alt="visa" class="select-none" />
            </div>

            <div class="inline-block">
               <img :src="require(`~/assets/images/misc_icons/mastercard.svg`)" alt="visa" class="select-none" />
            </div>

         </div>

         <div class="util-text-container flex items-center space-x-8">

            <span> {{ utilText[1] }} </span>

            <span> {{ utilText[2] }} </span>

         </div>

         <div class="social-icons-container flex items-center space-x-3">

            <div
               v-for="(icon, i) in socialIcons"
               :key="i" 
               class="social-icon flex items-center justify-center cursor-pointer">

               <div class="inline-block">
                  <img :src="require(`~/assets/images/social_icons/${icon}.svg`)"  class="select-none"/>
               </div>

            </div>

         </div>
         
      </div>      

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'Footer',
      components: {
      }
   })
   export default class Footer extends Vue {

      tabs = [
         { title: "О нас" },
         { title: "Пакеты инвестиций" },
         { title: "Реферальная программа" },
         { title: "Блог" },
         { title: "FAQ" },
      ];
      mail = "support@oilmaxcapital.com";
      utilText = ["Личный кабинет", "Copyright © 2020 OMC", "Политика конфиденциальности"];
      socialIcons = ["vk", "facebook", "linkedin", "instagram", "twitter"];

   } 

</script>

<style lang="scss" scoped>

   .main__container__footer {
      --padding: 1.875rem;

      --icon-radius: 50px;
      --icon-size: 40px;
      --icon-bg-color: rgba(224, 189, 137, 0.1);
   }

   .main__container__footer {
      padding-top: var(--padding);
      padding-bottom: var(--padding);

      &--tabs__tab span {
         @include typography(14px, 500, 18px);
         color: var(--color-gray-4);
         transition: all .3s ease;
         &:hover {
            color: white;
         }
      }

      &--mail .mail {
         @include typography(16px, 500, 20px);
         color: var(--color-gray-4);
      }

      &--btn button {
         border-radius: var(--btn-radius);
         padding: 14px 24px;
         background: var(--color-secondary);
         transition: all .3s ease;
         &:hover {
            background: var(--color-hover-btn);
         }
         &:focus {
            background: var(--color-focus-btn);
         }

         span {
            @include typography(18px, 500, 22px);
            color: var(--color-primary);
         }
      }

      &--divider {
         height: 1px;
         background: var(--color-tertiary-2);
      }

      .util-text-container span {
         @include typography(11px, 400, 13px);
         color: var(--color-gray-4);
      }

      .social-icons-container {
         .social-icon {
            width: var(--icon-size);
            height: var(--icon-size);
            border-radius: var(--icon-radius);
            background: var(--icon-bg-color);
            transition: all .3s ease;
            &:hover, &:focus {
               background: rgba(224, 189, 137, 0.5);
            }
         }
      }

   }

</style>