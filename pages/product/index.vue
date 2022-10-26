<template>
  <div class="w-full h-full">
    <PageHeader title1="Best" title2="Product" currentPage="Product">
      <template #currentProduct>
        <h1 v-if="!selectedCategory">Our Catalog</h1>
        <h1
          v-else
          v-for="(data, index) in filteredData.slice(0, 1)"
          :key="index"
        >
          {{ data.title }}
        </h1>
      </template>
    </PageHeader>
    <div
      class="text-Secondary md:flex gap-x-14 h-full w-full md:px-10 px-3 my-14"
    >
      <div
        class="font-Roboto md:text-base text-sm gap-5 md:sticky top-14 h-full md:pb-52"
      >
        <h1 class="text-3xl mb-10 font-Playfair w-full">Categories</h1>
        <div class="flex flex-wrap md:flex-col gap-y-5">
          <button
            :class="selectedCategory ? '' : 'bg-Primary text-bgPri shadow-sm'"
            @click="selectedCategory = ''"
            class="hover:bg-Primary hover:text-bgPri mx-1 px-3 rounded-full w-fit duration-75"
          >
            All products
          </button>

          <button
            :class="
              selectedCategory === 'Cadbury'
                ? 'bg-Primary text-bgPri shadow-sm'
                : ''
            "
            @click="selectedCategory = 'Cadbury'"
            class="hover:bg-Primary hover:text-bgPri mx-1 px-3 rounded-full w-fit duration-75"
          >
            Cadbury
          </button>
          <button
            :class="
              selectedCategory === 'Ferrero Rocher'
                ? 'bg-Primary text-bgPri shadow-sm'
                : ''
            "
            @click="selectedCategory = 'Ferrero Rocher'"
            class="hover:bg-Primary hover:text-bgPri mx-1 px-3 rounded-full w-fit duration-75"
          >
            Ferrero Rocher
          </button>
          <button
            :class="
              selectedCategory === 'KitKat'
                ? 'bg-Primary text-bgPri shadow-sm'
                : ''
            "
            @click="selectedCategory = 'KitKat'"
            class="hover:bg-Primary hover:text-bgPri mx-1 px-3 rounded-full w-fit duration-75"
          >
            KitKat
          </button>
          <button
            :class="
              selectedCategory === 'MNM'
                ? 'bg-Primary text-bgPri shadow-sm'
                : ''
            "
            @click="selectedCategory = 'MNM'"
            class="hover:bg-Primary hover:text-bgPri mx-1 px-3 rounded-full w-fit duration-75"
          >
            MNM
          </button>
          <button
            :class="
              selectedCategory === 'Lindt'
                ? 'bg-Primary text-bgPri shadow-sm'
                : ''
            "
            @click="selectedCategory = 'Lindt'"
            class="hover:bg-Primary hover:text-bgPri mx-1 px-3 rounded-full w-fit duration-75"
          >
            Lindt
          </button>
          <button
            :class="
              selectedCategory === 'Mars'
                ? 'bg-Primary text-bgPri shadow-sm'
                : ''
            "
            @click="selectedCategory = 'Mars'"
            class="hover:bg-Primary hover:text-bgPri mx-1 px-3 rounded-full w-fit duration-75"
          >
            Mars
          </button>
          <button
            :class="
              selectedCategory === 'Present'
                ? 'bg-Primary text-bgPri shadow-sm'
                : ''
            "
            @click="selectedCategory = 'Present'"
            class="hover:bg-Primary hover:text-bgPri mx-1 px-3 rounded-full w-fit duration-75"
          >
            For Gift
          </button>
        </div>
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
            <ButtonSecondary label="Next" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
import data from '/store/data.json'
import SearchBar from '~/components/Form/SearchBar.vue'
import Footer from '~/components/Footer.vue'
import SocialMedia from '~/components/SocialMedia.vue'
export default {
  name: 'productvue',
  layout: 'product',
  components: {
    SearchBar,
    SocialMedia,
    Footer,
  },
  head() {
    return {
      title: 'Categories',
    }
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
  watch: {
    selectedCategory: {
      handler() {
        this.$router
          .replace({
            query: {
              category: this.selectedCategory,
            },
          })
          .catch(() => {})
      },
    },
  },
  created() {
    this.selectedCategory = this.$route.query.category
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

<style scoped>
.duration {
  --animate-duration: 0.2s;
}
</style>
