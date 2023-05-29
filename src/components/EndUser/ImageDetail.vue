<template>
    <div>
      <div class="main-slider swiper-container" :class="{ loading: mainSliderLoading }">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="slide in mainSliderSlides" :key="slide.id">
            <div class="slide-bgimg" :style="{ backgroundImage: 'url(' + slide.bgImageUrl + ')' }"></div>
            <div class="content">
              <h1 class="title">{{ slide.title }}</h1>
              <p class="caption">{{ slide.caption }}</p>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
  
      <div class="nav-slider swiper-container" :class="{ loading: navSliderLoading }">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="slide in navSliderSlides" :key="slide.id">
            <div class="slide-bgimg" :style="{ backgroundImage: 'url(' + slide.bgImageUrl + ')' }"></div>
            <div class="content">
              <h1 class="title">{{ slide.title }}</h1>
              <p class="caption">{{ slide.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Swiper from 'swiper';
  
  export default {
    name: 'App',
    setup() {
      const mainSliderSlides = ref([]);
      const navSliderSlides = ref([]);
      const mainSliderLoading = ref(true);
      const navSliderLoading = ref(true);
  
      onMounted(() => {
        // Main Slider
        const mainSlider = new Swiper('.main-slider', {
          loop: true,
          speed: 1000,
          parallax: true,
          autoplay: {
            delay: 3000,
          },
          loopAdditionalSlides: 10,
          grabCursor: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            init() {
              this.autoplay.stop();
            },
            imagesReady() {
              mainSliderLoading.value = false;
              this.el.classList.remove('loading');
              this.autoplay.start();
            },
          },
        });
  
        // Navigation Slider
        const navSlider = new Swiper('.nav-slider', {
          loop: true,
          loopAdditionalSlides: 10,
          speed: 1000,
          spaceBetween: 5,
          slidesPerView: 5,
          centeredSlides: true,
          touchRatio: 0.2,
          slideToClickedSlide: true,
          direction: 'vertical',
          on: {
            imagesReady() {
              navSliderLoading.value = false;
              this.el.classList.remove('loading');
            },
            click() {
              mainSlider.autoplay.stop();
            },
          },
        });
  
        // Matching sliders
        mainSlider.controller.control = navSlider;
        navSlider.controller.control = mainSlider;
  
        // Fetch slide data (replace with your own data source)
        fetchSlideData().then((data) => {
          mainSliderSlides.value = data;
          navSliderSlides.value = data;
        });
      });
  
      // Mock function to fetch slide data
      function fetchSlideData() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                id: 1,
                bgImageUrl: 'path/to/image1.jpg',
                title: 'Slide 1',
                caption: 'Slide 1 Caption',
              },
              {
                id: 2,
                bgImageUrl: 'path/to/image2.jpg',
                title: 'Slide 2',
                caption: 'Slide 2 Caption',
              },
              // Add more slides as needed
            ]);
          }, 1000);
        });
      }
  
      return {
        mainSliderSlides,
        navSliderSlides,
        mainSliderLoading,
        navSliderLoading,
      };
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  