<template>
  <div>
    <PageHeader title1="Product" title2="detail" currentPage="Product">
      <template #currentProduct>
        <div v-if="currentProduct">
          <h1>
            {{ currentProduct.category }}
          </h1>
        </div>
        <div v-else>
          <p class="font-Roboto">404 error</p>
        </div>
      </template>
    </PageHeader>

    <div v-if="currentProduct" class="mt-10">
      <div class="px-10 py-5 md:flex justify-center items-center gap-20">
        <Carousel :images="currentProduct.img" />

        <div class="font-Roboto text-Secondary md:w-[35%] w-full mt-7 md:mt-0">
          <h1 class="text-3xl font-Playfair mb-5">
            {{ currentProduct.category }}
          </h1>
          <p class="mb-3">{{ currentProduct.caption }}</p>
          <p class="text-xl">SKU: 0007</p>
          <p class="my-3">
            {{ currentProduct.price }}Ks
            <span class="line-through text-Primary ml-3">4500ks</span>
          </p>
          <div class="flex flex-col gap-3 mt-3">
            <InputField
              @click="addToCart(currentProduct)"
              v-model="currentProduct.qty"
              placeHolder="Quantity"
              type="number"
              min="1"
              class="sm:w-60"
            >
              <ButtonSecondary
                type="submit"
                class="w-full rounded-sm mt-3"
                label="Add To Cart"
              />
            </InputField>

            <ButtonPrimary
              class="sm:w-60 w-full duration-150 cursor-not-allowed"
              label="Buy Now"
              disabled
            />
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
      <BestSeller title="There's More To See">
        <nuxt-link to="./">
          <ButtonSecondary label="All Product" />
        </nuxt-link>
      </BestSeller>
      <Footer />
    </div>
  </div>
</template>

<script>
import Accordin from '~/components/Accordion.vue'
import data from '/store/data.json'
import InputField from '~/components/Form/InputField.vue'
export default {
  name: 'ProductId',
  components: { InputField, Accordin },
  head() {
    return {
      title: this.currentProduct
        ? this.currentProduct.category + '/' + this.currentProduct.id
        : '',
    }
  },
  data() {
    return {
      data,
      errMesage: 'Quantity is required.',
      error: false,
    }
  },
  watch: {
    currentProduct: {
      created() {
        this.$router
          .add({
            query: {
              category: this.currentProduct.caption,
            },
          })
          .catch(() => {})
      },
    },
  },
  // created() {
  //   this.selectedCategory = this.$route.query.category
  // },
  methods: {
    addToCart(currentProduct) {
      if (!currentProduct.qty) {
        this.error = true
        this.error = this.errMesage
        setTimeout(() => {
          this.error = false
        }, 3000)
      } else {
        $nuxt.$emit('add-to-cart', currentProduct)
      }
    },
  },
  computed: {
    currentProduct() {
      const product = data.find((d) => d.id == this.$route.params.productId)
      return product
    },
  },
  mounted() {
    console.log()
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
