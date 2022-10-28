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
      <button
        @click="scrollIntoNewsLetter()"
        class="text-white bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 hover:shadow-md duration-150 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        notify me
      </button>
    </div>
    <BestSeller title="Best Seller">
      <nuxt-link to="Product">
        <ButtonSecondary label="All Product" />
      </nuxt-link>
    </BestSeller>
    <VdayDiscount />
    <Newsletter id="newsLetter" />
    <PaymentLogo />
    <div class="max-w-[2000px] mx-auto mb-20">
      <div class="sm:px-7 px-4">
        <div class="text-Secondary text-center mb-7">
          <p class="font-Great">
            <span class="text-Primary tracking-wide text-lg">Payment</span> &
            Service
          </p>
          <h1 class="text-4xl font-Playfair">Frequently Asked Question</h1>
          <div class="w-20 h-0.5 rounded-full bg-Secondary mx-auto mt-5"></div>
        </div>
        <div
          class="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-[1200px] mx-auto"
        >
          <div
            v-for="(faq, index) in faq"
            :key="index"
            class="max-w-[40rem] md:px-5"
          >
            <h1 class="text-Secondary text-lg mb-1.5">{{ faq.question }}</h1>
            <p class="text-Secondary/80">{{ faq.answer }}</p>
          </div>
        </div>
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
          question: 'How much is shipping?',
          answer: `I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.`,
        },
        {
          question: 'What is your return policy?',
          answer: `I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.`,
        },
        {
          question: 'How can i order?',
          answer: `I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.`,
        },
        {
          question: 'When will my order ship?',
          answer: `I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.`,
        },
      ],
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
