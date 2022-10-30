<template>
  <div
    class="bg-bgPri px-5 md:py-2 flex items-center border-black/5 border-b relative"
  >
    <!-- desktop -->
    <div class="hidden md:block relative w-full">
      <div class="w-full flex justify-between items-center z-50">
        <div
          class="font-Playfair text-Secondary flex justify-between items-center w-full"
        >
          <ul class="flex items-center">
            <div class="w-24 cursor-pointer text-PrimaryVariant mr-2">
              <nuxt-link to="/">
                <img
                  class="w-full h-full"
                  src="~/static/lblogo.svg"
                  alt="Image-Logo"
                />
              </nuxt-link>
            </div>
            <li
              class="cursor-pointer px-4 text-PrimaryVariant hover:text-PrimaryVariant/80 duration-150"
            >
              <nuxt-link to="/"> Home </nuxt-link>
            </li>
            <li class="px-4 hover:text-Secondary/80 duration-150">
              <nuxt-link to="/product"> Catalog </nuxt-link>
            </li>
            <li class="px-4 hover:text-Secondary/80 duration-150">
              <nuxt-link to="/about"> About </nuxt-link>
            </li>
            <li class="px-4 hover:text-Secondary/80 duration-150">
              <nuxt-link to="/contact"> Contact </nuxt-link>
            </li>
          </ul>
          <div>
            <nuxt-link to="/faq" class="text-Secondary/70 font- text-sm pr-3">
              FAQ
            </nuxt-link>
            <button @click="searchBar = !searchBar" class="cursor-pointer">
              <SearchBar
                placeHolder="Search"
                disabled
                customClass="cursor-pointer w-40 rounded-md py-1.5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div @click="bgFixed" class="block md:hidden overflow-x-hidden w-full">
      <button
        v-if="open"
        @click="open = false"
        class="fixed inset-0 w-full h-full cursor-default"
      ></button>
      <div
        class="flex items-center justify-center relative border-black/5 border-b py-2"
      >
        <div
          :class="open ? 'hidden' : 'block'"
          @click="open = false"
          class="w-36 cursor-pointer animate__animated animate__fadeIn delay-1"
        >
          <nuxt-link to="/">
            <img
              class="ml-auto w-24 h-full"
              src="~/static/lblogo.svg"
              alt="Image-Logo"
            />
          </nuxt-link>
        </div>
        <button
          @click="searchBar = !searchBar"
          :class="open ? 'block' : 'hidden'"
          class="animate__animated animate__fadeInDown animate__fast cursor-pointer w-[70%] mx-auto"
        >
          <SearchBar
            :class="searchBar ? (open = false) : ''"
            placeHolder="Search"
            disabled
            customClass="cursor-pointer rounded-md py-1 w-full"
          />
        </button>
        <div
          @click="open = !open"
          :class="
            open === false
              ? (openBestOfChoices = false) || (openTipsAndIdeas = false)
              : ''
          "
          class="p-2 cursor-pointer select-none absolute left-0"
        >
          <div class="bg-PrimaryVariant w-7 h-px"></div>
          <div
            :class="open === true ? 'my-0' : 'my-1.5'"
            class="bg-PrimaryVariant w-7 h-px duration-500"
          ></div>
          <div class="bg-PrimaryVariant w-7 h-px"></div>
        </div>
      </div>
      <div
        :class="open === true ? 'openAni' : open === false ? 'closeAni' : ''"
        class="bg-bgPri text-PrimaryVariant font-Playfair w-full"
      >
        <ul
          v-if="open"
          :class="open === true ? 'openAni' : open === false ? 'closeAni' : ''"
          class="flex flex-col items-center justify-center py-1.5 gap-y-4 text-lg w-full relative overflow-auto"
        >
          <li
            @click="open = false"
            class="animate__animated animate__fadeIn delay-2 hover:text-PrimaryVariant/80 duration-150"
          >
            <nuxt-link to="/"> Home </nuxt-link>
          </li>
          <li
            @click="open = false"
            class="animate__animated animate__fadeIn delay-3 hover:text-PrimaryVariant/80 duration-150"
          >
            <nuxt-link to="/product"> Catalog </nuxt-link>
          </li>
          <li
            @click="open = false"
            class="animate__animated animate__fadeIn delay-4 hover:text-PrimaryVariant/80 duration-150"
          >
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li
            @click="open = false"
            class="animate__animated animate__fadeIn delay-5 hover:text-PrimaryVariant/80 duration-150"
          >
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
          <li
            @click="open = false"
            class="animate__animated animate__fadeIn delay-6 hover:text-PrimaryVariant/80 duration-150"
          >
            <nuxt-link to="/faq">FAQ</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- autoCompleteSearchQuery -->
    <transition
      enter-active-class="animate__animated animate__fadeIn duration"
      leave-active-class="animate__animated animate__fadeOut duration"
    >
      <button
        v-if="searchBar"
        @click="searchBar = false"
        class="fixed inset-0 w-full h-full cursor-default bg-black/20 backdrop-blur-md z-50"
      ></button>
    </transition>
    <transition
      enter-active-class="animate__animated animate__fadeIn duration"
      leave-active-class="animate__animated animate__fadeOut duration"
    >
      <div
        v-if="searchBar"
        class="sm:w-[35rem] w-full px-2 fixed top-10 left-1/2 -translate-x-1/2 z-50"
      >
        <SearchBar
          customClass="rounded-t-md"
          v-model="search"
          placeHolder="Search by name..."
          class="w-full"
        />
        <div
          v-if="search"
          class="overflow-auto w-full max-h-[30rem] min-h-max bg-bgPri py-2"
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
          <div
            v-if="!filteredSearch.length"
            class="my-3 mx-2 text-Secondary text-lg"
          >
            No result found
          </div>
        </div>

        <div
          class="shadow-md font-Great text-Primary text-right sticky bottom-0 bg-bgPri rounded-b-md border-SecondaryVariant border-t px-3 py-2"
        >
          Lady Bravo
        </div>
      </div>
    </transition>
    <Cart
      :class="open ? 'hidden' : 'block'"
      customClass="md:ml-5 animate__animated animate__fadeIn animate__delay-1s"
    />
  </div>
</template>

<script>
import SearchBar from '~/components/Form/SearchBar.vue'
import data from '/store/data.json'
import BestOfChoices from '@/components/NavBar/BestOfChoices.vue'

export default {
  name: 'NavBarVue',
  components: {
    BestOfChoices,
    SearchBar,
  },
  data() {
    return {
      open: null,
      openBestOfChoices: false,
      data,
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
      this.searchBar = false
      this.search = ''
    },
    bgFixed() {
      const elem = document.querySelector('body')
      if (this.open) {
        elem.style.overflow = 'hidden'
      } else {
        elem.style.overflow = ''
      }
    },
  },
  computed: {
    filteredSearch() {
      return this.data.filter((data) => {
        return data.category.toLowerCase().match(this.search.toLowerCase())
      })
    },
  },
}
</script>

<style scoped>
.duration {
  --animate-duration: 0.2s;
}
.delay-1 {
  animation-delay: 0.2s;
}
.delay-2 {
  animation-delay: 0.3s;
}
.delay-3 {
  animation-delay: 0.4s;
}
.delay-4 {
  animation-delay: 0.6s;
}
.delay-5 {
  animation-delay: 0.8s;
}
.delay-6 {
  animation-delay: 1s;
}
@keyframes openAnimateHeight {
  from {
    height: 0px;
  }
  to {
    height: 16rem;
  }
}

.openAni {
  animation-fill-mode: forwards;
  animation-duration: 0.8s;
  animation-name: openAnimateHeight;
  transition: height 0.8s;
}

@keyframes closeAnimateHeight {
  from {
    height: 16rem;
  }
  to {
    height: 0px;
  }
}

.closeAni {
  animation-fill-mode: forwards;
  animation-duration: 0.7s;
  animation-name: closeAnimateHeight;
  transition: height 0.7s;
}
</style>
