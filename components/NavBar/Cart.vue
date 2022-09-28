<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div
      class="absolute top-0 right-0 flex items-center xs:max-w-[400px] w-full h-screen z-50"
      v-if="open"
    >
      <div class="bg-zinc-300 w-full h-full xs:px-5 px-2 py-3">
        <header
          class="flex items-center border-black/20 border-b pb-3 relative"
        >
          <h1 class="font-Playfair mx-auto text-Primary text-3xl">My Cart</h1>
          <button
            @click="$emit('close')"
            class="absolute right-0 bg-bgPri text-Secondary w-9 h-9 rounded-full flex justify-center items-center hover:rotate-90 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        <div class="flex flex-col justify-center items-center w-full h-full">
          <h1 class="font-Playfair text-3xl text-Secondary mb-7">
            Your cart is empty
          </h1>
          <!-- <nuxt-link to="catalog/page-1">
            <ButtonAccent @click="$emit('clickbtn')"
              label="Start Shopping"
              class="text-Primary border-Primary"
            />
          </nuxt-link> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CartVue',
  data() {
    return {}
  },
  props: {
    open: {
      type: Boolean,
    },
  },
}
</script>

<style scoped></style>
