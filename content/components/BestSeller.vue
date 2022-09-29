<template>
  <div class="py-7">
    <div class="xl:w-[1200px] mx-auto">
      <p class="font-Great text-xl text-Secondary text-center mb-1">
        <span class="text-Primary">Explore</span> the Shop
      </p>
      <h1 class="text-Secondary font-Playfair text-4xl text-center">
        Our Best Seller
      </h1>
      <div class="w-20 h-0.5 rounded-full bg-Secondary mx-auto mt-5"></div>
      <div class="flex flex-col items-center justify-center gap-7">
        <div
          class="flex flex-wrap justify-center items-center md:gap-10 gap-4 w-full md:px-10 px-3 mt-10"
        >
          <div v-for="(product, index) in products" :key="product.index">
            <div class="flex flex-col items-center justify-center">
              <div
                @mouseover="hoverImg = index"
                @mouseleave="hoverImg = null"
                class="w-52 h-72 flex overflow-hidden relative rounded-sm"
              >
                <img
                  class="duration-300 cursor-pointer w-full h-full object-cover"
                  :src="product.img"
                  :class="hoverImg === index ? 'blur-sm' : 'blur-none'"
                />
                <transition
                  enter-active-class="animate__animated animate__slideInUp animate__faster"
                  leave-active-class="animate__animated animate__slideOutDown animate__faster"
                >
                  <button
                    v-if="hoverImg === index"
                    class="text-SecondaryVariant absolute bottom-0 bg-zinc-900/60 w-full text-sm text-center py-3"
                  >
                    View Details
                  </button>
                </transition>
              </div>
              <div class="text-Secondary font-Playfair text-lg">
                {{ product.name }}
              </div>
              <div class="text-Secondary/80 font-Roboto">
                {{ product.price }}
              </div>
            </div>
          </div>
        </div>
        <div class="bg-SecondaryVariant mt-10 w-[85%] h-px relative">
          <button
            class="border-SecondaryVariant bg-white absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 border hover:border-Primary text-Secondary font-Roboto hover:bg-Primary hover:text-white rounded-sm w-32 px-3 py-1.5 duration-300"
          >
            <nuxt-link to="product">All Products</nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BestSellerVue',
  data() {
    return {
      hoverImg: false,
      products: [
        { img: 'cadburyimg.jpg', name: 'Cadbury', price: '3500ks' },
        { img: 'rocherimg.jpg', name: 'Ferrero Rocher', price: '4200ks' },
        { img: 'cadburyimg.jpg', name: 'Cadbury', price: '3500ks' },
        { img: 'rocherimg.jpg', name: 'Ferrero Rocher', price: '4200ks' },
        { img: 'cadburyimg.jpg', name: 'Cadbury', price: '3500ks' },
        { img: 'rocherimg.jpg', name: 'Ferrero Rocher', price: '4200ks' },
        { img: 'cadburyimg.jpg', name: 'Cadbury', price: '3500ks' },
        { img: 'rocherimg.jpg', name: 'Ferrero Rocher', price: '4200ks' },
      ],
    }
  },
}
</script>

<style scoped></style>
