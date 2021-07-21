<template>
   
   <div class="steps-card">

      <div class="steps-card__card flex items-start space-x-8">

         <span class="steps-card__card-img inline-block relative">
            <img :src="require(`~/assets/images/steps_icons/${icon}.svg`)" alt="icon" class="w-full h-full select-none" />
         
            <div class="steps-card__card-img--badge absolute flex items-center justify-center">
               <span class="select-none"> {{ `0${id + 1}` }} </span>
            </div>
         </span>

         <div class="steps-card__card-text flex flex-col items-start space-y-4">

            <span class="inline-block card-title"> {{ title }} </span>

            <span class="inline-block card-text mt-5"> {{ text }} </span>

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'StepCard',
      components: {
      }
   })
   export default class StepCard extends Vue {

      @Prop() readonly icon: string;
      @Prop() readonly title: string;
      @Prop() readonly text: string;
      @Prop() readonly id: number;

   } 

</script>

<style lang="scss" scoped>

   .steps-card {
      
      &:not(:nth-of-type(1)) {
         margin-top: 1.75rem;
      }

      &__card {
         padding-top: 1.875rem;
         padding-left: 1.875rem;

         &-img {
            width: 80px;
            height: 80px;

            &--badge {
               width: 40px;
               height: 30px;
               padding: 6px 9px;
               top: -20px;
               left: -20px;

               border-radius: 67px;
               background: var(--color-secondary);

               span {
                  @include typography(14px, 600, 17px);
                  color: var(--color-primary);
               }
            }
         }

         &-text {
            width: 17.5rem;

            span:nth-of-type(1) {
               @include typography(24px, 500, 29px);
               color: white;
            }
            span:nth-of-type(2) {
               @include typography(16px, 400, 24px);
               color: var(--color-gray);
            }
         }

      }
   }

</style>