<template>
  <div class="absolute md:z-50 md:pt-5">
    <div
      class="md:py-4 md:px-7 px-5 md:min-w-max md:h-auto h-[50vh] md:bg-white/70 md:backdrop-blur-md md:rounded-sm md:shadow-xl"
    >
      <div class="mb-3 w-full flex items-center justify-between">
        <h1 class="text-lg border-PrimaryVariant border-b">Chocolate Brand</h1>
      </div>
      <div class="flex md:gap-16 items-center">
        <ul>
          <li
            :class="
              kitkatImg || cadburyImg || marsImg || mnmImg || lindtImg === true
                ? (rocherImg = false)
                : (rocherImg = true)
            "
            class="cursor-pointer w-fit py-1.5"
          >
            <a @click="$emit('close')" href="#">Ferrero Rocher</a>
          </li>
          <li
            @mouseover="kitkatImg = true"
            @mouseleave="kitkatImg = false"
            class="cursor-pointer w-fit py-1.5"
          >
            <a @click="$emit('close')" href="#">KitKat</a>
          </li>
          <li
            @mouseover="cadburyImg = true"
            @mouseleave="cadburyImg = false"
            class="cursor-pointer w-fit py-1.5"
          >
            <a @click="$emit('close')" href="#">Cadbury</a>
          </li>
          <li class="block md:hidden w-fit py-1.5"><a href="#">Mars</a></li>
          <li class="block md:hidden w-fit py-1.5">
            <a @click="$emit('close')" href="#">MNM Chocolate</a>
          </li>
          <li class="block md:hidden w-fit py-1.5">
            <a @click="$emit('close')" href="#">Lindt</a>
          </li>
        </ul>
        <ul class="md:block hidden">
          <li
            @mouseover="marsImg = true"
            @mouseleave="marsImg = false"
            class="cursor-pointer w-fit py-1.5"
          >
            <nuxt-link to="">
              <a @click="$emit('close')" href="#">Mars</a>
            </nuxt-link>
          </li>
          <li
            @mouseover="mnmImg = true"
            @mouseleave="mnmImg = false"
            class="cursor-pointer w-fit py-1.5"
          >
            <a @click="$emit('close')" href="#">MNM Chocolate</a>
          </li>
          <li
            @mouseover="lindtImg = true"
            @mouseleave="lindtImg = false"
            class="cursor-pointer w-fit py-1.5"
          >
            <a @click="$emit('close')" href="#">Lindt</a>
          </li>
        </ul>

        <div class="w-32 h-20 hidden md:block">
          <img
            v-if="rocherImg"
            class="w-full h-full object-cover shadow-sm rounded-sm"
            src="~/static/rocherimg.jpg"
            alt=""
          />
          <img
            v-if="kitkatImg"
            class="w-full h-full object-cover shadow-sm rounded-sm"
            src="~/static/kitkatimg.jpg"
            alt=""
          />
          <img
            v-if="cadburyImg"
            class="w-full h-full object-cover shadow-sm rounded-sm"
            src="~/static/cadburyimg.jpg"
            alt=""
          />
          <img
            v-if="marsImg"
            class="w-full h-full object-cover shadow-sm rounded-sm"
            src="~/static/marsimg.jpg"
            alt=""
          />
          <img
            v-if="mnmImg"
            class="w-full h-full object-cover shadow-sm rounded-sm"
            src="~/static/mnmimg.jpg"
            alt=""
          />
          <img
            v-if="lindtImg"
            class="w-full h-full object-cover shadow-sm rounded-sm"
            src="~/static/lindtimg.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BestOfChoicesVue',

  data() {
    return {
      rocherImg: true,
      kitkatImg: false,
      cadburyImg: false,
      marsImg: false,
      mnmImg: false,
      lindtImg: false,
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
