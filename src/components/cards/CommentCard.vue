<template>
   
   <div class="comment-card">

      <div class="comment-card__content flex flex-col items-start w-full h-full">

         <span class="inline-block">
            <svg width="47" height="33" viewBox="0 0 47 33" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.70181 14.1469C10.3392 11.851 11.5259 10.2445 13.2345 9.26526C15.2432 8.11405 17.1196 7.31651 18.8649 6.86307L19.3614 6.73407L19.2197 6.24103L17.9612 1.8619L17.8458 1.46066L17.4305 1.50252C13.8952 1.85883 10.9349 2.81241 8.57343 4.38661C6.24339 5.93986 4.39327 7.79929 3.03354 9.96709L3.03348 9.96706L3.02907 9.97435C1.79381 12.0203 0.993699 14.303 0.625149 16.8165L0.623578 16.8272L0.622472 16.838C0.377567 19.2241 0.499786 21.5542 0.990715 23.8261L0.99065 23.8261L0.992509 23.8341C1.61277 26.4931 2.85946 28.6874 4.73882 30.3964L4.75147 30.4079L4.76487 30.4185C6.78873 32.0206 9.19182 32.6933 11.9398 32.4523C14.8011 32.3288 17.2486 31.3534 19.2561 29.5198L19.2621 29.5144L19.2678 29.5088C21.2724 27.5558 22.2955 25.2698 22.2955 22.6695C22.2955 20.0569 21.201 17.8753 19.0579 16.1534C17.0357 14.4319 14.5734 13.6406 11.7062 13.762L11.6687 13.7636L11.6318 13.7708L9.70181 14.1469ZM33.2527 14.1519C33.8892 11.8557 35.0746 10.2485 36.7816 9.26825C38.912 8.11553 40.8498 7.317 42.5969 6.86307L43.1124 6.72914L42.9462 6.22311L41.5079 1.84398L41.3821 1.46083L40.981 1.5027C37.5628 1.85952 34.6642 2.81426 32.3055 4.38661C29.9755 5.93986 28.1254 7.79929 26.7656 9.96709L26.7656 9.96706L26.7612 9.97435C25.5261 12.0199 24.7261 14.302 24.3575 16.8149C23.9884 19.2137 24.1107 21.5579 24.7266 23.8425C25.3475 26.4977 26.5935 28.6892 28.4709 30.3964L28.4777 30.4026L28.4847 30.4085C30.3993 32.0252 32.8116 32.6925 35.6709 32.4524C38.5328 32.329 40.9274 31.3528 42.8201 29.5088C44.8247 27.5558 45.8478 25.2698 45.8478 22.6695C45.8478 20.0662 44.8212 17.8851 42.7956 16.1582C40.7723 14.4334 38.3081 13.6405 35.4383 13.762L35.4007 13.7636L35.3638 13.7708C34.7819 13.8842 34.2536 13.998 33.7796 14.1124C33.6119 14.1151 33.4361 14.1284 33.2527 14.1519Z" stroke="#E0BD89"/>
            </svg>
         </span>

         <span class="comment-card__content--comment inline-block whitespace-pre-line mt-6"> {{ comment }} </span>

         <div class="flex flex-col items-start space-y-2 mt-8">

            <span class="comment-card__content--username">
               {{ username }}
            </span>

            <span class="comment-card__content--city">
               {{ `г. ${city}` }}
            </span>

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'CommentCard',
      components: {
      }
   })
   export default class CommentCard extends Vue {

      @Prop() readonly username: string;
      @Prop() readonly comment: string;
      @Prop() readonly city: string;

   } 

</script>

<style lang="scss" scoped>

   .comment-card {
      --card-width: 26rem;
      --card-height: 31.25rem;
      --card-radius: 16px;
      --card-shadow: 0px 20px 40px rgba(11, 11, 12, 0.1);
   }

   .comment-card {

      max-width: var(--card-width);
      min-height: var(--card-height);

      &__content {
         padding: 32px 24px;
         background: $color-primary-2;
         border-radius: var(--card-radius);
         box-shadow: var(--card-shadow);
      
         &--comment {
            @include typography(18px, 400, 26px);
            color: $color-gray;
         }
         &--username {
            @include typography(18px, 600, 24px);
            color: $color-secondary;
         }
         &--city {
            @include typography(14px, 500, 17px);
            color: $color-gray;
         }
      }

   }

</style>