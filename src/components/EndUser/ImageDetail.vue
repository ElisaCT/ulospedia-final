<template>
    <div>image</div>

  </template>
  
  <script>
 
  
  export default {
    // name: 'App',
    // setup() {
    //   const mainSliderSlides = ref([]);
    //   const navSliderSlides = ref([]);
    //   const mainSliderLoading = ref(true);
    //   const navSliderLoading = ref(true);
  
    //   onMounted(() => {
    //     // Main Slider
    //     const mainSlider = new Swiper('.main-slider', {
    //       loop: true,
    //       speed: 1000,
    //       parallax: true,
    //       autoplay: {
    //         delay: 3000,
    //       },
    //       loopAdditionalSlides: 10,
    //       grabCursor: true,
    //       navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //       },
    //       on: {
    //         init() {
    //           this.autoplay.stop();
    //         },
    //         imagesReady() {
    //           mainSliderLoading.value = false;
    //           this.el.classList.remove('loading');
    //           this.autoplay.start();
    //         },
    //       },
    //     });
  
    //     // Navigation Slider
    //     const navSlider = new Swiper('.nav-slider', {
    //       loop: true,
    //       loopAdditionalSlides: 10,
    //       speed: 1000,
    //       spaceBetween: 5,
    //       slidesPerView: 5,
    //       centeredSlides: true,
    //       touchRatio: 0.2,
    //       slideToClickedSlide: true,
    //       direction: 'vertical',
    //       on: {
    //         imagesReady() {
    //           navSliderLoading.value = false;
    //           this.el.classList.remove('loading');
    //         },
    //         click() {
    //           mainSlider.autoplay.stop();
    //         },
    //       },
    //     });
  
    //     // Matching sliders
    //     mainSlider.controller.control = navSlider;
    //     navSlider.controller.control = mainSlider;
  
    //     // Fetch slide data (replace with your own data source)
    //     fetchSlideData().then((data) => {
    //       mainSliderSlides.value = data;
    //       navSliderSlides.value = data;
    //     });
    //   });
  
    //   // Mock function to fetch slide data
    //   function fetchSlideData() {
    //     return new Promise((resolve) => {
    //       setTimeout(() => {
    //         resolve([
    //           {
    //             id: 1,
    //             bgImageUrl: 'path/to/image1.jpg',
    //             title: 'Slide 1',
    //             caption: 'Slide 1 Caption',
    //           },
    //           {
    //             id: 2,
    //             bgImageUrl: 'path/to/image2.jpg',
    //             title: 'Slide 2',
    //             caption: 'Slide 2 Caption',
    //           },
    //           // Add more slides as needed
    //         ]);
    //       }, 1000);
    //     });
    //   }
  
    //   return {
    //     mainSliderSlides,
    //     navSliderSlides,
    //     mainSliderLoading,
    //     navSliderLoading,
    //   };
    // },

    
  };
  </script>
  
  <style scoped>
  #app {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 0 auto;
  max-width: 900px;
  padding: 30px;
}

.main {
  margin-bottom: 30px;
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}
.thumbnails .agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: #888;
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 450px;
  justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
  width: 100%;
}
  </style>
  