<template>
  <button
    @click="$emit('click')"
    class="border-Secondary border hover:bg-Primary hover:border-Primary hover:text-white text-Secondary rounded-full px-4 md:py-1.5 py-1 duration-300"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonAccentVue',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  emits: ['click'],
}
</script>

<style scoped></style>
