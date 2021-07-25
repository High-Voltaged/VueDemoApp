<template>
   
   <div class="main__container__main-regbanner flex items-center justify-between relative lg:mt-32 xl:mt-36 w-full">

      <span class="regbanner__text inline-block">
         {{ utilText[0] }}
      </span>

      <form @submit.prevent="" class="regbanner__input flex items-center">

         <input :placeholder="utilText[1]" class="flex flex-col items-start text-white tracking-tight" />

         <button class="flex items-center space-x-3"> 
         
            <span class="tracking-tighter"> {{ utilText[2] }} </span>
         
            <span class="inline-block">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75C12.0041 0.75 15.25 3.99594 15.25 8Z" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 4.79999V11.2" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.80005 8H11.2" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </span>

         </button>

      </form>

      <span class="regbanner__overlay inline-block absolute">
         <img :src="require('~/assets/images/misc_icons/mail.svg')" class="select-none" />
      </span>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'RegistrationBanner',
      components: {
      }
   })
   export default class RegistrationBanner extends Vue {

      utilText = ["Быстрая регистрация", "Введите E-mail", "Регистрация"];

   } 

</script>

<style lang="scss" scoped>

   $padding: 6.75rem;
   $radius: 16px; 

   .main__container__main-regbanner {
      padding: $padding;
      background: $color-primary-2;
      border-radius: $radius;

      .regbanner__text {
         @include typography(40px, 600, 50px);
         color: white;
      }

      .regbanner__input {
         z-index: 10;

         input {
            height: $input-height;
            width: calc(#{$input-width} * 2);
            padding: 10px 24px;

            border-radius: $input-radius;
            background: $color-tertiary;
            border: 1px solid $color-secondary;

            &:hover, &:focus {
               background: rgba(224, 189, 137, 0.1);
               transition: all .3s ease;
            }
            &::placeholder {
               @include typography(16px, 400, 24px);
               color: $color-placeholder;
            }
         } 
      
         button {
            height: $input-height;
            width: calc(#{$input-width} - 3.75rem);
            padding: 21px 32px;
            margin-left: calc(-1 * (#{$input-width} - 3.75rem));

            border-radius: $btn-radius;
            background: $color-secondary;
            transition: all .3s ease;
            &:hover {
               background: $color-hover-btn;
            }
            &:focus {
               background: $color-focus-btn;
            }
            span {
               @include typography(18px, 500, 22px);
               color: $color-primary;
            }
         }

      }

      .regbanner__overlay {
         right: -60px;
         top: 10px;
      }
   }

</style>