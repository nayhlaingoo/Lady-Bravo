<template>
  <button :class="customClass"
    @click="$emit('click')"
    class="px-3 py-1.5 transition-all duration-500 bg-Size-200 bg-Pos-0 hover:bg-Pos-100 bg-gradient-to-tl to-PrimaryVariant via-amber-600 from-Primary text-white font-Roboto rounded-sm"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonPrimaryVue',
  props: {
    label: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
}
</script>

<style scoped></style>
