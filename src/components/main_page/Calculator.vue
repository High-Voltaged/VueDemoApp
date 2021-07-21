<template>
   
   <div class="main__container__main-calc flex flex-col items-center lg:mt-24 xl:mt-32 w-full relative">

      <SectionTitle :title="title" :text="text" />

      <div class="main__container__main-calc-card w-full h-auto mt-16">

         <div class="calc-card__months">

            <span class="calc-card__text-sm"> {{ utilText[0] }} </span>

            <div class="calc-card__btns flex items-center space-x-2 mt-4">

               <button v-for="(btn, i) in btns" :key="i" @click="selected_btn = i" :class="{ 'selected': (i == selected_btn) }" class="calc-card__btns-btn block flex-auto">
                  {{ btn }}
               </button>

            </div>

         </div>
         
         <div class="calc-card__range mt-12">

            <span class="calc-card__text-sm"> {{ utilText[1] }} </span>

            <div class="flex items-center space-x-8 mt-4">

               <button class="flex flex-0 items-center justify-between p-4"> 
               
                  <span>
                     {{ rangeValue }} 
                  </span>

                  <span> грн. </span>
               
               </button>

               <div class="flex-auto flex items-center">

                  <input type="range" min="0" max="10000" :style="rangeStyle" v-model="range_value" class="w-full" />

               </div>

            </div>

         </div>
         
         <div class="calc-card__vals flex items-center space-x-20 mt-12">

            <div
               v-for="(card, i) in results"
               :key="i" 
               class="calc-card__vals--wrapper flex flex-col items-start space-y-4">

               <div
                  :class="{ 'primary': (i == 0) }"
                  class="calc-card__results--card flex flex-col items-start">

                  <span class="inline-block"> {{ card }} </span>

                  <div class="flex items-baseline mt-4">

                     <span class="inline-block"> 
                        {{ `${formatResult(i)[0]} ${formatResult(i)[1]}` }} 
                     </span>

                     <span v-if="i != 2" class="inline-block" :class="{ 'ml-2': (i != 2) }">
                        {{ `${formatResult(i)[2]}` }}
                     </span>

                  </div>

               </div>

               <!-- <span class="inline-block">
                  <svg width="1" height="80" viewBox="0 0 1 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect width="1" height="80" fill="#46464E"/>
                  </svg>
               </span> -->

               <div class="calc-card__stats--card flex flex-col items-start">

                  <div class="info-title flex items-center space-x-2">

                     <span class="title inline-block"> {{ card }} </span>

                     <span v-if="i != 0" class="info-icon inline-block">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#878793" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M9.08984 9.00008C9.32495 8.33175 9.789 7.76819 10.3998 7.40921C11.0106 7.05024 11.7287 6.91902 12.427 7.03879C13.1253 7.15857 13.7587 7.52161 14.2149 8.06361C14.6712 8.60561 14.9209 9.2916 14.9198 10.0001C14.9198 12.0001 11.9198 13.0001 11.9198 13.0001V14.5" stroke="#878793" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M12 17H12.01" stroke="#878793" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                     </span>

                  </div>

                  <div class="flex items-baseline mt-4">

                     <span class="inline-block"> 
                        {{ formatStats(i)[0] }} 
                     </span>

                     <span v-if="i != 2" class="inline-block" :class="{ 'ml-2': (i != 2) }">
                        {{ formatStats(i)[1] }}   
                     </span>

                  </div>

               </div>

            </div>

         </div>

         <div class="calc-card__button flex items-center mt-12">

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

         </div>

      </div>

      <div class="main__container__main-calc--overlay absolute top-0 h-auto">
         <img :src="require(`~/assets/images/calculator_bg.png`)" class="object-cover" />
      </div>

      <div class="main__container__main-calc--gradient absolute top-0 h-full"></div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import SectionTitle from '../misc/SectionTitle.vue';

   @Component({
      name: 'Calculator',
      components: {
         SectionTitle,
      }
   })
   export default class Calculator extends Vue {

      title = "Калькулятор доходности";
      text = "Посчитайте, сколько вы можете заработать вместе с Avalon Technologies";

      utilText = ["Выберите срок инвестиций:", "Сумма инвестирования:", "Инвестировать прямо сейчас"];
      btns = ["3 месяца", "6 месяцев", "12 месяцев"];
      results = ["Прибыль", "Итоговая сумма", "В процентах"];
      stats = ["Сроки", "Бонус", "Капитализация"];

      resultVals = [1200, 1500, 1.3];
      statVals = [7, 0.37, "Да"];

      range_value = 2312;
      selected_btn: number = 0;

      get rangeValue() {

         let temp = this.range_value.toString();
         temp = temp.charAt(0) + " " + temp.substring(1, temp.length);
         return temp;

      } 

      get rangeStyle() {

         var value = (this.range_value - 0)/(10000 - 0) * 100;
         return {
            background: 'linear-gradient(to right, #E0BD89 0%, #E0BD89 ' + value + '%, #4C4C56 ' + value + '%, #4C4C56 100%)',
         };

      }

      formatResult(i: number): string[] {

         let res = `${(i != 2) ? '+ ' : '' }`;
         res = res.concat(this.resultVals[i].toString());
         res = res.concat(`${(i != 2) ? " грн." : " %" }`);
         return res.split(" ");

      }

      formatStats(i: number): string[] {

         let result = "";
         switch (i) {

            case 0:
               result = this.statVals[i].toString().concat(" дней");
               break;

            case 1:
               result = "+".concat(this.statVals[i].toString()).concat("% грн.");
               break;
            
            default:
               result = this.statVals[i].toString(); 

         }
         return result.split(" ");
         
      }

   } 

</script>

<style lang="scss" scoped>

   .main__container__main-calc {

      &-card {
         padding: 3.5rem 6.75rem;
         background: var(--color-primary-2);
         border-radius: calc(var(--btn-radius-sm) * 2);
      
         .calc-card {

            &__text-sm {
               @include typography(16px, 600, 24px);
               color: var(--color-gray);
            }

            &__btns {
               padding: 8px;
               border: 1px solid var(--color-gray-2);
               border-radius: calc(var(--btn-radius-sm) * 2);
      
               &-btn {
                  padding: 12px 0;
                  background: var(--color-gray-2);
                  border-radius: var(--btn-radius-sm);
                  @include typography(16px, 600, 24px);
                  color: var(--color-gray);
                  transition: all .3s ease;
      
                  &:hover, &:focus, &.selected {
                     background: var(--color-secondary);
                     color: var(--color-primary);
                  }
               }
            } 
      
            &__range {
               button {
                  width: 10.5rem;
                  border: 1px solid var(--color-gray-2);
                  border-radius: calc(var(--btn-radius-sm) * 2);
                  color: var(--color-secondary-2);

                  span:nth-of-type(1) {
                     @include typography(24px, 600, 29px);
                  }
                  span:nth-of-type(2) {
                     @include typography(14px, 600, 17px);
                  }
               }

               input[type="range"] {
                  
                  height: 8px;
                  -webkit-appearance: none;
                  border-radius: var(--btn-radius);
                  
                  &::-webkit-slider-thumb {
                     -webkit-appearance: none;
                     width: 28px;
                     height: 28px;
                     background: white;
                     border-radius: 30px;
                     box-shadow: 0px 0.5px 4px rgba(0, 0, 0, 0.15), 0px 6px 13px rgba(0, 0, 0, 0.15);
                  }

               }
            }

            &__results--card {
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
                  color: var(--color-secondary-2);
               }
            }

            &__stats--card {

               color: white;
               .info-title .title {
                  @include typography(16px, 600, 24px);
                  color: var(--color-gray);
               }

               div span:nth-of-type(1) {
                  @include typography(32px, 600, 39px);
               }
               
               div span:nth-of-type(2) {
                  @include typography(18px, 600, 22px);
               }

            }

            &__button button {
               height: var(--input-height);
               padding: 21px 32px;

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
               }
            }

         }

      }

      &--overlay {
         opacity: 0.1;
         z-index: -15;
         top: -10%;
         left: -25%;
         right: -25%;
      }
      &--gradient {
         z-index: -10;
         background: radial-gradient(50% 50% at 50% 50%, #C4C4C4 0%, rgba(196, 196, 196, 0) 100%);
         opacity: 0.1;
         left: -25%;
         right: -25%;
      }
   
   }

</style>