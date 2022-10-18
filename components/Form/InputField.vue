<template>
  <form @submit.prevent="$emit('click')">
    <div class="relative z-0 w-full font-Roboto group">
      <input
        :value="value"
        @input="(e) => $emit('input', e.target.value)"
        v-bind="$attrs"
        id="floating_outlined"
        required=""
        class="block w-full text-Secondary border-SecondaryVariant border-[1px] text-sm rounded-md p-2 bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-Secondary peer"
        placeholder=" "
      />
      <label
        for="label"
        class="bg-white text-Secondary/80 text-sm duration-300 absolute transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-Secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >{{ placeHolder }}</label
      >
    </div>
    <slot />
  </form>
</template>

<script>
export default {
  name: 'FormVue',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    placeHolder: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
}
</script>

<style></style>
