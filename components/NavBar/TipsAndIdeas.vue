<template>
  <div class="absolute md:z-50 md:pt-5">
    <div
      class="md:bg-white/70 md:backdrop-blur-md md:rounded-sm md:shadow-xl md:min-w-max sm:flex items-start lg:gap-24 gap-14 md:py-4 px-7"
    >
      <div>
        <div
          class="border-PrimaryVariant border-b w-fit mb-3 flex items-center"
        >
          <h1 class="text-lg">Chocolate</h1>
          <div class="ml-1 w-3 h-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <ul>
          <li @click="$emit('close')" class="cursor-pointer w-fit py-1.5">
            <nuxt-link to="product">All Products</nuxt-link>
          </li>
          <li @click="$emit('close')" class="cursor-pointer w-fit py-1.5">
            <a href="#">Made In Belgium</a>
          </li>
          <li @click="$emit('close')" class="cursor-pointer w-fit py-1.5">
            <a href="#">Made In Switzerland</a>
          </li>
        </ul>
        <ul>
          <li @click="$emit('close')" class="cursor-pointer w-fit py-1.5">
            <a href="#">Made In Germany</a>
          </li>
          <li @click="$emit('close')" class="cursor-pointer w-fit py-1.5">
            <a href="#">Made In Turkey</a>
          </li>
          <li @click="$emit('close')" class="cursor-pointer w-fit py-1.5">
            <a href="#">Made In Italy</a>
          </li>
        </ul>
      </div>

      <div class="flex items-center sm:justify-center gap-16 sm:mt-0 mt-3">
        <div class="text-PrimaryVariant">
          <div
            class="border-PrimaryVariant border-b w-fit mb-3 flex items-center"
          >
            <h1 class="text-lg">Present</h1>
            <div class="ml-1 w-3 h-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <ul>
            <li
              :class="
                bDdayImg || chirstmasImg === true
                  ? (vDayImg = false)
                  : (vDayImg = true)
              "
              class="cursor-pointer w-fit py-1.5 flex items-center"
            >
              <a @click="$emit('close')" href="#">For Valentine Day</a>
            </li>
            <li
              @mouseover="bDdayImg = true"
              @mouseleave="bDdayImg = false"
              class="cursor-pointer w-fit py-1.5 flex items-center"
            >
              <a @click="$emit('close')" href="#">For Birthday</a>
            </li>
            <li
              @mouseover="chirstmasImg = true"
              @mouseleave="chirstmasImg = false"
              class="cursor-pointer w-fit py-1.5 flex items-center"
            >
              <a @click="$emit('close')" href="#">For Christmas</a>
            </li>
          </ul>
        </div>
        <div v-if="vDayImg" class="w-32 h-20">
          <img
            class="hidden md:block w-full h-full object-cover shadow-sm rounded-sm"
            src="@/static/vdaychoco.jpg"
            alt="Image"
          />
        </div>
        <div v-if="bDdayImg" class="w-32 h-20">
          <img
            class="hidden md:block w-full h-full object-cover shadow-sm rounded-sm"
            src="@/static/bdaychoco.jpg"
            alt="Image"
          />
        </div>
        <div v-if="chirstmasImg" class="w-32 h-20">
          <img
            class="hidden md:block w-full h-full object-cover shadow-sm rounded-sm"
            src="@/static/christmas.jpg"
            alt="Image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TipsAndIdeasVue',
  components: {},

  data() {
    return {
      vDayImg: true,
      bDdayImg: false,
      chirstmasImg: false,
    }
  },
}
</script>

<style scoped>
a::after {
  content: '';
  display: block;
  margin: auto;
  height: 0.5px;
  width: 0;
  top: 5px;
  background: transparent;
  transition: all 0.3s;
}

a:hover::after,
a.active::after {
  width: 100%;
  background: #78350f;
}
</style>
