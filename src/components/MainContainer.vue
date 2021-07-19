<template>
   
   <div class="main__container flex-auto overflow-hidden w-full">

      <div class="main__container__banner w-full">

         <img src="../assets/images/main_background.png" class="w-full h-full" />

         <div class="main__container__banner-overlay"></div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   
   @Component({
      name: 'MainContainer',
      components: {
      }
   })
   export default class MainContainer extends Vue {

   } 

</script>

<style lang="scss" scoped>

   .main__container {
      
      &__banner {
         
         position: fixed;
         left: 0;
         top: 0;
         height: auto;
         width: 100%;
         z-index: -10;

         &-overlay {
            background: linear-gradient(180deg, rgba(23, 23, 25, 0) 70.85%, rgba(25, 25, 27, 0.04) 78.44%, rgba(30, 30, 32, 0.63) 87.1%, #202022 100%);
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
         }
      }

   }


</style>