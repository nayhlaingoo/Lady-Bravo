<template>
  <div
    class="border-SecondaryVariant lg:border rounded-sm lg:p-16 p-3 my-14 max-w-[700px] mx-auto"
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
        <div class="w-full my-4">
          <InputField
            placeHolder="@example.com"
            type="email"
            customClass="w-full flex flex-wrap items-center justify-center gap-3"
          >
            <ButtonPrimary
              type="submit"
              label="Subscribe"
              class="sm:w-32 w-full rounded-md"
            />
          </InputField>
        </div>
        <p class="text-[10px] text-Secondary/70 text-center">
          We care about the protection of your data. Read our
          <span class="underline text-Secondary"
            ><nuxt-link to="/faq">Privacy Policy.</nuxt-link></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from '~/components/Form/InputField.vue'
export default {
  name: 'NewsLetterVue',
  components: {
    InputField,
  },
  data() {
    return {}
  },
}
</script>

<style scoped></style>
