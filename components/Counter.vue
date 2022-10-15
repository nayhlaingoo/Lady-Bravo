<template>
  <div v-if="loaded" class="relative xl:max-w-[2000px] mx-auto">
    <div
      class="mb-7 flex flex-col justify-center items-center bg-[url('@/static/chocohero.jpg')] bg-cover bg-center bg-no-repeat w-full sm:h-96 h-screen contrast-100 brightness-50 opacity-90 mx-auto"
    ></div>
    <div
      class="text-SecondaryVariant absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center w-full"
    >
      <p class="text-center font-Playfair tracking-widest text-5xl px-5">
        Coming Soon
      </p>
      <p class="font-Roboto text-xl mt-7 mb-4">Next arrival</p>
      <div
        class="sm:flex items-center justify-center gap-3 sm:w-[30rem] w-[90%] px-2 mx-auto my-4"
      >
        <input
          class="w-full text-Secondary border-SecondaryVariant border focus:border-Secondary rounded-md outline-none p-2 sm:mb-0 mb-2"
          type="text"
          placeholder="email@example.com"
        />
        <ButtonSecondary label="Notify me" />
      </div>
      <div class="flex flex-wrap gap-10 justify-center items-center">
        <div>
          <p class="text-4xl">{{ displayDays }}</p>
          <p>Days</p>
        </div>
        <div>
          <p class="text-4xl">{{ formatNum(displayHours) }}</p>
          <p>Hours</p>
        </div>
        <div>
          <p class="text-4xl">{{ formatNum(displaymin) }}</p>
          <p>Minutes</p>
        </div>
        <div>
          <p class="text-4xl">{{ formatNum(displaysec) }}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['seconds', 'minutes', 'hours', 'days'],
  name: 'CounterVue',
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displaymin: 0,
      displaysec: 0,
      loaded: false,
    }
  },

  mounted() {
    this.countDown()
  },
  methods: {
    formatNum: (num) => (num < 10 ? '0' + num : num),
    countDown() {
      const timer = setInterval(() => {
        this.seconds -= 1
        if (this.seconds === 0) {
          this.seconds = 60
          this.minutes -= 1
          if (this.minutes === 0) {
            this.minutes = 60
            this.hours -= 1
          }
          if (this.hours === 0) {
            this.hours = 24
            this.days -= 1
          }
        }
        this.displaysec = this.seconds
        this.displaymin = this.minutes
        this.displayHours = this.hours
        this.displayDays = this.days
        this.loaded = true
      }, 1000)
    },
  },
}
</script>

<style scoped></style>
