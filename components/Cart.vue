<template>
  <div :class="customClass" class="z-10 relative">
    <div
      class="bg-Primary border-PrimaryVariant/50 border w-8 h-8 flex justify-center items-center rounded-full relative"
    >
      <button
        class="inline-block transition duration-150 ease-in-out"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-bgPri"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <div
          v-if="products.length"
          class="bg-red-500 border-bgPri border-[1px] p-2 rounded-full w-4 h-4 flex items-center justify-center absolute -top-1 -left-2"
        >
          <p class="text-white font-Roboto text-xs">
            {{ products.length }}
          </p>
        </div>
      </button>
    </div>

    <div
      class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div
        class="offcanvas-header flex items-center justify-between p-4 border-SecondaryVariant border-b"
      >
        <h5
          class="offcanvas-title mb-0 tracking-wide font-Playfair text-Primary text-xl"
          id="offcanvasRightLabel"
        >
          Your Cart
        </h5>
        <button
          type="button"
          class="btn-close box-content bg-bgPri hover:rotate-180 duration-300 rounded-full w-4 h-4 p-2 text-xs -my-5 -mr-2"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body flex-grow overflow-y-auto">
        <div v-if="products.length" class="overflow-x-hidden pb-16 mx-1">
          <div v-for="(product, index) in products" :key="index" class="w-full">
            <div
              @click="selectProduct(product)"
              class="w-full flex gap-3 my-3 p-1 hover:bg-SecondaryVariant/30 duration-100 cursor-pointer"
            >
              <img
                class="w-20 h-auto object-cover"
                :src="product.img[0]"
                alt=""
              />
              <div
                class="text-sm font-Roboto text-Secondary flex flex-col gap-y-1"
              >
                <p>{{ product.name }}</p>
                <p>{{ product.caption }}</p>
                <p>$ {{ product.price }}Ks</p>
                <p>Total: {{ product.qty }}</p>
              </div>
            </div>
            <div
              class="fixed bottom-0 w-full bg-SecondaryVariant/30 border-SecondaryVariant/70 border-t px-3 py-4"
            >
              <div class="flex justify-start items-center gap-3">
                <p>Total Price: {{ totalPrice }}Ks</p>
                <ButtonSecondary class="text-sm rounded-md" label="Check out" />
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          class="flex flex-col justify-center items-center w-full h-full"
        >
          <h1 class="font-Playfair text-3xl text-Secondary mb-7">
            Your cart is empty
          </h1>
        </div>
      </div>
      <Modal
        v-model="modalOpen"
        customClass="max-w-[700px] mx-3"
        title="Product Info"
      >
        <div v-if="product">
          <div>
            <div class="border-bgPri border-b py-2 flex">
              <p class="w-24">name:</p>
              {{ product.category }}
            </div>
            <div class="border-bgPri border-b py-2 flex">
              <p class="w-24">about:</p>
              <span class="sm:w-96 w-[70%]">
                {{ product.caption }}
              </span>
            </div>
            <div class="border-bgPri border-b py-2 flex">
              <p class="w-24">country:</p>
              {{ product.detail.country }}
            </div>
            <div class="border-bgPri border-b py-2 flex">
              <p class="w-24">weight:</p>
              {{ product.detail.weight }}cm
            </div>
            <div class="border-bgPri border-b py-2 flex">
              <p class="w-24">height:</p>
              {{ product.detail.height }}cm
            </div>
            <div class="border-bgPri border-b py-2 flex">
              <p class="w-24">width:</p>
              {{ product.detail.width }}cm
            </div>
            <div class="border-bgPri border-b py-2 flex">
              <p class="w-24">lenght:</p>
              {{ product.detail.length }}cm
            </div>
            <div
              class="flex justify-between items-center border-bgPri border-b py-2"
            >
              <div class="flex">
                <p class="w-24">total:</p>
                {{ product.qty }}
              </div>
              <div class="flex gap-3">
                <button
                  @click="decreaseQty(product)"
                  class="bg-red-200 select-none border-red-400 border-[1px] text-red-600 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  -
                </button>
                <button
                  @click="increaseQty(product)"
                  class="bg-green-200 select-none border-green-400 border-[1px] text-green-600 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
            <div class="border-bgPri border-b py-2 flex">
              <p class="w-24">price:</p>
              {{ product.price * product.qty }}ks
            </div>
          </div>
        </div>
        <template #footer>
          <ButtonSecondary
            @click="modalOpen = false"
            label="Submit"
            class="rounded-md mt-16"
          />
        </template>
      </Modal>
    </div>
    <transition
      enter-active-class="animate__animated animate__fadeInDown animate__fast"
      leave-active-class="animate__animated animate__fadeOutUp animate__fast"
    >
      <div
        v-if="successAlert"
        class="fixed z-10 inset-0 w-full h-fit max-w-[1000px] mx-auto mt-1"
      >
        <div
          class="p-4 mx-3 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <span class="font-medium">successfully added!</span> Your product
          added into cart.
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'CartVue',
  props: {
    customClass: {
      type: String,
      default: '',
    },
  },
  components: {
    Modal,
  },
  data() {
    return {
      product: null,
      products: [],
      modalOpen: false,
      successAlert: false,
    }
  },
  computed: {
    totalPrice() {
      return this.products.reduce((a, b) => a + b.price * b.qty, 0)
    },
  },
  created() {
    this.$nuxt.$on('add-to-cart', (item) => {
      let alreadyExist = this.products.find((product) => product.id === item.id)
      if (alreadyExist) {
        alreadyExist.qty = item.qty
      } else {
        this.products.push({ ...item })
        this.successAlert = true
        setTimeout(() => {
          this.successAlert = false
        }, 4000)
      }
      console.log('added into cart', item)
    })
  },
  methods: {
    increaseQty(item) {
      let increaseQty = this.products.find((product) => product.id === item.id)
      increaseQty.qty++
      console.log('increase Qty', item)
    },
    decreaseQty(item) {
      let decreaseQty = this.products.find((product) => product.id === item.id)
      let index = this.products.findIndex((product) => product.id === item.id)
      decreaseQty.qty--
      if (decreaseQty.qty === 0) {
        this.products.splice(index, 1)
      }
      console.log('decrease Qty', item)
    },
    selectProduct(item) {
      this.product = item
      this.modalOpen = true
    },
  },
}
</script>

<style></style>
