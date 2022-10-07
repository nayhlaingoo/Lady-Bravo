<template>
  <div class="">
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
      <div class="px-10 py-5 flex justify-center items-center gap-20">
        <div class="flex gap-5">
          <div class="">
            <div class="w-24 h-20">
              <img
                @click="sampleImg1 = true"
                class="w-full h-full object-cover rounded-sm"
                src="https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg"
                alt=""
              />
              <img
                @click="sampleImg2 = true"
                class="w-full h-full object-cover rounded-sm my-5"
                src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"
                alt=""
              />
              <img
                @click="sampleImg3 = true"
                class="w-full h-full object-cover rounded-sm"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                alt=""
              />
            </div>
          </div>
          <div
          class="w-[35rem] h-[70vh]">
            <img
              class="w-full h-full object-cover rounded-sm"
              :src="currentProduct.img"
              alt=""
            />
            <!-- <img
                v-bind="currentImg"
                class="w-full h-full object-cover rounded-sm"
                src="https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg"
                alt=""
              />
              <img
                v-bind="currentImg"
                class="w-full h-full object-cover rounded-sm my-5"
                src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"
                alt=""
              />
              <img
                v-bind="currentImg"
                class="w-full h-full object-cover rounded-sm"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                alt=""
              /> -->
          </div>
        </div>

        <div class="font-Roboto text-Secondary w-[35%]">
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
            <ButtonAccent class="w-60 rounded-sm" label="Add To Cart" />
            <ButtonPrimary class="w-60" label="Buy Now" />
          </div>

          <div
            :class="
              description
                ? 'openAni overflow-auto scrollbar-hide'
                : 'closeAni overflow-hidden'
            "
            @click="description = !description"
            class="border-SecondaryVariant border-b w-96 cursor-pointer mt-7"
          >
            <div
              class="flex justify-center items-center sticky -top-1 py-3 bg-white hover:text-Secondary/70 duration-300"
            >
              <div class="w-full">
                <div class="flex justify-between items-center">
                  <h1 class="text-sm xs:text-base">Description</h1>
                  <div>
                    <div
                      :class="description ? 'mb-0 rotate-45' : 'mb-2'"
                      class="text-2xl text-Secondary/70 duration-300"
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <transition
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
            >
              <p
                v-if="description"
                class="text-sm font-Roboto text-Secondary/70 my-2"
              >
                {{ currentProduct.description }}
              </p>
            </transition>
          </div>
          <div
            :class="
              productDetail
                ? 'openAni overflow-auto scrollbar-hide'
                : 'closeAni overflow-hidden'
            "
            @click="productDetail = !productDetail"
            class="border-SecondaryVariant border-b w-96 cursor-pointer"
          >
            <div
              class="flex justify-center items-center sticky -top-1 py-3 bg-white hover:text-Secondary/70 duration-300"
            >
              <div class="w-full">
                <div class="flex justify-between items-center">
                  <h1 class="text-sm xs:text-base">Product Detail</h1>
                  <div>
                    <div
                      :class="productDetail ? 'mb-0 rotate-45' : 'mb-2'"
                      class="text-2xl text-Secondary/70 duration-300"
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <transition
              enter-active-class="animate__animated animate__fadeIn"
              leave-active-class="animate__animated animate__fadeOut"
            >
              <p
                v-if="productDetail"
                class="text-sm font-Roboto text-Secondary/70 my-2"
              >
                {{ currentProduct.detail }}
              </p>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-5 font-Roboto">
      <h1 class="text-8xl mb-2 text-slate-700">404 error</h1>
      <p class="text-xl text-Secondary">This page doesn't exist :(</p>
    </div>
    <BestSeller title="There's More To See" />
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
      description: false,
      productDetail: false,
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
    height: 3.7rem;
  }
  to {
    height: 8rem;
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
    height: 8rem;
  }
  to {
    height: 3.7rem;
  }
}

.closeAni {
  animation-fill-mode: forwards;
  animation-duration: 0.7s;
  animation-name: closeAnimateHeight;
  transition: height 0.7s;
}
</style>
