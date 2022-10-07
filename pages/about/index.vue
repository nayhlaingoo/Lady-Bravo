<template>
  <div class="text-center h-screen">
    <h1 class="text-Primary font-Playfair text-3xl my-14">This is About Us page!</h1>
    <nuxt-content class="text-center" :document="doc" />
  </div>
</template>

<script>
export default {
  name: "AboutUsVue",
  head() {
    return {
      title: 'About Us'
    }
  },
  components: {},
  async asyncData({ $content, params }) {
    const doc = await $content(params.about || 'index').fetch()
    return {
      doc,
    }
  },
}
</script>

<style></style>
