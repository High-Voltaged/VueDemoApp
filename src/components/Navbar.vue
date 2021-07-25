<template>

   <div :class="fixed ? 'scrolled items-center' : 'items-end'" class="sticky navbar flex top-0 w-full">

      <div class="navbar-content flex items-center justify-between w-full">

         <div class="block">

            <svg width="111" height="36" viewBox="0 0 111 36" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M30.632 30.728C27.208 34.088 23 35.768 18.008 35.768C13.016 35.768 8.792 34.088 5.336 30.728C1.912 27.336 0.2 23.16 0.2 18.2C0.2 13.24 1.912 9.08 5.336 5.72C8.792 2.328 13.016 0.631999 18.008 0.631999C23 0.631999 27.208 2.328 30.632 5.72C34.088 9.08 35.816 13.24 35.816 18.2C35.816 23.16 34.088 27.336 30.632 30.728ZM12.104 24.056C13.672 25.592 15.64 26.36 18.008 26.36C20.376 26.36 22.328 25.592 23.864 24.056C25.432 22.488 26.216 20.536 26.216 18.2C26.216 15.864 25.432 13.928 23.864 12.392C22.328 10.824 20.376 10.04 18.008 10.04C15.64 10.04 13.672 10.824 12.104 12.392C10.568 13.928 9.8 15.864 9.8 18.2C9.8 20.536 10.568 22.488 12.104 24.056ZM74.4556 1.4V35H64.8556V18.632L57.3676 31.208H56.5036L49.0156 18.632V35H39.4156V1.4H49.0156L56.9356 15.08L64.8556 1.4H74.4556ZM95.6274 35.768C90.5714 35.768 86.3794 34.088 83.0514 30.728C79.7234 27.368 78.0594 23.192 78.0594 18.2C78.0594 13.208 79.7234 9.032 83.0514 5.672C86.3794 2.312 90.5714 0.631999 95.6274 0.631999C98.7314 0.631999 101.595 1.368 104.219 2.84C106.843 4.312 108.891 6.296 110.363 8.792L102.011 13.592C101.467 12.504 100.619 11.64 99.4674 11C98.3154 10.36 97.0354 10.04 95.6274 10.04C93.2594 10.04 91.3394 10.808 89.8674 12.344C88.3954 13.88 87.6594 15.832 87.6594 18.2C87.6594 20.568 88.3954 22.52 89.8674 24.056C91.3394 25.592 93.2594 26.36 95.6274 26.36C97.0674 26.36 98.3474 26.04 99.4674 25.4C100.619 24.76 101.467 23.88 102.011 22.76L110.363 27.56C108.891 30.088 106.843 32.088 104.219 33.56C101.595 35.032 98.7314 35.768 95.6274 35.768Z" fill="#E0BD89"/>
            </svg>

         </div>

         <div class="navbar-content--tabs flex items-center space-x-4 xl:space-x-8 ml-12 tracking-tighter"> 

            <div 
               v-for="(tab, i) in tabs"
               @click="clickBtn(i)"
               :key="i"
               class="navbar-content--tabs__tab relative cursor-pointer">

               <span :class="{ 'selected': isSelected(i) }" class="inline-block">
                  {{ tab.title }}
               </span>

               <div 
                  :class="isSelected(i) ? 'selected-badge' : 'unselected-badge'"
                  class="navbar-content-tab__selected absolute inset-x-0"
               ></div>

            </div>

         </div>

         <div class="navbar-content--btns flex items-center space-x-4 ml-12">

            <div class="navbar-content--btns__btn">

               <button class="flex items-center space-x-2"> 
                  
                  <span> {{ btns[0] }} </span> 
               
                  <span class="inline-block">
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.66675 11.3333L10.0001 7.99996L6.66675 4.66663" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 8H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>

                  </span>
               
               </button>
            
            </div>

            <div class="navbar-content--btns__btn">

               <button class="flex items-center space-x-2"> 
                  
                  <span> {{ btns[1] }} </span> 
               
                  <span class="inline-block">
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 14V12.6667C11 11.9594 10.719 11.2811 10.219 10.781C9.71886 10.281 9.04058 10 8.33333 10H3.66667C2.95942 10 2.28115 10.281 1.78105 10.781C1.28095 11.2811 1 11.9594 1 12.6667V14" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.99992 7.33333C7.47268 7.33333 8.66658 6.13943 8.66658 4.66667C8.66658 3.19391 7.47268 2 5.99992 2C4.52716 2 3.33325 3.19391 3.33325 4.66667C3.33325 6.13943 4.52716 7.33333 5.99992 7.33333Z" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13 5V9" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 7H11" stroke="#202022" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                  </span>
               
               </button>
            
            </div>

         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   
   @Component({
      name: 'Navbar',
      components: {
      }
   })
   export default class Navbar extends Vue {

      currentTab: number = 0;
      tabs = [
         { title: "О нас" },
         { title: "Пакеты инвестиций" },
         { title: "Реферальная программа" },
         { title: "Блог" },
         { title: "FAQ" },
      ];
      btns = ["Войти", "Регистрация"];

      clickBtn(id: number): void {

         this.currentTab = id;

      }

      isSelected(id: number): boolean {

         return (this.currentTab == id);

      }

      fixed: boolean = false;
      get getFixed() {

         return this.fixed;

      }

      mounted() {

         window.document.onscroll = () => {

            let navbar = document.getElementsByClassName('navbar')[0] as HTMLElement;

            if (window.scrollY > navbar.offsetHeight) {
               
               this.fixed = true;
            
            } else {
            
               this.fixed = false;
            
            }

         }

      }

   } 

</script>

<style lang="scss" scoped>

   .navbar {
      height: var(--navbar-height);
      padding-right: var(--container-spacing);
      padding-left: var(--container-spacing);
      z-index: 40;
      transition: all .3s ease;

      &.scrolled {
         height: var(--navbar-height-sm);
         background: var(--color-primary);
      }

      &-content {
   
         &--tabs__tab {
            .selected_badge {
               transform: translateY(0) !important;
               opacity: 1 !important;
            }
      
            .unselected-badge {
               transform: translateY(-6px);
               opacity: 0;
            }
            
            span {
               @include typography(16px, 500, 20px);
               color: white;
            }
   
            .selected {
               color: var(--color-secondary);
               transition: all 0.3s ease;
            }
         }
         
         &-tab__selected {
            width: 100%;
            height: 2px;
            margin-top: 10px;
   
            transition: all 0.3s ease;
            background-color: var(--color-secondary);
         }
   
         &--btns__btn:nth-of-type(1) button {
            border: 1px solid var(--color-secondary);
            background: transparent;
            
            &:hover span, &:focus span {
               color: var(--color-primary);
            }
            
            span {
               @include typography(16px, 500, 20px);
               color: var(--color-secondary);
            }
         }   
   
         &--btns__btn:nth-of-type(2) button {
            background: var(--color-secondary);

            span {
               @include typography(16px, 500, 20px);
               color: var(--color-primary);
            }
         }
         
         &--btns__btn button {
            border-radius: var(--btn-radius);
            padding: 14px 24px;
            
            transition: all .3s ease;
            &:hover {
               background: var(--color-hover-btn);
            }
            &:focus {
               background: var(--color-focus-btn);
            }
         }
   
      }

   }

</style>