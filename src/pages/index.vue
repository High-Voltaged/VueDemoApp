<template>
   
   <div class="main flex flex-col items-center relative z-10">

      <!-- <Navbar v-if="!fixed" /> -->
      <Navbar />

      <MainContainer />

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import Navbar from '../components/Navbar.vue';
   import MainContainer from '../components/MainContainer.vue';

   @Component({
      name: 'index',
      components: {
         Navbar,
         MainContainer,
      }
   })
   export default class index extends Vue {

   } 

</script>

<style lang="scss" scoped>

   .main {
      background: $color-primary;
   }

</style>