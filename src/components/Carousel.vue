<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="carousel ">
        <!-- title -->
        <div class="flex flex-row pb-6">
            <h2 class="text-4xl text-left grow font-medium">Temukan Fakta Menarik Ulos</h2>
            <!-- button -->
            <div class="flex flex-row gap-6">

                <!-- prev -->
                <button @click="prevSlide" class="flex items-center justify-center w-10 h-10 rounded-full bg-[#EDEDED] hover:bg-gray-300 focus:outline-none rotate-180">
                <svg class="w-4 h-4 text-black" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"></path>
                </svg>
                </button>

                <!-- Next -->
                <button @click="nextSlide" class="flex items-center justify-center w-10 h-10 rounded-full bg-[#3355B5] hover:bg-gray-300 focus:outline-none">
                <svg class="w-4 h-4 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"></path>
                </svg>
                </button>
            </div>
        </div>

      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" :key="index" :class="['carousel-item', { active: index === currentSlide }]">
          <img :src="slide.image" :alt="slide.alt">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0,
        slides: [
          {
            // eslint-disable-next-line no-undef
            image:  require('../src/assets/images/slider/1.png'),
            alt: 'Slide 1',
          },
          {
            // eslint-disable-next-line no-undef
            image:  require('../assets/images/slider/2.png'),
            alt: 'Slide 2',
          },
          {
            // eslint-disable-next-line no-undef
            image:  require('../assets/images/slider/3.png'),
            alt: 'Slide 3',
          },
        ],
      };
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      },
    },
  };
  </script>
  
  <style>
  .carousel {
    position: relative;
    height: 400px;
    margin: 90px 0;
  }
  
  .carousel-inner {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
  }
  
  .carousel-item.active {
    opacity: 1;
  }
  
  .carousel-item img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
  </style>
  