<template>
  <div>
    <PageHeader title1="Privacy" title2="Policy " currentPage="FAQ">
      <template #subCurrentProduct1>
        <h1>
          Frequently Asked <br />
          Questions
        </h1>
      </template>
      <template #subCurrentProduct2>
        <h1>FAQ</h1>
      </template>
    </PageHeader>
    <div
      class="text-Secondary md:flex gap-x-10 h-full w-full md:px-10 px-4 md:my-28 my-16 max-w-[1200px] mx-auto"
    >
      <div
        class="font-Roboto md:text-base text-sm gap-5 md:sticky top-14 h-full md:mb-0 mb-10"
      >
        <h1 class="text-3xl md:mb-10 mb-8 font-Playfair w-full">
          Faq Categories
        </h1>
        <div class="md:w-60">
          <div class="flex flex-wrap md:flex-col gap-y-5">
            <button
              @click="scrollIntoShipment()"
              class="bg-Primary text-bgPri mx-1 px-3 rounded-full w-fit duration-75"
            >
              Shipment
            </button>
            <button
              @click="scrollIntoPayment()"
              class="hover:text-Secondary/80 hover:underline mx-1 px-3 rounded-full w-fit duration-75"
            >
              Payment
            </button>
            <button
              @click="scrollIntoOther()"
              class="hover:text-Secondary/80 hover:underline mx-1 px-3 rounded-full w-fit duration-75"
            >
              Other
            </button>
          </div>
          <div class="mt-16 md:block hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>

            <h1 class="text-xl my-4">
              Can’t find the answer to your question?
            </h1>
            <nuxt-link to="/contact" class="underline hover:text-Secondary/90"
              >Contact us</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-5 mx-auto">
        <div id="shipment" class="max-w-[40rem] md:px-5">
          <h1 class="text-2xl md:mb-10 mb-8 font-Playfair">Shipment</h1>
          <div
            v-for="(shipmentFaq, index) in shipmentFaq"
            :key="index"
            class="mb-7"
          >
            <h1 class="text-Secondary text-lg mb-1.5">
              {{ shipmentFaq.question }}
            </h1>
            <p class="text-Secondary/80">{{ shipmentFaq.answer }}</p>
          </div>
        </div>
        <div id="payment" class="max-w-[40rem] md:px-5">
          <h1 class="text-2xl md:mb-10 mb-8 font-Playfair">Payment</h1>
          <div
            v-for="(paymentFaq, index) in paymentFaq"
            :key="index"
            class="mb-7"
          >
            <h1 class="text-Secondary text-lg mb-1.5">
              {{ paymentFaq.question }}
            </h1>
            <p class="text-Secondary/80">{{ paymentFaq.answer }}</p>
          </div>
        </div>
        <div id="other" class="max-w-[40rem] md:px-5">
          <h1 class="text-2xl md:mb-10 mb-8 font-Playfair">Other</h1>
          <div v-for="(otherFaq, index) in otherFaq" :key="index" class="mb-7">
            <h1 class="text-Secondary text-lg mb-1.5">
              {{ otherFaq.question }}
            </h1>
            <p class="text-Secondary/80">{{ otherFaq.answer }}</p>
          </div>
        </div>
      </div>
      <div class="mt-2 block md:hidden">
        <h1 class="text-xl mb-2">Can’t find the answer to your question?</h1>
        <nuxt-link to="/contact" class="underline hover:text-Secondary/90"
          >Contact us</nuxt-link
        >
      </div>
    </div>
    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'FAQVue',
  data() {
    return {
      shipmentFaq: [
        {
          question: 'When will my order ship?',
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
      ],
      paymentFaq: [
        {
          question: 'How much is shipping?',
          answer: `I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.`,
        },
        {
          question: 'Is this site secure?',
          answer: `I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page.`,
        },
      ],
      otherFaq: [
        {
          question: 'What is your privacy policy?',
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
      ],
    }
  },
  head() {
    return {
      title: 'Lady - Bravo Chocolate World FAQ',
    }
  },
  methods: {
    scrollIntoOther() {
      const elem = document.getElementById('other')
      elem.scrollIntoView({ behavior: 'smooth', block: 'end' })
    },
    scrollIntoPayment() {
      const elem = document.getElementById('payment')
      elem.scrollIntoView({ behavior: 'smooth', block: 'end' })
    },
    scrollIntoShipment() {
      const elem = document.getElementById('shipment')
      elem.scrollIntoView({ behavior: 'smooth', block: 'end' })
    },
  },
}
</script>

<style scoped></style>
