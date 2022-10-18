<template>
  <div class="absolute left-0 md:z-50 md:pt-5">
    <div
      class="md:py-4 md:px-7 px-5 md:w-full md:h-auto h-[50vh] md:border-SecondaryVariant/40 md:border-[1px] md:bg-white md:rounded md:shadow-xl"
    >
      <div
        class="mb-5 w-fit flex items-center justify-between border-Secondary border-b"
      >
        <h1 class="text-xl text-Secondary">Chocolate Brand</h1>
      </div>
      <div class="md:pb-0 pb-2">
        <ul class="md:grid lg:grid-cols-3 grid-cols-2 lg:gap-x-16 items-center">
          <li
            @click="$emit('close')"
            v-for="(data, index) in filteredDataRocher.slice(0, 1)"
            :key="index"
            class="cursor-pointer hover:bg-SecondaryVariant/20 mb-2 p-2 rounded-md flex items-center gap-3 font-Roboto text-Secondary w-full md:w-72 py-1.5"
          >
            <div class="w-20 h-16 hidden md:block">
              <img
                class="w-full h-full object-cover rounded-md shadow-md"
                :src="data.img[0]"
                alt=""
              />
            </div>
            <div>
              <h1 class="text-lg mb-2 font-Playfair">
                {{ data.category }}
              </h1>
              <p class="text-sm text-Secondary/80">{{ data.detail.country }}</p>
            </div>
          </li>
          <li
            @click="$emit('close')"
            v-for="(data, index) in filteredDataRaffaello.slice(0, 1)"
            :key="index"
            class="cursor-pointer hover:bg-SecondaryVariant/20 mb-2 p-2 rounded-md flex items-center gap-3 font-Roboto text-Secondary w-full md:w-72 py-1.5"
          >
            <div class="w-20 h-16 hidden md:block">
              <img
                class="w-full h-full object-cover rounded-md shadow-md"
                :src="data.img[0]"
                alt=""
              />
            </div>
            <div>
              <h1 class="text-lg mb-2 font-Playfair">
                {{ data.category }}
              </h1>
              <p class="text-sm text-Secondary/80">{{ data.detail.country }}</p>
            </div>
          </li>
          <li
            @click="$emit('close')"
            v-for="(data, index) in filteredDataCadbury.slice(0, 1)"
            :key="index"
            class="cursor-pointer hover:bg-SecondaryVariant/20 mb-2 p-2 rounded-md flex items-center gap-3 font-Roboto text-Secondary w-full md:w-72 py-1.5"
          >
            <div class="w-20 h-16 hidden md:block">
              <img
                class="w-full h-full object-cover rounded-md shadow-md"
                :src="data.img[0]"
                alt=""
              />
            </div>
            <div>
              <h1 class="text-lg mb-2 font-Playfair">
                {{ data.category }}
              </h1>
              <p class="text-sm text-Secondary/80">{{ data.detail.country }}</p>
            </div>
          </li>
          <li
            @click="$emit('close')"
            v-for="(data, index) in filteredDataKitKat.slice(0, 1)"
            :key="index"
            class="cursor-pointer hover:bg-SecondaryVariant/20 mb-2 p-2 rounded-md flex items-center gap-3 font-Roboto text-Secondary w-full md:w-72 py-1.5"
          >
            <div class="w-20 h-16 hidden md:block">
              <img
                class="w-full h-full object-cover rounded-md shadow-md"
                :src="data.img[0]"
                alt=""
              />
            </div>
            <div>
              <h1 class="text-lg mb-2 font-Playfair">
                {{ data.category }}
              </h1>
              <p class="text-sm text-Secondary/80">{{ data.detail.country }}</p>
            </div>
          </li>
          <li
            @click="$emit('close')"
            v-for="(data, index) in filteredDataMNM.slice(0, 1)"
            :key="index"
            class="cursor-pointer hover:bg-SecondaryVariant/20 mb-2 p-2 rounded-md flex items-center gap-3 font-Roboto text-Secondary w-full md:w-72 py-1.5"
          >
            <div class="w-20 h-16 hidden md:block">
              <img
                class="w-full h-full object-cover rounded-md shadow-md"
                :src="data.img[0]"
                alt=""
              />
            </div>
            <div>
              <h1 class="text-lg mb-2 font-Playfair">
                {{ data.category }}
              </h1>
              <p class="text-sm text-Secondary/80">{{ data.detail.country }}</p>
            </div>
          </li>
          <li
            @click="$emit('close')"
            v-for="(data, index) in filteredDataLindt.slice(0, 1)"
            :key="index"
            class="cursor-pointer hover:bg-SecondaryVariant/20 mb-2 p-2 rounded-md flex items-center gap-3 font-Roboto text-Secondary w-full md:w-72 py-1.5"
          >
            <div class="w-20 h-16 hidden md:block">
              <img
                class="w-full h-full object-cover rounded-md shadow-md"
                :src="data.img[0]"
                alt=""
              />
            </div>
            <div>
              <h1 class="text-lg mb-2 font-Playfair">
                {{ data.category }}
              </h1>
              <p class="text-sm text-Secondary/80">{{ data.detail.country }}</p>
            </div>
          </li>
          <li
            @click="$emit('close')"
            v-for="(data, index) in filteredDataMars.slice(0, 1)"
            :key="index"
            class="cursor-pointer hover:bg-SecondaryVariant/20 mb-2 p-2 rounded-md flex items-center gap-3 font-Roboto text-Secondary w-full md:w-72 py-1.5"
          >
            <div class="w-20 h-16 hidden md:block">
              <img
                class="w-full h-full object-cover rounded-md shadow-md"
                :src="data.img[0]"
                alt=""
              />
            </div>
            <div>
              <h1 class="text-lg mb-2 font-Playfair">
                {{ data.category }}
              </h1>
              <p class="text-sm text-Secondary/80">{{ data.detail.country }}</p>
            </div>
          </li>
          <li
            @click="$emit('close')"
            v-for="(data, index) in filteredDataPresent.slice(0, 2)"
            :key="index"
            class="cursor-pointer hover:bg-SecondaryVariant/20 mb-2 p-2 rounded-md flex items-center gap-3 font-Roboto text-Secondary w-full md:w-72 py-1.5"
          >
            <div class="w-20 h-16 hidden md:block">
              <img
                class="w-full h-full object-cover rounded-md shadow-md"
                :src="data.img[0]"
                alt=""
              />
            </div>
            <div>
              <h1 class="text-lg mb-2 font-Playfair">
                {{ data.name }}
              </h1>
              <p class="text-sm text-Secondary/80">{{ data.detail.country }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/store/data.json'
export default {
  name: 'BestOfChoicesVue',
  components: {
    data,
  },

  data() {
    return {
      data,
      test2: {
        name: 'rocher',
      },
    }
  },
  computed: {
    filteredDataRocher() {
      if (this.data) {
        return this.data.filter((d) => d.category === 'Ferrero Rocher')
      }
      return this.data
    },
    filteredDataRaffaello() {
      if (this.data) {
        return this.data.filter((d) => d.category === 'Ferrero Raffaello')
      }
      return this.data
    },
    filteredDataCadbury() {
      if (this.data) {
        return this.data.filter((d) => d.category === 'Cadbury')
      }
      return this.data
    },
    filteredDataKitKat() {
      if (this.data) {
        return this.data.filter((d) => d.category === 'KitKat')
      }
      return this.data
    },
    filteredDataMNM() {
      if (this.data) {
        return this.data.filter((d) => d.category === 'MNM')
      }
      return this.data
    },
    filteredDataLindt() {
      if (this.data) {
        return this.data.filter((d) => d.category === 'Lindt')
      }
      return this.data
    },
    filteredDataMars() {
      if (this.data) {
        return this.data.filter((d) => d.category === 'Mars')
      }
      return this.data
    },
    filteredDataPresent() {
      if (this.data) {
        return this.data.filter((d) => d.category === 'Present')
      }
      return this.data
    },
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
