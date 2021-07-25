<template>
   
   <div class="flex flex-col items-start space-y-4">

      <div class="flex items-center space-x-20">

         <span v-if="id != 0" class="results-card-divider inline-block">
            <svg width="1" height="80" viewBox="0 0 1 80" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect width="1" height="80" fill="#46464E"/>
            </svg>
         </span>

         <div
            :class="{ 'primary': (id == 0) }"
            class="calc-card__results--card flex flex-col items-start">

            <span class="inline-block"> {{ param }} </span>

            <div class="flex items-baseline mt-4">

               <span class="inline-block"> 
                  {{ `${result[0]} ${result[1]}` }} 
               </span>

               <span v-if="result[2] != undefined" class="inline-block" :class="{ 'ml-2': (id != 2) }">
                  {{ `${result[2]}` }}
               </span>

            </div>

         </div>

      </div>

      <div class="flex items-center space-x-20">

         <span v-if="id != 0" class="results-card-divider inline-block">
            <svg width="1" height="80" viewBox="0 0 1 80" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect width="1" height="80" fill="#46464E"/>
            </svg>
         </span>

         <div class="calc-card__stats--card flex flex-col items-start">

            <div class="info-title flex items-center space-x-2">

               <span class="title inline-block"> {{ stat_param }} </span>

               <span v-if="id != 0" class="info-icon inline-block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#878793" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M9.08984 9.00008C9.32495 8.33175 9.789 7.76819 10.3998 7.40921C11.0106 7.05024 11.7287 6.91902 12.427 7.03879C13.1253 7.15857 13.7587 7.52161 14.2149 8.06361C14.6712 8.60561 14.9209 9.2916 14.9198 10.0001C14.9198 12.0001 11.9198 13.0001 11.9198 13.0001V14.5" stroke="#878793" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M12 17H12.01" stroke="#878793" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </span>

            </div>

            <div class="flex items-baseline mt-4">

               <span class="inline-block"> 
                  {{ stat_result[0] }} 
               </span>

               <span v-if="id != 2" class="inline-block" :class="{ 'ml-2': (id != 2) }">
                  {{ stat_result[1] }}   
               </span>

            </div>

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'CalcCard',
      components: {
      }
   })
   export default class CalcCard extends Vue {

      @Prop() readonly id: number;
      @Prop() readonly param: string;
      @Prop() readonly stat_param: string;
      @Prop() readonly result: string[];
      @Prop() readonly stat_result: string[];

   } 

</script>

<style lang="scss" scoped>

   .calc-card__results--card {

      color: white;
      span {
         @include typography(16px, 600, 24px);
      }
      div span:nth-of-type(1) {
         @include typography(32px, 600, 39px);
      }
      div span:nth-of-type(2) {
         @include typography(18px, 600, 22px);
      }
      &.primary {
         color: $color-secondary-2;
      }

   }

   .calc-card__stats--card {

      color: white;
      .info-title .title {
         @include typography(16px, 600, 24px);
         color: $color-gray;
      }

      div span:nth-of-type(1) {
         @include typography(32px, 600, 39px);
      }
      
      div span:nth-of-type(2) {
         @include typography(18px, 600, 22px);
      }

   }

</style>