<template>
   
   <div class="main__container__main-advants flex flex-col items-center lg:mt-24 xl:mt-32 w-full">

      <SectionTitle :title="title" :text="text" />

      <div class="advants-card-container grid w-full gap-x-4 gap-y-10 mt-16">

         <AdvantageCard
            v-for="(card, i) in cards" 
            :key="i"
            :icon="card.icon"
            :title="card.title"
            :text="card.text"
            :class="[{ 'odd-card': (i % 2 != 0) }]"
         />
         
      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import SectionTitle from '../misc/SectionTitle.vue';
   import AdvantageCard from '../cards/AdvantageCard.vue';

   @Component({
      name: 'Advantages',
      components: {
         SectionTitle,
         AdvantageCard,
      }
   })
   export default class Advantages extends Vue {

      title = "Наши преимущества";
      text = "инвестируя через нашу компанию Вы получаете максимальную прибыль , это стало возможно по нескольким причинам:";

      cards = [
         { icon: 'security', title: "Security", text: "во первых мы максимально оптимизировали торговые операции" },
         { icon: 'stats', title: "Detailed statistics", text: "во вторых создали систему которая позволяет Вам инвестировать без посредников" },
         { icon: 'plans', title: "Wide Range of Plans", text: "во вторых создали систему которая позволяет Вам инвестировать без посредников" },
         { icon: 'experts', title: "Team of Experts", text: "во первых мы максимально оптимизировали торговые операции" },
         { icon: 'payouts', title: "Instant Payouts", text: "во вторых создали систему которая позволяет Вам инвестировать без посредников" },
         { icon: 'users', title: "Without Mediators", text: "во вторых создали систему которая позволяет Вам инвестировать без посредников" },
      ];

   } 

</script>

<style lang="scss" scoped>

   .advants-card-container {
      grid-template-columns: repeat(auto-fit, minmax(var(--card-width-xl), 1fr));
   }   

</style>