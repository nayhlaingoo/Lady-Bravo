<template>
  <button
    @click="$emit('click')"
    class="bg-Primary hover:bg-amber-800 text-white rounded xs:w-36 w-full xs:mt-0 mt-3 py-2 duration-150"
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
