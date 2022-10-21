<template>
  <footer class="bg-bgPri mt-14">
    <div class="px-10 py-5">
      <div class="lg:flex flex-row justify-between items-start">
        <div class="my-5">
          <div class="w-24">
            <img class="w-full h-full" src="~/static/lblogo.svg" alt="logo" />
          </div>
          <p class="text-Secondary font-Playfair text-xs">
            @bravo chocolate world
          </p>
        </div>
        <div
          class="flex flex-row lg:justify-around justify-between items-start flex-wrap mb-10 lg:w-4/5"
        >
          <div
            class="text-Secondary/70 font-Roboto text-sm flex flex-col mx-3 md:mx-0 mt-5 w-auto"
          >
            <h1 class="text-Secondary font-Playfair text-lg mb-3">Shop</h1>
            <nuxt-link class="hover:text-Secondary/50 duration-100" to=""
              >Shop by Catalog</nuxt-link
            >
            <nuxt-link class="hover:text-Secondary/50 duration-100 my-3" to=""
              >Present</nuxt-link
            >
            <nuxt-link class="hover:text-Secondary/50 duration-100" to=""
              >Ferrero Rocher</nuxt-link
            >
            <nuxt-link class="hover:text-Secondary/50 duration-100 mt-3" to=""
              >Cadbury</nuxt-link
            >
          </div>
          <div
            class="text-Secondary/70 font-Roboto text-sm flex flex-col mx-3 md:mx-0 mt-5 w-auto"
          >
            <h1 class="text-Secondary font-Playfair text-lg mb-3">Page</h1>
            <nuxt-link class="hover:text-Secondary/50 duration-100" to="/"
              >Home</nuxt-link
            >
            <nuxt-link class="hover:text-Secondary/50 duration-100 my-3" to="/product"
              >Our Categories</nuxt-link
            >
            <nuxt-link class="hover:text-Secondary/50 duration-100" to="/about"
              >About us</nuxt-link
            >
          </div>
          <div
            class="text-Secondary/70 font-Roboto text-sm flex flex-col mx-3 md:mx-0 mt-5 w-auto"
          >
            <h1 class="text-Secondary font-Playfair text-lg mb-3">Support</h1>
            <nuxt-link class="hover:text-Secondary/50 duration-100" to=""
              >Give Feedback</nuxt-link
            >
            <nuxt-link class="hover:text-Secondary/50 duration-100 my-3" to="/contact"
              >Contact Us</nuxt-link
            >
          </div>
          <div
            class="text-Secondary/70 font-Roboto text-sm flex flex-col mx-3 md:mx-0 mt-5 w-auto"
          >
            <h1 class="text-Secondary font-Playfair text-lg mb-3">Social</h1>
            <nuxt-link class="hover:text-Secondary/50 duration-100" to=""
              >Facebook</nuxt-link
            >
            <nuxt-link class="hover:text-Secondary/50 duration-100 my-3" to=""
              >Instagram</nuxt-link
            >
            <nuxt-link class="hover:text-Secondary/50 duration-100" to=""
              >Pinterst</nuxt-link
            >
          </div>
        </div>
      </div>

      <div
        class="border-slate-400/20 border-t pt-5 my-5 font-accent md:flex flex-row flex-wrap justify-between items-center"
      >
        <p class="text-secondary text-xs">Copyright © 2022 LadyBravo Ltd.</p>
        <div class="w-1/2 sm:w-1/3 md:w-1/4">
          <div class="flex md:justify-end items-center gap-2 md:gap-10 w-full md:pr-10 mt-5 md:mt-0">
            <nuxt-link
              class="bg-SecondaryVariant/50 hover:bg-SecondaryVariant/90 duration-200 w-7 h-7 p-1.5 rounded-full shadow-md flex justify-center items-center"
              to=""
            >
              <svg
                class="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
            </nuxt-link>
            <nuxt-link
              class="bg-SecondaryVariant/50 hover:bg-SecondaryVariant/90 duration-200 w-7 h-7 p-1.5 rounded-full shadow-md flex justify-center items-center"
              to=""
            >
              <svg
                class="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </nuxt-link>
            <nuxt-link
              class="bg-SecondaryVariant/50 hover:bg-SecondaryVariant/90 duration-200 w-7 h-7 p-1.5 rounded-full shadow-md flex justify-center items-center"
              to=""
            >
              <svg
                class="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterVue',
}
</script>

<style scoped></style>
