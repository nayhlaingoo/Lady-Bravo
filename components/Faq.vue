<template>
  <div class="my-16">
    <div
      class="lg:flex justify-center items-center gap-20 xl:w-[1024px] w-full px-4 mx-auto text-Secondary font-Playfair"
    >
      <div class="self-start lg:max-w-[400px] lg:mb-0 mb-10">
        <p class="font-Great text-xl">
          <span class="text-Primary">Payment</span> & Service
        </p>
        <h1 class="text-4xl tracking-wide">Frequently Asked Questions</h1>
        <p class="font-Roboto sm:text-base text-sm mt-6 text-Secondary/70">
          Read about our delivery services, return policy and payment method.
        </p>
      </div>
      <div class="flex flex-col gap-5 lg:w-[550px] select-none">
        <div
          :class="
            faq1
              ? 'openAni overflow-auto scrollbar-hide'
              : 'closeAni overflow-hidden'
          "
          @click="faq1 = !faq1"
          class="border-SecondaryVariant border rounded xs:px-5 px-2 cursor-pointer relative"
        >
          <div
            class="flex justify-center items-center sticky -top-1 py-3 bg-white hover:scale-[.98] duration-300"
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
                <h1 class="text-sm xs:text-base">How to order?</h1>
                <div>
                  <div
                    :class="faq1 ? 'mb-0' : 'mb-2'"
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
              v-if="faq1"
              class="text-sm font-Roboto text-Secondary/70 my-2 xs:ml-10 ml-2"
            >
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.
            </p>
          </transition>
        </div>

        <div
          :class="
            faq2
              ? 'openAni overflow-auto scrollbar-hide'
              : 'closeAni overflow-hidden'
          "
          @click="faq2 = !faq2"
          class="border-SecondaryVariant border rounded xs:px-5 px-2 cursor-pointer"
        >
          <div
            class="flex justify-center items-center sticky -top-1 py-3 bg-white hover:scale-[.98] duration-300"
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
                <h1 class="text-sm xs:text-base">
                  What is your return policy?
                </h1>
                <div>
                  <div
                    :class="faq2 ? 'mb-0' : 'mb-2'"
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
              v-if="faq2"
              class="text-sm font-Roboto text-Secondary/70 my-2 xs:ml-10 ml-2"
            >
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.
            </p>
          </transition>
        </div>

        <div
          :class="
            faq3
              ? 'openAni overflow-auto scrollbar-hide'
              : 'closeAni overflow-hidden'
          "
          @click="faq3 = !faq3"
          class="border-SecondaryVariant border rounded xs:px-5 px-2 cursor-pointer"
        >
          <div
            class="flex justify-center items-center sticky -top-1 py-3 bg-white hover:scale-[.98] duration-300"
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
                <h1 class="text-sm xs:text-base">How much is shipping?</h1>
                <div>
                  <div
                    :class="faq3 ? 'mb-0' : 'mb-2'"
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
              v-if="faq3"
              class="text-sm font-Roboto text-Secondary/70 my-2 xs:ml-10 ml-2"
            >
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.
            </p>
          </transition>
        </div>

        <div
          :class="
            faq4
              ? 'openAni overflow-auto scrollbar-hide'
              : 'closeAni overflow-hidden'
          "
          @click="faq4 = !faq4"
          class="border-SecondaryVariant border rounded xs:px-5 px-2 cursor-pointer"
        >
          <div
            class="flex justify-center items-center sticky -top-1 py-3 bg-white hover:scale-[.98] duration-300"
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
                <h1 class="text-sm xs:text-base">When will my order ship?</h1>
                <div>
                  <div
                    :class="faq4 ? 'mb-0' : 'mb-2'"
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
              v-if="faq4"
              class="text-sm font-Roboto text-Secondary/70 my-2 xs:ml-10 ml-2"
            >
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.
            </p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FQAVue',
  data() {
    return {
      faq1: false,
      faq2: false,
      faq3: false,
      faq4: false,
    }
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
