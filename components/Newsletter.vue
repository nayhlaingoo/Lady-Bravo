<template>
  <div
    class="border-SecondaryVariant lg:border rounded-sm lg:p-16 p-3 my-14 md:w-[700px] mx-auto"
  >
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="font-Great md:text-xl text-Secondary mb-5">
        <p>Get your <span class="text-Primary">10% off!</span></p>
      </div>
      <div
        class="text-Secondary font-Playfair xs:text-2xl text-xl text-center mb-3"
      >
        <h1>Want product news and updates?</h1>
        <p class="xs:text-sm text-xs font-Roboto">
          sign up for our newsletter to stay up to date.
        </p>
      </div>
      <div class="flex flex-col items-center">
        <div class="xs:flex items-center justify-center gap-3 w-full my-4">
          <input
            class="w-full p-2 border-SecondaryVariant border focus:border-Secondary/70 rounded-md outline-none"
            type="text"
            placeholder="email@example.com"
          />
          <ButtonSecondary label="Subscribe" />
        </div>
        <p class="text-[10px] text-Secondary/70 text-center">
          We care about the protection of your data. Read our
          <span class="underline text-Secondary"
            ><nuxt-link to="">Privacy Policy.</nuxt-link></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsLetterVue',
  data() {
    return {}
  },
}
</script>

<style scoped></style>
