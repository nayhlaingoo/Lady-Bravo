<template>
  <div class="w-full h-full">
    <!-- searchbox -->
    <div
      v-if="searchBar"
      class="sm:w-[35rem] w-full px-2 absolute top-10 left-1/2 -translate-x-1/2 z-50"
    >
      <SearchBar
        v-model="search"
        placeHolder="Search by name..."
        class="w-full"
      />
      <div
        v-if="search"
        class="overflow-auto w-full max-h-[30rem] min-h-max bg-bgPri border-SecondaryVariant border-[1px] border-b-0 py-2"
      >
        <div
          @click="gotoProductId(data.id)"
          v-for="(data, id) in filteredSearch"
          :key="id"
          class="bg-SecondaryVariant/20 cursor-pointer my-3 mx-2 rounded flex justify-between items-center px-3 py-1 hover:bg-SecondaryVariant/40"
        >
          <div class="w-[80%]">
            <h1 class="text-Secondary font-Playfair text-lg">
              {{ data.name }}
            </h1>

            <p class="text-xs mt-1 font-Roboto text-Secondary/70">
              {{ data.caption }}
            </p>
          </div>
          <div class="w-10 h-7">
            <img
              class="w-full h-full object-cover rounded"
              :src="data.img[0]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        class="shadow-md font-Great text-Primary text-right sticky bottom-0 bg-bgPri rounded-b-md border-SecondaryVariant border-t px-3 py-2"
      >
        Lady Bravo
      </div>
    </div>
    <!-- end -->
    <!-- Header -->
    <div :class="searchBar ? 'fixed' : ''">
      <button
        v-if="searchBar"
        @click="searchBar = false"
        class="fixed inset-0 w-full h-full cursor-default bg-black/20 backdrop-blur-md z-10"
      ></button>
      <div
        class="bg-bgPri relative border-Secondary/5 border-t text-Secondary text-left md:py-24 py-16 md:pl-10 pl-5"
      >
        <p class="font-Great md:text-2xl text-xl">
          <span class="text-Primary">Best</span> Products
        </p>
        <h1
          v-if="selectedCategory === ''"
          class="font-Playfair md:text-5xl text-4xl"
        >
          Our Catalog
        </h1>
        <h1
          v-else
          v-for="(data, index) in filteredData.slice(0, 1)"
          :key="index"
          class="font-Playfair md:text-5xl text-4xl"
        >
          {{ data.title }}
        </h1>
        <div class="w-20 h-0.5 rounded-full bg-Secondary mt-5"></div>
        <button
          @click="searchBar = !searchBar"
          class="hover:shadow absolute -bottom-2.5 xs:right-0 xs:mr-7 flex items-center flex-nowrap gap-x-1 w-fit text-[8px] xs:text-xs font-Roboto bg-white text-Secondary border-SecondaryVariant border rounded-full px-3 py-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="xs:h-3 xs:w-3 h-2 w-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <p>Search by name</p>
        </button>
      </div>
      <!-- end -->
      <div
        class="text-Secondary md:flex gap-x-14 h-full w-full md:px-10 px-3 my-14"
      >
        <div
          class="font-Roboto md:text-base text-sm gap-5 flex flex-wrap md:flex-col md:sticky top-14 h-full md:pb-52"
        >
          <h1 class="text-3xl md:mb-10 mb-3 font-Playfair w-full">
            Categories
          </h1>
          <button @click="selectedCategory = ''" class="text-Primary w-fit">
            All products
          </button>

          <button
            @click="selectedCategory = 'Cadbury'"
            class="hover:text-Primary w-fit"
          >
            Cadbury
          </button>
          <button
            @click="selectedCategory = 'Ferrero Rocher'"
            class="hover:text-Primary w-fit"
          >
            Ferrero Rocher
          </button>
          <button
            @click="selectedCategory = 'KitKat'"
            class="hover:text-Primary w-fit"
          >
            KitKat
          </button>
          <button
            @click="selectedCategory = 'MNM'"
            class="hover:text-Primary w-fit"
          >
            MNM
          </button>
          <button
            @click="selectedCategory = 'Lindt'"
            class="hover:text-Primary w-fit"
          >
            Lindt
          </button>
          <button
            @click="selectedCategory = 'Mars'"
            class="hover:text-Primary w-fit"
          >
            Mars
          </button>
          <button
            @click="selectedCategory = 'Present'"
            class="hover:text-Primary w-fit"
          >
            For Gift
          </button>
        </div>
        <div class="md:my-14 my-10 self-center w-full">
          <div class="grid grid-cols-3 lg:gap-7 gap-4 lg:w-[80%] mx-auto">
            <div
              class="flex flex-col items-center justify-center md:h-[19rem] h-[14rem]"
              v-for="(data, id) in filteredData"
              :key="id"
            >
              <button
                @click="gotoProductId(data.id)"
                @mouseover="hoverImg = id"
                @mouseleave="hoverImg = null"
                class="w-full h-full flex overflow-hidden relative rounded-sm"
              >
                <img
                  :class="hoverImg === id ? 'blur-sm' : 'blur-none'"
                  class="w-full h-full object-cover duration-300"
                  :src="data.img[0]"
                  alt=""
                />
                <transition
                  enter-active-class="animate__animated animate__slideInUp animate__faster"
                  leave-active-class="animate__animated animate__slideOutDown animate__faster"
                >
                  <div
                    v-if="hoverImg === id"
                    class="text-SecondaryVariant absolute bottom-0 bg-zinc-900/60 w-full text-xs sm:text-sm text-center sm:py-2 py-1.5"
                  >
                    View Details
                  </div>
                </transition>
              </button>
              <div class="text-Secondary font-Playfair text-lg text-center">
                {{ data.name }}
              </div>
              <div class="text-Secondary/80 font-Roboto text-center">
                {{ data.price }}Ks
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col justify-center items-center mt-7">
            <span class="text-Secondary/60 mb-4">1/2</span>
            <nuxt-link to="">
              <ButtonAccent label="Next" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <Faq />
      <SocialMedia />
      <Footer />
    </div>
  </div>
</template>

<script>
import data from '/store/data.json'
import SearchBar from '~/components/Form/SearchBar.vue'
import Faq from '~/components/Faq.vue'
import Footer from '~/components/Footer.vue'
import SocialMedia from '~/components/SocialMedia.vue'
export default {
  name: 'productvue',
  layout: 'product',
  components: {
    SearchBar,
    Faq,
    SocialMedia,
    Footer,
  },

  data() {
    return {
      hoverImg: false,
      data,
      selectedCategory: '',
      search: '',
      searchBar: false,
    }
  },
  methods: {
    gotoProductId(id) {
      this.$router.push({
        name: 'product-productId',
        params: {
          productId: id,
        },
      })
    },
  },
  computed: {
    filteredData() {
      if (this.selectedCategory) {
        return this.data.filter((d) => d.title === this.selectedCategory)
      }
      return this.data
    },
    filteredSearch() {
      return this.data.filter((data) => {
        return data.category.toLowerCase().match(this.search.toLowerCase())
      })
    },
  },
  mounted() {
    console.log(this.data)
  },
}
</script>

<style></style>
