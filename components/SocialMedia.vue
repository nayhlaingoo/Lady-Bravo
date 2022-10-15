<template>
  <div class="my-14">
    <div class="text-center mb-7 px-2">
      <p class="font-Great text-2xl -mb-1.5">
        <span class="text-Primary">Follow</span> me
      </p>
      <h1 class="font-Playfair text-4xl text-Secondary">For more bites</h1>
      <div class="w-20 h-0.5 rounded-full bg-Secondary mx-auto mt-5"></div>
    </div>
    <div
      class="xs:flex justify-center mx-auto md:gap-5 gap-2 lg:max-w-[800px] sm:w-[80%] w-[90%] md:h-72 h-full"
    >
      <div
        @mouseover="cursor1 = true"
        @mouseleave="cursor1 = false"
        class="relative xs:w-1/2 md:h-full h-36"
      >
        <img
          class="w-full h-full object-cover rounded-sm cursor-pointer duration-200"
          src="https://c1.wallpaperflare.com/preview/665/133/316/candy-bar-sweetness-chocolate-mars.jpg"
          alt="Image"
          :class="cursor1 ? 'brightness-50' : ''"
        />
        <div
          v-if="cursor1"
          class="w-full px-1 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer duration-200 text-center"
        >
        <!-- bg-gradient-to-tl to-violet-600 via-orange-400 from-rose-600 -->
          <svg
            class="w-8 h-8 rounded-full p-1.5 mx-auto bg-SecondaryVariant"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
          <p
            class="text-SecondaryVariant mt-3 md:text-2xl text-sm font-Playfair"
          >
            #bravo chocolate world
          </p>
          <p class="text-SecondaryVariant mt-1 md:text-xl text-sm font-Great">
            @lady bravo
          </p>
        </div>
      </div>

      <div
        @mouseover="cursor2 = true"
        @mouseleave="cursor2 = false"
        class="relative xs:w-1/2 md:h-full h-36 xs:my-0 my-5"
      >
        <img
          class="w-full h-full object-cover rounded-sm cursor-pointer duration-200"
          src="https://c1.wallpaperflare.com/preview/665/133/316/candy-bar-sweetness-chocolate-mars.jpg"
          alt="Image"
          :class="cursor2 ? 'brightness-50' : ''"
        />
        <div
          v-if="cursor2"
          class="w-full px-1 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer duration-200 text-center"
        >
        <!-- bg-gradient-to-b to-blue-700 from-blue-400 -->
          <svg
            class="w-8 h-8 rounded-full p-1.5 mx-auto bg-SecondaryVariant"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
          <p
            class="text-SecondaryVariant mt-3 md:text-2xl text-sm font-Playfair"
          >
            #bravo chocolate world
          </p>
          <p class="text-SecondaryVariant mt-1 md:text-xl text-sm font-Great">
            @lady bravo
          </p>
        </div>
      </div>

      <div
        @mouseover="cursor3 = true"
        @mouseleave="cursor3 = false"
        class="relative xs:w-1/2 md:h-full h-36"
      >
        <img
          class="w-full h-full object-cover rounded-sm cursor-pointer duration-200"
          src="https://c1.wallpaperflare.com/preview/665/133/316/candy-bar-sweetness-chocolate-mars.jpg"
          alt="Image"
          :class="cursor3 ? 'brightness-50' : ''"
        />
        <div
          v-if="cursor3"
          class="w-full px-1 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer duration-200 text-center"
        >
          <svg
            class="w-8 h-8 rounded-full p-1.5 mx-auto bg-SecondaryVariant"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
            />
          </svg>
          <p
            class="text-SecondaryVariant mt-3 md:text-2xl text-sm font-Playfair"
          >
            #bravo chocolate world
          </p>
          <p class="text-SecondaryVariant mt-1 md:text-xl text-sm font-Great">
            @lady bravo
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMediaVue',
  data() {
    return {
      cursor1: false,
      cursor2: false,
      cursor3: false,
    }
  },
}
</script>

<style></style>
