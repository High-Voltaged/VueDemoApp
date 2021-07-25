<template>
   
   <div class="section-title flex flex-col items-center">

      <div class="section-title__title inline-block flex flex-nowrap space-x-4 select-none">

         <span :class="{'primary': (primary == 0) }"> {{ titleMod[0] }} </span>
         <span :class="{'primary': (primary == 1) }"> {{ titleMod[1] }} </span>

      </div>

      <span v-if="text" class="section-title__text inline-block mt-6 text-center"> {{ text }} </span>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'SectionTitle',
      components: {}
   })
   export default class SectionTitle extends Vue {

      @Prop() readonly title: string;
      @Prop() readonly text: string;
      @Prop({ default: 0 }) readonly primary: 0 | 1;

      get titleMod(): string[] {

         return this.title.split(" ");

      }

   } 

</script>

<style lang="scss" scoped>

   .section-title {
      
      width: 39rem;
      &__title {
         @include typography(56px, 600, 66px);

         span {
            color: white;
         }

         span.primary {
            color: $color-secondary;
         }
      }

      &__text {
         @include typography(18px, 400, 26px);
         color: $color-gray;
      }

   }

</style>