<template>
  <div @click="openCart" class="hidden md:block relative">
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <button
        v-if="cart"
        @click="cart = false"
        class="fixed inset-0 w-full h-full cursor-default bg-black/40 backdrop-blur-md z-10"
      ></button>
    </transition>
    <div
      class="w-full bg-bgPri px-4 py-2 flex justify-between items-center z-50 text-PrimaryVariant"
    >
      <div class="font-Playfair">
        <ul class="flex items-center">
          <div
            @mouseover="openBestOfChoices = true"
            @mouseleave="openBestOfChoices = false"
            class="relative"
          >
            <div class="flex items-end px-4">
              <li class="cursor-pointer">Best Of Choices</li>
              <div class="cursor-pointer w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <BestOfChoices
                @close="openBestOfChoices = false"
                v-if="openBestOfChoices"
              />
            </transition>
          </div>

          <div
            @mouseover="openTipsAndIdeas = true"
            @mouseleave="openTipsAndIdeas = false"
          >
            <div class="flex items-end px-4">
              <li class="cursor-pointer">Tips And Ideas</li>
              <div class="cursor-pointer w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <TipsAndIdeas
                @close="openTipsAndIdeas = false"
                v-if="openTipsAndIdeas"
              />
            </transition>
          </div>
        </ul>
      </div>
      <div class="w-24 cursor-pointer">
        <nuxt-link to="/">
          <img
            class="w-full h-full"
            src="~/static/lblogo.svg"
            alt="Image-Logo"
          />
        </nuxt-link>
      </div>
      <div class="font-Playfair">
        <ul class="flex items-center">
          <li class="px-4 hover:text-PrimaryVariant/80 duration-150">
            <nuxt-link to="/aboutus">About Lady Bravo</nuxt-link>
          </li>
          <li class="px-4 hover:text-PrimaryVariant/80 duration-150">
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
          <div @click="cart = !cart" class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
        </ul>
      </div>
    </div>
    <Cart @close="cart = false" :open="cart" />
  </div>
</template>

<script>
import BestOfChoices from '@/components/NavBar/BestOfChoices.vue'
import TipsAndIdeas from '@/components/NavBar/TipsAndIdeas.vue'
import Cart from '@/components/NavBar/Cart.vue'

export default {
  name: 'NavBarVue',
  components: {
    BestOfChoices,
    TipsAndIdeas,
    Cart,
  },
  data() {
    return {
      openBestOfChoices: false,
      openTipsAndIdeas: false,
      cart: false,
    }
  },
  methods: {
    openCart() {
      const elem = document.querySelector('body')
      if (this.cart) {
        elem.style.overflow = 'visible'
      } else {
        elem.style.overflow = ''
      }
    },
  },
}
</script>

<style scoped></style>
