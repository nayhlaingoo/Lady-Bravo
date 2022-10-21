<template>
  <div :class="customClass">
    <div
      :class="
        isOpen
          ? 'openAni overflow-auto scrollbar-hide'
          : 'closeAni overflow-hidden'
      "
      @click="isOpen = !isOpen"
      class="border-SecondaryVariant border rounded xs:px-5 px-2 mb-3 cursor-pointer relative"
    >
      <div
        class="flex justify-center items-center sticky -top-1 py-3 bg-white hover:scale-[.99] duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-5 text-Primary hidden xs:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <div class="w-full">
          <div class="flex justify-between items-center">
            <h1 class="text-sm xs:text-base">{{ title }}</h1>
            <div>
              <div
                :class="isOpen ? 'mb-0' : 'mb-2'"
                class="w-6 h-px bg-Secondary/70 duration-300"
              ></div>
              <div class="w-6 h-px bg-Secondary/70"></div>
            </div>
          </div>
        </div>
      </div>
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <p
          v-if="isOpen"
          class="text-sm font-Roboto text-Secondary/70 my-2 xs:ml-10 ml-2"
        >
          {{ description }}
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FQAVue',
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    title: {
      type: [String, Number, Array, Object],
      default: '',
    },
    description: {
      type: [String, Number, Array, Object],
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
@keyframes openAnimateHeight {
  from {
    height: 3.7rem;
  }
  to {
    height: 10rem;
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
    height: 10rem;
  }
  to {
    height: 3.7rem;
  }
}

.closeAni {
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
  animation-name: closeAnimateHeight;
  transition: height 0.5s;
}
</style>
