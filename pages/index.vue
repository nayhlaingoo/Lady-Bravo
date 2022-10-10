<template>
  <div>
    <Hero />
    <Category />
    <Counter :seconds="60" :minutes="60" :hours="24" :days="30" />
    <BestSeller title="Best Seller">
      <nuxt-link to="Product">
        <ButtonAccent label="All Product" />
      </nuxt-link>
    </BestSeller>
    <VdayDiscount />
    <Newsletter />
    <PaymentLogo />
    <Faq />
    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
import Carousel from '~/components/Carousel.vue'
export default {
  name: 'IndexPageVue',
  head() {
    return {
      title: 'Lady Bravo',
    }
  },
  components: {Carousel},
}
</script>
