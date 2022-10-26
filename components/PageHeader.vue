<template>
  <div
    :class="customClass"
    class="bg-bgPri relative border-Secondary/5 border-t text-Secondary text-left md:py-24 py-16 md:pl-10 pl-5"
  >
    <p class="font-Great md:text-2xl text-xl">
      <span class="text-Primary">{{ title1 }}</span> {{ title2 }}
    </p>
    <h1 class="font-Playfair md:text-5xl text-4xl">
      <slot name="currentProduct" />
    </h1>
    <div class="w-20 h-0.5 rounded-full bg-Secondary mt-5"></div>
    <div
      class="absolute -bottom-2.5 xs:right-0 xs:mr-7 flex items-center flex-nowrap gap-x-1 w-fit text-[8px] xs:text-xs font-Roboto bg-white text-Secondary border-SecondaryVariant border rounded-full px-3 py-1"
    >
      <p>{{ currentPage }}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="xs:h-3 xs:w-3 h-2 w-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      <p class="text-Secondary/70">
        <slot name="currentProduct" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeaderVue',
  props: {
    title1: {
      type: String,
      default: '',
    },
    title2: {
      type: String,
      default: '',
    },
    currentPage: {
      type: String,
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
