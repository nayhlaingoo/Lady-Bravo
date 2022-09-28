<template>
  <div class="relative xl:max-w-[2000px] mx-auto">
    <!-- <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 absolute text-Secondary left-0 top-[50%] -translate-y-[50%] md:hidden block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 absolute text-Secondary right-0 top-[50%] -translate-y-[50%] md:hidden block"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
    </svg> -->

    <div
      class="font-Playfair md:flex justify-center items-center md:overflow-hidden overflow-auto scrollbar-hide text-2xl select-none text-Secondary/50 bg-bgPri md:p-16 py-16 px-5 mb-24"
    >
      <div
        class="md:w-full min-w-max md:gap-5 gap-10 flex justify-around items-center"
      >
        <div class="flex justify-center items-center whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <p>VISA</p>
        </div>
        <div class="flex justify-center items-center whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <p>KBZ PAY</p>
        </div>
        <div class="flex justify-center items-center whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <p>MASTER</p>
        </div>
        <div class="flex justify-center items-center whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <p>WAVE MONEY</p>
        </div>
        <div class="flex justify-center items-center whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <p>CB PAY</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PaymentLogoVue',
    data() {
        return {}
    }
}
</script>

<style></style>
