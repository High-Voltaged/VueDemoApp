<template>
   
   <div class="main__container__main-comments flex flex-col items-center lg:mt-32 xl:mt-36 w-full">

      <SectionTitle :title="title" />

      <div class="comments-cards flex items-stretch justify-between mt-16 relative">

         <CommentCard
            v-for="(card, i) in cards"
            :key="i"
            :username="card.username"
            :comment="card.comment"
            :city="card.city"
            :class="{ 'ml-4': (i != 0) }"
         />

         <div class="comments-slider absolute min-w-full flex items-center justify-between">

            <button class="comments-slider__btn flex items-center justify-center text-white">
               <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.60002 15.2L1.40002 7.99999L8.60002 0.799988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </button>

            <button class="comments-slider__btn flex items-center justify-center text-white">
               <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.40002 15.2L8.60002 7.99999L1.40002 0.799988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </button>

         </div>

      </div>

      <div class="comments-pagination flex items-center space-x-4 mt-8">

         <div class="comments-page--selected inline-block">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="6" cy="6" r="5" stroke="#E0BD89" stroke-width="2"/>
            </svg>
         </div>

         <div 
            v-for="i in 3"
            :key="i"
            class="comments-page inline-block"
         >
            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
               <circle cx="2" cy="2" r="2" fill="#6B6B6B"/>
            </svg>
         </div>

      </div>
      
   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import SectionTitle from "../misc/SectionTitle.vue";
   import CommentCard from "../cards/CommentCard.vue";

   @Component({
      name: 'Comments',
      components: {
         SectionTitle,
         CommentCard,
      }
   })
   export default class Comments extends Vue {

      title = "Отзывы клиентов";

      cards = [
         { username: "Виталий О.", city: "Полтава", comment: "Равным образом дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке направлений прогрессивного развития. Идейные соображения высшего порядка, а также консультация с широким активом требуют от нас анализа новых предложений." },
         { username: "Богдан С.", city: "Винница", comment: "Значимость этих проблем настолько очевидна, что новая модель организационной деятельности требуют определения и уточнения дальнейших направлений развития. Равным образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации существенных финансовых и административных условий." },
         { username: "Ирина Т.", city: "Запорожье", comment: "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности требуют определения и уточнения дальнейших направлений развития." },
      ];

   } 

</script>

<style lang="scss" scoped>

   .comments-slider {
      left: calc(-1 * #{$slider-size} - #{$slider-x-padding});
      right: calc(-1 * #{$slider-size} - #{$slider-x-padding});
      top: 50%;
      transform: translateY(-50%);
   }

   @media screen and (min-width: $screen-min-lg) and (max-width: $screen-max-lg) {

      .comments-slider {
         inset: auto;
         bottom: calc(-1 * #{$slider-size} - #{$slider-y-padding});
      }

   }

</style>