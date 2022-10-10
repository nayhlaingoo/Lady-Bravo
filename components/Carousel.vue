<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide relative"
    data-bs-ride="carousel"
  >
    <!-- <div
      class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
    >
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div> -->
    <div
      class="carousel-inner relative w-full h-[30vh] md:w-[35rem] md:h-[70vh] overflow-hidden"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-item relative float-left w-full h-full"
        :class="{ active: index === 0 }"
      >
        <img :src="image" class="block w-full h-full object-cover" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev bg-Secondary/50 w-9 sm:w-16 h-9 sm:h-16 rounded-full absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center sm:p-0 p-2 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next bg-Secondary/50 w-9 sm:w-16 h-9 sm:h-16 rounded-full absolute top-1/2 -translate-y-1/2 right-0 flex items-center justify-center sm:p-0 p-2 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CarouselVue',
  props: {
    images: {
      type: Array,
    },
  },
}
</script>

<style></style>
