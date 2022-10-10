<template>
  <div class="py-7">
    <div class="xl:w-[1200px] mx-auto">
      <p class="font-Great text-xl text-Secondary text-center mb-1">
        <span class="text-Primary">Explore</span> the Shop
      </p>
      <h1 class="text-Secondary font-Playfair text-4xl text-center">
        {{ title }}
      </h1>
      <div class="w-20 h-0.5 rounded-full bg-Secondary mx-auto mt-5"></div>
      <div class="md:my-14 my-10 self-center w-full">
        <div class="grid grid-cols-3 lg:gap-7 gap-4 lg:w-[80%] mx-auto px-2">
          <div
            class="flex flex-col items-center justify-center md:h-[19rem] h-[14rem]"
            v-for="(data, index) in data.slice(0, 6)"
            :key="data.id"
          >
            <button
              @click="gotoProductId(data.id)"
              @mouseover="hoverImg = index"
              @mouseleave="hoverImg = null"
              class="w-full h-full flex overflow-hidden relative rounded-sm"
            >
              <img
                :class="hoverImg === index ? 'blur-sm' : 'blur-none'"
                class="w-full h-full object-cover duration-300"
                :src="data.img[0]"
                alt=""
              />
              <transition
                enter-active-class="animate__animated animate__slideInUp animate__faster"
                leave-active-class="animate__animated animate__slideOutDown animate__faster"
              >
                <div
                  v-if="hoverImg === index"
                  class="text-SecondaryVariant absolute bottom-0 bg-zinc-900/60 w-full text-xs sm:text-sm text-center sm:py-2 py-1.5"
                >
                  View Details
                </div>
              </transition>
            </button>
            <div class="text-Secondary font-Playfair text-lg text-center">
              {{ data.name }}
            </div>
            <div class="text-Secondary/80 font-Roboto text-center">
              {{ data.price }}
            </div>
          </div>
        </div>
        <div class="bg-SecondaryVariant mt-16 mx-auto w-[85%] h-px relative">
          <div
            class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          >
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/store/data.json'
export default {
  name: 'BestSellerVue',
  props: {
    title: String,
  },
  data() {
    return {
      data,
      hoverImg: false,
    }
  },
  methods: {
    gotoProductId(id) {
      this.$router.push({
        name: 'product-productId',
        params: {
          productId: id,
        },
      })
    },
  },
}
</script>

<style scoped></style>
