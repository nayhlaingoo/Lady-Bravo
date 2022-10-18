<template>
  <div
    class="bg-bgPri px-4 md:py-2 flex items-center border-black/5 border-b relative"
  >
    <!-- desktop -->
    <div class="hidden md:block relative w-full">
      <div
        class="w-full flex justify-between items-center z-50 text-PrimaryVariant"
      >
        <div class="font-Playfair">
          <ul class="flex items-center">
            <li class="cursor-pointer px-4 hover:text-PrimaryVariant/80 duration-150">
              <nuxt-link to="/"> Home </nuxt-link>
            </li>
            <li class="cursor-pointer px-4 hover:text-PrimaryVariant/80 duration-150">
              <nuxt-link to="product"> Shop </nuxt-link>
            </li>
            <div
              @mouseover="openBestOfChoices = true"
              @mouseleave="openBestOfChoices = false"
            >
              <div class="flex items-end px-4">
                <li class="cursor-pointer">Shop By Category</li>
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
            <slot />
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
              <nuxt-link to="about">About Lady Bravo</nuxt-link>
            </li>
            <li class="px-4 hover:text-PrimaryVariant/80 duration-150">
              <nuxt-link to="contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div @click="openNav" class="block md:hidden overflow-x-hidden w-full">
      <button
        v-if="open"
        @click="open = false"
        class="fixed inset-0 w-full h-full cursor-default"
      ></button>
      <div
        class="flex items-center justify-center relative border-black/5 border-b py-2"
      >
        <div @click="open = false" class="w-24 cursor-pointer">
          <nuxt-link to="/">
            <img
              class="w-full h-full"
              src="~/static/lblogo.svg"
              alt="Image-Logo"
            />
          </nuxt-link>
        </div>
        <div
          @click="open = !open"
          :class="
            open === false
              ? (openBestOfChoices = false) || (openTipsAndIdeas = false)
              : ''
          "
          class="p-2 cursor-pointer select-none absolute left-0"
        >
          <div class="bg-PrimaryVariant w-7 h-px"></div>
          <div
            :class="open === true ? 'my-0' : 'my-1.5'"
            class="bg-PrimaryVariant w-7 h-px duration-500"
          ></div>
          <div class="bg-PrimaryVariant w-7 h-px"></div>
        </div>
      </div>
      <div
        :class="open === true ? 'openAni' : open === false ? 'closeAni' : ''"
        class="bg-bgPri text-PrimaryVariant font-Playfair w-full"
      >
        <ul
          v-if="open"
          :class="open === true ? 'openAni' : open === false ? 'closeAni' : ''"
          class="flex flex-col items-center justify-around text-lg w-full py-5 relative"
        >
          <li
            @click="open = false"
            class="cursor-pointer animate__animated animate__fadeIn delay-1 hover:text-PrimaryVariant/80 duration-150"
          >
            <nuxt-link to="/"> Home </nuxt-link>
          </li>
          <li
            @click="open = false"
            class="cursor-pointer animate__animated animate__fadeIn delay-2 hover:text-PrimaryVariant/80 duration-150"
          >
            <nuxt-link to="product"> Shop </nuxt-link>
          </li>
          <div @click="openBestOfChoices = !openBestOfChoices">
            <li
              class="cursor-pointer animate__animated animate__fadeIn delay-3 hover:text-PrimaryVariant/80 duration-150"
            >
              Shop By Category
            </li>
          </div>

          <transition
            enter-active-class="animate__animated animate__slideInRight"
            leave-active-class="animate__animated animate__slideOutRight"
          >
            <div
              v-if="openBestOfChoices"
              class="absolute w-full h-[50vh] z-50 pt-5 overflow-auto bg-bgPri/70 backdrop-blur-md"
            >
              <BestOfChoices @close="open = false" class="w-full" />
              <div
                @click="openBestOfChoices = false"
                v-if="openBestOfChoices"
                class="absolute right-10 cursor-pointer animate__animated animate__fadeIn delay-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-5 w-5 text-Secondary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </transition>

          <li
            @click="open = false"
            class="animate__animated animate__fadeIn delay-4 hover:text-PrimaryVariant/80 duration-150"
          >
            <nuxt-link to="about">About Lady Bravo</nuxt-link>
          </li>
          <li
            @click="open = false"
            class="animate__animated animate__fadeIn delay-5 hover:text-PrimaryVariant/80 duration-150"
          >
            <nuxt-link to="contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <Cart class="md:static absolute top-3 right-2" />
  </div>
</template>

<script>
import BestOfChoices from '@/components/NavBar/BestOfChoices.vue'

export default {
  name: 'NavBarVue',
  components: {
    BestOfChoices
  },
  data() {
    return {
      open: null,
      openBestOfChoices: false,
    }
  },
  methods: {
    openNav() {
      const elem = document.querySelector('body')
      if (this.open) {
        elem.style.overflow = 'hidden'
      } else {
        elem.style.overflow = ''
      }
    },
  },
}
</script>

<style scoped>
.delay-1 {
  animation-delay: 0.2s;
}
.delay-2 {
  animation-delay: 0.3s;
}
.delay-3 {
  animation-delay: 0.4s;
}
.delay-4 {
  animation-delay: 0.6s;
}
.delay-5 {
  animation-delay: 0.8s;
}
@keyframes openAnimateHeight {
  from {
    height: 0px;
  }
  to {
    height: 50vh;
  }
}

.openAni {
  animation-fill-mode: forwards;
  animation-duration: 0.8s;
  animation-name: openAnimateHeight;
  transition: height 0.8s;
}

@keyframes closeAnimateHeight {
  from {
    height: 50vh;
  }
  to {
    height: 0px;
  }
}

.closeAni {
  animation-fill-mode: forwards;
  animation-duration: 0.7s;
  animation-name: closeAnimateHeight;
  transition: height 0.7s;
}
</style>
