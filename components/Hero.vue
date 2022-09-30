<template>
  <div class="border-black/5 border-b pb-7">
    <div
      class="px-5 flex items-center w-full h-screen bg-[url('@/static/chocohero.jpg')] bg-fixed bg-no-repeat bg-cover"
    >
      <div class="flex flex-col justify-center items-start md:px-5 py-5">
        <h1 class="font-Playfair text-7xl text-Primary mb-5">Lady Bravo</h1>
        <p class="font-Roboto text-SecondaryVariant mb-5 sm:w-[30rem]">
          {{ description }}
        </p>
        <nuxt-link to="product">
          <ButtonPrimary class="w-32" label="Shop Now" />
        </nuxt-link>
      </div>
    </div>

    <div
      class="md:flex items-center justify-center grid grid-cols-2 lg:gap-10 gap-2 my-5 px-3 lg:px-10"
    >
      <div
        class="flex flex-col items-start justify-center bg-bgPri shadow-sm p-3 xl:w-64 h-full"
      >
        <div class="sm:flex items-center pb-3 text-Primary font-Playfair">
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
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <h1 class="sm:ml-2 text-lg">100% Quality</h1>
        </div>
        <div class="text-xs text-Secondary/80 font-Roboto">
          <p>
            We sell original brand chocolates. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div
        class="flex flex-col items-start justify-center bg-bgPri shadow-sm p-3 xl:w-64 h-full"
      >
        <div class="sm:flex items-center pb-3 text-Primary font-Playfair">
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
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          <h1 class="sm:ml-2 text-lg">Retail</h1>
        </div>
        <div class="text-xs text-Secondary/80 font-Roboto">
          <p>
            We sell original brand chocolates. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div
        class="flex flex-col items-start justify-center bg-bgPri shadow-sm p-3 xl:w-64 h-full"
      >
        <div class="sm:flex items-center pb-3 text-Primary font-Playfair">
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <h1 class="sm:ml-2 text-lg">Secure Payment</h1>
        </div>
        <div class="text-xs text-Secondary/80 font-Roboto">
          <p>
            We sell original brand chocolates. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div
        class="flex flex-col items-start justify-center bg-bgPri shadow-sm p-3 xl:w-64 h-full"
      >
        <div class="sm:flex items-center pb-3 text-Primary font-Playfair">
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
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
          <h1 class="sm:ml-2 text-lg">Free Return</h1>
        </div>
        <div class="text-xs text-Secondary/80 font-Roboto">
          <p>
            We sell original brand chocolates. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroVue',
  data() {
    return {
      description: `I'm a paragraph. Click here to add your own text and edit me. 
      It’s easy. Just click “Edit Text” or double click me to add your own 
      content and make changes to the font. Feel free to drag and drop me anywhere 
      you like on your page.`,
    }
  },
}
</script>

<style></style>
