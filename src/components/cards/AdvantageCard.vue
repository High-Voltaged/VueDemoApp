<template>
   
   <div class="advantages-card xl:order-none">

      <div class="advantages-card__card flex flex-col items-center justify-center w-full h-full overflow-hidden">

         <span class="inline-block">
            <img :src="require(`~/assets/images/advant_icons/${icon}.svg`)" alt="icon" />
         </span>

         <span class="inline-block card-title"> {{ title }} </span>

         <span class="inline-block card-text mt-5 text-center"> {{ text }} </span>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'AdvantageCard',
      components: {
      }
   })
   export default class AdvantageCard extends Vue {

      @Prop() readonly icon: string;
      @Prop() readonly title: string;
      @Prop() readonly text: string;

   } 

</script>

<style lang="scss" scoped>

   .advantages-card {
      max-height: var(--card-max-height-xl);
      
      &__card { 
         padding: var(--card-padding-xl);

         .card-title {
            @include typography(24px, 500, 29px);
            color: white;
         }
         .card-text {
            @include typography(16px, 400, 24px);
            color: var(--color-gray);
         }
         
      }
      &.odd-card &__card {
         background: var(--color-primary-2);
         border-radius: 16px;
      }

   }   

</style>