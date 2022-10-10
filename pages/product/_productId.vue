<template>
  <div>
    <div
      class="bg-bgPri relative border-Secondary/5 border-t text-Secondary text-left md:py-16 py-10 md:pl-10 pl-5"
    >
      <p class="font-Great md:text-2xl text-xl">
        <span class="text-Primary">Product</span> detail
      </p>
      <h1 class="font-Playfair md:text-5xl text-4xl">
        {{ currentProduct.category }}
      </h1>
      <div class="w-20 h-0.5 rounded-full bg-Secondary mt-5"></div>
      <div
        class="absolute -bottom-2.5 xs:right-0 xs:mr-7 flex items-center flex-nowrap gap-x-1 w-fit text-[8px] xs:text-[10px] font-Roboto bg-white text-Secondary border-SecondaryVariant border rounded-full px-3 py-1"
      >
        <nuxt-link class="hover:text-Primary" to="./">Product</nuxt-link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="xs:h-3 xs:w-3 h-2 w-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <p class="text-Secondary/70">Product detail</p>
      </div>
    </div>

    <div v-if="currentProduct" class="mt-10 mb-16">
      <div class="px-10 py-5 md:flex justify-center items-center gap-20">
        <Carousel :images="currentProduct.img" />

        <div class="font-Roboto text-Secondary md:w-[35%] w-full mt-7 md:mt-0">
          <h1 class="text-3xl font-Playfair mb-5">
            {{ currentProduct.category }}
          </h1>
          <p class="mb-3">{{ currentProduct.caption }}</p>
          <p class="text-xl">SKU: 0007</p>
          <p class="my-3">
            {{ currentProduct.price }}
            <span class="line-through text-Primary ml-3">4500ks</span>
          </p>
          <div>
            <label for="qty" class="block mb-2 text-sm">Quantity</label>
            <input
              type="number"
              min="1"
              placeholder="1"
              required
              class="bg-gray-50 w-20 border border-SecondaryVariant/50 text-gray-900 text-sm rounded-sm px-2 py-1.5 outline-none focus:border-SecondaryVariant"
            />
          </div>
          <div class="flex flex-col gap-3 mt-3">
            <ButtonAccent
              class="sm:w-60 w-full rounded-sm"
              label="Add To Cart"
            />
            <ButtonPrimary class="sm:w-60 w-full" label="Buy Now" />
          </div>

          <div class="accordion" id="accordionExample">
            <div
              class="accordion-item bg-white font-Roboto w-full sm:w-96 mt-7"
            >
              <h2
                class="accordion-header border-b border-SecondaryVariant/50 bg-white mb-0 duration-150 hover:text-Secondary/70"
                id="headingOne"
              >
                <button
                  class="relative flex justify-between items-center w-full pb-3 text-left text-sm xs:text-base"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Description
                  <span class="text-Secondary/50">+</span>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse duration-500"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div
                  class="accordion-body py-3 border-b border-SecondaryVariant/50 text-sm text-Secondary/70"
                >
                  {{ currentProduct.description }}
                </div>
              </div>
            </div>
            <div
              class="accordion-item bg-white font-Roboto w-full sm:w-96 mt-5"
            >
              <h2
                class="accordion-header border-b border-SecondaryVariant/50 bg-white mb-0 duration-150 hover:text-Secondary/70"
                id="headingTwo"
              >
                <button
                  class="relative flex justify-between items-center w-full pb-3 text-left text-sm xs:text-base"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Product Detail
                  <span class="text-Secondary/50">+</span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse duration-700"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body py-3 text-sm text-Secondary/70">
                  <p class="flex justify-between border-bgPri border-b py-3">
                    Country: <span>{{ currentProduct.detail.country }}</span>
                  </p>
                  <p class="flex justify-between border-bgPri border-b py-3">
                    Weight: <span>{{ currentProduct.detail.weight }}g</span>
                  </p>
                  <p class="flex justify-between border-bgPri border-b py-3">
                    Height: <span>{{ currentProduct.detail.height }}cm</span>
                  </p>
                  <p class="flex justify-between border-bgPri border-b py-3">
                    Length: <span>{{ currentProduct.detail.length }}cm</span>
                  </p>
                  <p
                    class="flex justify-between border-SecondaryVariant/50 border-b py-3"
                  >
                    Width: <span>{{ currentProduct.detail.width }}cm</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-5 font-Roboto">
      <h1 class="text-8xl mb-2 text-slate-700">404 error</h1>
      <p class="text-xl text-Secondary">This page doesn't exist :(</p>
    </div>
    <BestSeller title="There's More To See">
      <nuxt-link to="./">
        <ButtonAccent label="All Product" />
      </nuxt-link>
    </BestSeller>
    <Footer />
  </div>
</template>

<script>
import data from '/store/data.json'
export default {
  name: 'ProductId',
  components: {},
  data() {
    return {
      data,
      showDescription: false,
      showProductDetail: false,
    }
  },
  computed: {
    currentProduct() {
      const product = data.find((d) => d.id == this.$route.params.productId)
      return product
    },
  },
  mounted() {
    console.log(this.data)
  },
}
</script>

<style scoped>
@keyframes openAnimateHeight {
  from {
    max-height: 10vh;
  }
  to {
    max-height: 30vh;
  }
}

.openAni {
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-name: openAnimateHeight;
  transition: height 0.5s;
}

@keyframes closeAnimateHeight {
  from {
    max-height: 30vh;
  }
  to {
    max-height: 10vh;
  }
}

.closeAni {
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-name: closeAnimateHeight;
  transition: height 0.5s;
}
</style>
