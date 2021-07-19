<template>
   
   <div class="main w-screen h-screen flex flex-col relative z-10 overflow-x-hidden">

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
      background: var(--color-primary);
   }

</style>