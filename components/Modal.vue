<script>
export default {
  name: 'ModalVue',
  props: {
    value: {
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  components: {},
  watch: {
    value: {
      handler: function (value) {
        this.$emit('input', value)
        const html = document.querySelector('html')
        if (value) {
          html.style.overflow = 'hidden'
        } else {
          html.style.overflow = null
        }
      },
      immediate: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('input', false)
    },
  },
}
</script>
<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn duration"
    leave-active-class="animate__animated animate__fadeOut duration"
  >
    <div v-show="value" class="fixed z-10 inset-0 overflow-y-auto bg-black/50">
      <transition
        enter-active-class="animate__animated animate__slideInUp duration"
        leave-active-class="animate__animated animate__slideOutDown duration"
      >
        <div
          v-show="value"
          class="flex items-start justify-center sm:min-h-screen text-center w-full"
        >
          <div
            id="modal"
            :class="customClass"
            class="flex flex-col bg-white rounded-lg text-left shadow-xl p-5 sm:my-8 sm:align-middle sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            tabindex="0"
          >
            <div class="flex justify-between items-center">
              <div>
                <p class="text-2xl font-Playfair mb-4 text-Primary">{{ title }}</p>
                <p class="text-xs text-gray-600 font-medium mb-4">
                  {{ description }}
                </p>
              </div>
              <!-- <button
                @click="closeModal"
                class="flex justify-center items-center flex-shrink-0 bg-bgPri hover:rotate-180 duration-300 rounded-full w-8 h-8 cursor-pointer self-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> -->
            </div>
            <slot />
            <div class="mt-auto">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<style scoped>
.duration {
  --animate-duration: 0.4s;
}
</style>
