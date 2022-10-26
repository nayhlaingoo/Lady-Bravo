<template>
  <div
    class="md:flex items-center bg-bgPri max-w-[2000px] mx-auto md:h-96 my-10"
  >
    <div class="md:w-1/2 h-full hidden md:block">
      <img class="mx-auto h-full object-cover" src="~/static/shp.png" alt="" />
    </div>
    <div
      class="md:w-1/2 flex flex-col items-center text-Secondary lg:mr-9 sm:px-9 p-2"
    >
      <div class="md:bg-Primary px-3 py-1 rounded-full md:self-start">
        <p
          class="md:text-xs md:mt-0 mt-3 md:text-bgPri text-Primary font-Great whitespace-nowrap"
        >
          Valentine Day Sale
        </p>
      </div>
      <h1
        class="font-Playfair md:text-left text-center md:self-start text-3xl mt-2 mb-5"
      >
        Up to <span class="text-Primary">20% Off</span> The most popular brand
        chocolates.
      </h1>
      <nuxt-link class="md:self-start" to="product">
        <ButtonSecondary label="Shop Now" />
      </nuxt-link>
    </div>
    <div class="w-1/2 h-full mx-auto block md:hidden mt-2">
      <img class="h-full object-cover" src="~/static/shp.png" alt="" />
    </div>
  </div>
</template>

<script>
import ButtonSecondary from './Button/ButtonSecondary.vue'
export default {
  components: { ButtonSecondary },
  name: 'VdayDiscountVue',
}
</script>

<style></style>
