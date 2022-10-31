<template>
  <div>
    <Hero />
    <Category />
    <div
      class="text-Secondary font-Roboto text-center max-w-[2000px] bg-gradient-to-tr from-bgPri to-bgPri px-2 py-10 my-7 mx-auto"
    >
      <p class="text-center font-Playfair tracking-widest text-5xl px-5 mb-7">
        Coming Soon
      </p>
      <p class="text-xl mb-2">“Next arrival”</p>
      <pre class="mb-3 font-Roboto">{{ description }}</pre>
      <ButtonSecondary @click="scrollIntoNewsLetter()" label="notify me" />
    </div>
    <BestSeller title="Best Seller">
      <nuxt-link to="Product">
        <ButtonSecondary label="All Product" />
      </nuxt-link>
    </BestSeller>
    <VdayDiscount />
    <Newsletter id="newsLetter" />
    <PaymentLogo />
    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
import Accordin from '~/components/Accordion.vue'
import Carousel from '~/components/Carousel.vue'
export default {
  name: 'IndexPageVue',
  data() {
    return {
      description: `Get notified when next products arrived? 
Drop your email for our newsletter to stay up to date.`,
    }
  },
  head() {
    return {
      title: 'Lady - Bravo Chocolate World',
    }
  },
  components: { Carousel, Accordin },
  methods: {
    scrollIntoNewsLetter() {
      const elem = document.getElementById('newsLetter')
      elem.scrollIntoView({ behavior: 'smooth', block: 'center' })
    },
  },
}
</script>
