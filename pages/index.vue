<template>
  <div>
    <Hero />
    <Category />
    <Counter :seconds="60" :minutes="60" :hours="24" :days="30" />
    <BestSeller title="Best Seller" />
    <VdayDiscount />
    <Newsletter />
    <PaymentLogo />
    <Faq />
    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPageVue',
  head() {
    return {
      title: 'Lady Bravo',
    }
  },
  components: {},
}
</script>
