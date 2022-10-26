<template>
  <div class="w-full my-10">
    <h1 class="px-5 text-center font-Playfair text-Primary text-6xl">
      Shop by Category
    </h1>

    <div class="hidden md:block">
      <div
        class="flex justify-center items-stretch gap-5 p-3 w-full h-[80vh] mx-auto overflow-hidden mt-10"
      >
        <div class="w-[35%] h-full self-stretch relative">
          <nuxt-link to="/product?category=">
            <img
              @mouseover="imgBtnHover1 = true"
              @mouseleave="imgBtnHover1 = false"
              class="w-full h-full object-cover cursor-pointer"
              src="https://drive.google.com/uc?export=view&id=1_A3wsQKkBUQTzOccYffOKOOCIm2TliH5"
              alt=""
            />
            <button
              @mouseover="imgBtnHover1 = true"
              :class="imgBtnHover1 === true ? 'bg-bgPri text-black' : ''"
              class="border-bgPri border text-SecondaryVariant rounded-full w-32 p-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300"
            >
              shop now
            </button>
          </nuxt-link>

          <div
            class="absolute -left-8 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 flex items-center"
          >
            <h1 class="font-Great text-Primary leading-10 text-2xl mr-4">
              Yummy to last bite
            </h1>
            <div
              class="bg-Primary/10 text-PrimaryVariant w-9 h-9 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col justify-center items-stretch gap-5 max-w-[50%] h-full overflow-hidden"
        >
          <div class="h-1/2 relative">
            <nuxt-link to="/product?category=Present">
              <img
                @mouseover="imgBtnHover2 = true"
                @mouseleave="imgBtnHover2 = false"
                class="w-full h-full object-cover cursor-pointer"
                src="https://drive.google.com/uc?export=view&id=1Y3Wv9UvLK2V8aW8zH55RPsE0sjFC14gb"
                alt=""
              />
              <button
                @mouseover="imgBtnHover2 = true"
                :class="imgBtnHover2 === true ? 'bg-bgPri text-black' : ''"
                class="border-bgPri border text-SecondaryVariant rounded-full w-32 p-3 absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 duration-300"
              >
                For Gift
              </button>
            </nuxt-link>
          </div>

          <div class="flex justify-center items-stretch gap-5 w-full h-1/2">
            <div class="w-1/2 relative">
              <nuxt-link to="/product?category=Cadbury">
                <img
                  @mouseover="imgBtnHover3 = true"
                  @mouseleave="imgBtnHover3 = false"
                  class="w-full h-full object-cover cursor-pointer"
                  src="https://drive.google.com/uc?export=view&id=1b93GUr2X_U0BS1Mbt2v43CUAIJzaBiN-"
                  alt=""
                />
                <button
                  @mouseover="imgBtnHover3 = true"
                  :class="imgBtnHover3 === true ? 'bg-bgPri text-black' : ''"
                  class="border-bgPri border text-SecondaryVariant rounded-full w-32 p-3 absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 duration-300"
                >
                  Cadbury
                </button>
              </nuxt-link>
            </div>
            <div class="w-1/2 relative">
              <nuxt-link to="/product?category=Ferrero%20Rocher">
                <img
                  @mouseover="imgBtnHover4 = true"
                  @mouseleave="imgBtnHover4 = false"
                  class="w-full h-full object-cover cursor-pointer"
                  src="https://drive.google.com/uc?export=view&id=1xN7v6nsy63I68iQAAJTkDW4BoCSEx8wi"
                  alt=""
                />
                <button
                  @mouseover="imgBtnHover4 = true"
                  :class="imgBtnHover4 === true ? 'bg-bgPri text-black' : ''"
                  class="border-bgPri border text-SecondaryVariant rounded-full w-32 p-3 absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 duration-300"
                >
                  Rocher
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="block md:hidden">
      <div class="overflow-auto scrollbar-hide mt-10 rounded-sm ml-4">
        <div class="min-w-max h-[55vh] flex gap-5">
          <div class="w-[300px] h-full relative">
            <nuxt-link to="/product?category=">
              <img
                @mouseover="imgBtnHover1 = true"
                @mouseleave="imgBtnHover1 = false"
                class="w-full h-full object-cover cursor-pointer"
                src="https://drive.google.com/uc?export=view&id=1_A3wsQKkBUQTzOccYffOKOOCIm2TliH5"
                alt=""
              />
              <button
                @mouseover="imgBtnHover1 = true"
                :class="imgBtnHover1 === true ? 'bg-bgPri text-black' : ''"
                class="border-bgPri border text-SecondaryVariant rounded-full w-32 p-3 absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 duration-300"
              >
                shop now
              </button>
            </nuxt-link>
          </div>

          <div class="w-[300px] h-full relative">
            <nuxt-link to="/product?category=Present">
              <img
                @mouseover="imgBtnHover2 = true"
                @mouseleave="imgBtnHover2 = false"
                class="w-full h-full object-cover cursor-pointer"
                src="https://drive.google.com/uc?export=view&id=1Y3Wv9UvLK2V8aW8zH55RPsE0sjFC14gb"
                alt=""
              />
              <button
                @mouseover="imgBtnHover2 = true"
                :class="imgBtnHover2 === true ? 'bg-bgPri text-black' : ''"
                class="border-bgPri border text-SecondaryVariant rounded-full w-32 p-3 absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 duration-300"
              >
                For Gift
              </button>
            </nuxt-link>
          </div>

          <div class="w-[300px] h-full relative">
            <nuxt-link to="/product?category=Cadbury">
              <img
                @mouseover="imgBtnHover3 = true"
                @mouseleave="imgBtnHover3 = false"
                class="w-full h-full object-cover cursor-pointer"
                src="https://drive.google.com/uc?export=view&id=1b93GUr2X_U0BS1Mbt2v43CUAIJzaBiN-"
                alt=""
              />
              <button
                @mouseover="imgBtnHover3 = true"
                :class="imgBtnHover3 === true ? 'bg-bgPri text-black' : ''"
                class="border-bgPri border text-SecondaryVariant rounded-full w-32 p-3 absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 duration-300"
              >
                Cadbury
              </button>
            </nuxt-link>
          </div>

          <div class="w-[300px] h-full relative">
            <nuxt-link to="/product?category=Ferrero%20Rocher">
              <img
                @mouseover="imgBtnHover4 = true"
                @mouseleave="imgBtnHover4 = false"
                class="w-full h-full object-cover cursor-pointer"
                src="https://drive.google.com/uc?export=view&id=1xN7v6nsy63I68iQAAJTkDW4BoCSEx8wi"
                alt=""
              />
              <button
                @mouseover="imgBtnHover4 = true"
                :class="imgBtnHover4 === true ? 'bg-bgPri text-black' : ''"
                class="border-bgPri border text-SecondaryVariant rounded-full w-32 p-3 absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 duration-300"
              >
                Rocher
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryVue',
  data() {
    return {
      imgBtnHover1: 'false',
      imgBtnHover2: 'false',
      imgBtnHover3: 'false',
      imgBtnHover4: 'false',
    }
  },
}
</script>

<style></style>
