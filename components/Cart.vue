<template>
  <div>
    <div
      class="bg-PrimaryVariant w-6 h-[26px] flex justify-center items-center rounded-md relative"
    >
      <button
        class="inline-block transition duration-150 ease-in-out"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <outline-shopping-cart-icon class="w-3.5 h-3.5 text-white" />
        <div
          v-if="products.length"
          class="bg-red-500 border-bgPri border-[1px] p-2 rounded-full w-3 h-3 flex items-center justify-center absolute -top-1 -left-2"
        >
          <p class="text-white font-Roboto text-xs">
            {{ products.length }}
          </p>
        </div>
      </button>
    </div>

    <div
      class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-bgPri invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
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
          class="btn-close box-content bg-SecondaryVariant hover:rotate-180 duration-300 rounded-full w-4 h-4 p-2 text-xs -my-5 -mr-2 opacity-60"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body flex-grow overflow-y-auto">
        <div v-if="products.length" class="overflow-x-hidden pb-16 mx-1">
          <div v-for="(product, index) in products" :key="index" class="w-full">
            <div
              class="w-full flex gap-3 my-3 p-1 hover:bg-SecondaryVariant/30 duration-100 cursor-pointer"
            >
              <div class="w-16">
                <img
                  class="w-full h-full object-cover"
                  :src="product.img[0]"
                  alt=""
                />
              </div>
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
                <ButtonAccent class="text-sm rounded-md" label="Check out" />
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartVue',
  data() {
    return {
      products: [],
    }
  },
  computed: {
    totalPrice() {
      return this.products.reduce((a, b) => a + b.price * b.qty, 0)
    },
  },
  created() {
    this.$nuxt.$on('add-to-cart', (item) => {
      console.log('add', item)
      let alreadyExist = this.products.find((product) => product.id === item.id)
      if (alreadyExist) {
        alreadyExist.qty = item.qty
      } else {
        this.products.push({ ...item })
      }
      // if (!alreadyExist) this.products.push(item)
    })
  },
}
</script>

<style></style>
