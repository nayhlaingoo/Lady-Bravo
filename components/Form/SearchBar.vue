<template>
  <div>
    <h1 class="text-Secondary font-Roboto">
      {{ label }}
    </h1>
    <label class="relative block w-auto">
      <span class="absolute inset-y-0 right-0 flex items-center pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-Secondary/50"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      <input
        :value="value"
        @input="(e) => $emit('input', e.target.value)"
        class="placeholder:text-slate-400 block rounded-t-md border-SecondaryVariant border-[1px] bg-white w-full py-2 p-3 shadow-sm focus:outline-none sm:text-sm"
        :placeholder="placeHolder"
        type="text"
        name="search"
      />
    </label>
    <p class="text-lg text-Secondary"></p>
  </div>
</template>

<script>
export default {
  name: 'SearchBarVue',
  data() {
    return {}
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    placeHolder: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
