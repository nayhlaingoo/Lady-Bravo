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
    <div
      class="lg:flex justify-center items-center gap-20 xl:w-[1024px] w-full px-4 mx-auto text-Secondary font-Playfair"
    >
      <div class="self-start lg:max-w-[400px] lg:mb-0 mb-10">
        <p class="font-Great text-xl">
          <span class="text-Primary">Payment</span> & Service
        </p>
        <h1 class="text-4xl tracking-wide">Frequently Asked Questions</h1>
        <p class="font-Roboto sm:text-base text-sm mt-6 text-Secondary/70">
          Read about our delivery services, return policy and payment method.
        </p>
      </div>
      <div class="lg:w-[550px]">
        <Accordin
          class="w-full"
          v-for="(faq, i) in faq"
          :key="i"
          :title="faq.que"
          :description="faq.ans"
        />
      </div>
    </div>
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
      faq: [
        {
          que: 'How to order?',
          ans: `I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.`,
        },
        {
          que: 'What is your return policy?',
          ans: `I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.`,
        },
        {
          que: 'How much is shipping?',
          ans: `I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.`,
        },
        {
          que: 'When will my order ship?',
          ans: `I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.`,
        },
      ],
    }
  },
  head() {
    return {
      title: 'Lady Bravo',
    }
  },
  components: { Carousel, Accordin },
}
</script>
