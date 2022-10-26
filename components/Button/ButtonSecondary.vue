<template>
  <button
    @click="$emit('click')"
    class="border-SecondaryVariant bg-white border hover:bg-gradient-to-tr from-Primary/70 via-Primary to-PrimaryVariant hover:border-Primary hover:text-white text-Secondary rounded-full px-4 md:py-1.5 py-1 duration-300"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonSecondaryVue',
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
