<template>
  <div>
    <PageHeader title1="About" title2="Us" currentPage="About">
      <template #subCurrentProduct1>
        <h1>Our Story</h1>
      </template>
      <template #subCurrentProduct2>
        <h1>About</h1>
      </template>
    </PageHeader>
    <div class="lg:flex items-center justify-center gap-24 my-20 px-7">
      <div
        v-for="(data, index) in filteredImg.slice(0, 1)"
        :key="index"
        class="max-w-[45rem] mx-auto block lg:hidden mb-10"
      >
        <img
          class="w-full h-full object-cover duration-300"
          :src="data.img[1]"
          alt=""
        />
      </div>
      <div
        class="lg:max-w-[32rem] max-w-[45rem] lg:mx-0 mx-auto text-Secondary"
      >
        <p class="font-Great md:text-2xl text-xl">
          <span class="text-Primary">Lady</span> Bravo
        </p>
        <h1 class="text-3xl md:text-4xl font-Playfair mb-5 leading-tight">
          A perfect online store for chocolate lover
        </h1>
        <div class="lg:w-24 w-20 h-0.5 rounded-full bg-Secondary mb-7"></div>
        <p class="font-Roboto text-Secondary/90 tracking-wide">
          {{ description1 }} <br />
          <br />
          {{ description2 }}
        </p>
        <nuxt-link to="/contact">
          <ButtonSecondary class="mt-7" label="Drop us message" />
        </nuxt-link>
      </div>
      <div
        v-for="(data, index) in filteredImg.slice(0, 1)"
        :key="index"
        class="max-w-[35rem] h-[40rem] hidden lg:block"
      >
        <img
          class="w-full h-full object-cover duration-300"
          :src="data.img[1]"
          alt=""
        />
      </div>
    </div>
    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
import data from '~/store/data.json'
export default {
  head() {
    return {
      title: 'Lady - Bravo Chocolate World About',
    }
  },
  data() {
    return {
      data,
      description1: `A successful marketing plan relies heavily on the pulling-power
of advertising copy. Writing result-oriented ad copy is difficult, as it
must appeal to, entice, and convince consumers to take action.`,
      description2: `There is no magic formula to write perfect ad copy; it is based on a number 
of factors, including ad placement, demographic, even the consumer’s mood 
when they see your ad. Businesses often become known today through 
effective marketing. The marketing may be in the form of a regular 
news item or half column society news in the Sunday newspaper.`,
    }
  },
  computed: {
    filteredImg() {
      return this.data.filter((d) => {
        return d.name === 'Raffaello'
      })
    },
  },
}
</script>

<style></style>
