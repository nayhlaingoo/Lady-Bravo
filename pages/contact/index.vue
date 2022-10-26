<template>
  <div class="font-Roboto">
    <PageHeader title1="Contact" title2="Us" currentPage="Contact">
      <template #currentProduct>
        <h1>Get in Touch</h1>
      </template>
    </PageHeader>
    <div class="md:flex xl:gap-16 md:gap-10 items-center justify-center lg:px-20 px-4 my-14 xl:max-w-[2000px] mx-auto">
      <div
        class="bg-white font-Roboto border-SecondaryVariant border pb-16 p-10 rounded-md md:w-1/2"
      >
        <div class="text-Secondary text-center mb-7">
          <h1 class="mb-4 font-Playfair text-3xl">Contact Us</h1>
          <p>
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>
        <InputField
          :email="true"
          :message="true"
          placeHolder="Name"
          type="text"
          class="w-full"
        >
          <ButtonPrimary
            type="submit"
            class="w-40 rounded-md mt-5"
            label="Submit"
          />
        </InputField>
      </div>
      <div class="md:w-1/2">
        <div class="text-center rounded p-7 text-Secondary max-w-[35rem] mx-auto">
          <div
            class="bg-bgPri flex justify-center items-center p-3 rounded-md w-fit mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h1 class="text-xl font-Playfair my-2">Email us:</h1>
          <p>
            Email us for general queries, including marketing and partnership
            opportunities.
          </p>
          <a href="">ladybravo@gmail.com</a>
        </div>
        <div class="text-center rounded p-7 text-Secondary max-w-[35rem] mx-auto">
          <div
            class="bg-bgPri flex justify-center items-center p-3 rounded-md w-fit mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <h1 class="text-xl my-2 font-Playfair">Call us:</h1>
          <p>
            Call us to speak to a member of our team. We are always happy to
            help.
          </p>
          <p>+1 (646) 786-5060</p>
        </div>
      </div>
    </div>

    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
import InputField from '~/components/Form/InputField.vue'
export default {
  name: 'ContactVue',
  components: {
    InputField,
  },
  head() {
    return {
      title: 'Contact',
    }
  },
}
</script>

<style></style>
