<template>
   
   <div class="main__container__main-banner flex xl:justify-center lg:mt-24 xl:mt-48 relative">
            
      <div class="main__container__main-banner--wrapper w-full h-full">

         <div class="primary-title">

            <span class="inline-block"> {{ mainText[0] }} </span>

            <span class="inline-block mt-8"> {{ mainText[1] }} </span>

         </div>

         <div class="banner-form flex xl:justify-center relative mt-16">

            <div class="banner-form--wrapper flex items-center justify-between w-full xl:justify-start">

               <div class="slider-count flex items-baseline space-x-2 order-last xl:order-none xl:absolute">

                  <span> {{ `0${currentSlide}` }} </span>
                  <span>/</span>
                  <span> {{ `0${sliderCount}` }} </span>

               </div>

               <form @submit.prevent="" class="flex items-center">

                  <input :placeholder="formText[0]" class="flex flex-col items-start text-white tracking-tight" />

                  <button class="flex items-center space-x-3"> 
                  
                     <span class="tracking-tighter"> {{ formText[1] }} </span>
                  
                     <span class="inline-block">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75C12.0041 0.75 15.25 3.99594 15.25 8Z" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M8 4.79999V11.2" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M4.80005 8H11.2" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                     </span>

                  </button>

               </form>

            </div>

         </div>

         <div class="comments-slider absolute flex flex-col items-center justify-center space-y-4">

            <button class="comments-slider__btn flex items-center justify-center text-white">
               <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40002 15.2L8.60002 7.99999L1.40002 0.799988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </button>

            <button class="comments-slider__btn flex items-center justify-center text-white">
               <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.60002 15.2L1.40002 7.99999L8.60002 0.799988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </button>

         </div>

      </div>
      
   </div>  

</template>

<script lang="ts">

   import { Component, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'Banner',
      components: {}
   })
   export default class Banner extends Vue {

      mainText = ["Деньги должны работать и приносить прибыль!", "Мы в Avalon Technologies знаем, что делать!"];
      formText = ["Введите E-mail", "Регистрация"];

      sliderCount = 3;
      currentSlide = 1;

   } 

</script>

<style lang="scss" scoped>

   .main__container__main-banner {
      --slider-spacing: 2.75rem;
      --slider-count-size: 75px;
   }

   .main__container__main-banner, .banner-form {
      margin-right: calc(-1 * var(--container-spacing));
      margin-left: calc(-1 * var(--container-spacing));
      
      &--wrapper, .banner-form--wrapper {
         width: var(--container-width-xl);
      }

      .primary-title {
         width: 46.25rem;

         span:nth-of-type(1) {
            @include typography(64px, 800, 64px);
            color: white;
         }
         span:nth-of-type(2) {
            @include typography(26px, 400, 32px);
            color: white;
         }
      }

      .banner-form {

         .slider-count {
            top: 50%;
            transform: translateY(-50%);
            left: var(--slider-spacing);

            color: white;
            span:nth-of-type(1) {
               @include typography(32px, 600, 39px);
            }
            span:nth-of-type(2), span:nth-of-type(3) {
               @include typography(16px, 600, 20px);
               opacity: 0.5;
            } 
         }

         input {
            height: var(--input-height);
            width: calc(var(--input-width) * 2);
            padding: 10px 24px;

            border-radius: var(--input-radius);
            background: var(--color-tertiary);
            border: 1px solid var(--color-secondary);

            &:hover, &:focus {
               background: rgba(224, 189, 137, 0.1);
               transition: all .3s ease;
            }

            &::placeholder {
               @include typography(16px, 400, 24px);
               color: var(--color-placeholder);
            }
         }

         button {
            height: var(--input-height);
            width: calc(var(--input-width) - 3.75rem);
            padding: 21px 32px;
            margin-left: calc(-1 * (var(--input-width) - 3.75rem));

            border-radius: var(--btn-radius);
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
      }

   }

   .comments-slider {
      top: 50%;
      transform: translateY(-50%);
      left: var(--slider-spacing);
   }

   @media screen and (min-width: #{$screen-min-lg}) and (max-width: #{$screen-max-lg}) {

      .comments-slider {
         left: auto;
         right: 0;
      }

      .slider-count {
         inset: auto;
      }

   }

</style>