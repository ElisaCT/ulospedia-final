<template>
  <div class="container">
    <div
      v-for="(slide, index) in data"
      :key="index"
      class="mySlides"
      v-show="index + 1 === slideIndex"
    >
      <div class="numbertext">{{ index + 1 }} / {{ data.length }}</div>
      <img class="flex justify-center" :src="slide.url" style="width: 100%; height: 400px" />
    </div>

    <a id="btn=prev" class="prev" @click="plusSlides(-1)">❮</a>
    <a id="btn-next" class="next" @click="plusSlides(1)">❯</a>

    <!-- <div class="caption-container">
      <p id="caption">{{ getCurrentSlide().caption }}</p>
    </div> -->

    <div class="row overflow-x-auto whitespace-nowrap">
      <div
        v-for="(slide, index) in data"
        :key="index"
        class="inline-block mr-4"
        style="width: 200px"
      >
        <img
          class="demo cursor"
          :src="slide.url"
          style="width: 200px; height: 100px"
          @click="currentSlide(index + 1)"
          :alt="slide.imagePart"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1
      // slides: [
      //   {
      //     image: 'https://www.w3schools.com/w3css/img_mountains_wide.jpg',
      //     caption: 'The Woods'
      //   },
      //   {
      //     image: 'https://www.w3schools.com/w3css/img_snow_wide.jpg',
      //     caption: 'Cinque Terre'
      //   },
      //   {
      //     image: 'https://www.w3schools.com/w3css/img_nature_wide.jpg',
      //     caption: 'Mountains and fjords'
      //   },
      //   {
      //     image: 'https://www.w3schools.com/howto/img_woods_wide.jpg',
      //     caption: 'Northern Lights'
      //   },
      //   {
      //     image: 'https://www.w3schools.com/howto/img_5terre_wide.jpg',
      //     caption: 'Nature and sunrise'
      //   },
      //   {
      //     image: 'https://www.quanzhanketang.com/w3css/img_fjords_wide.jpg',
      //     caption: 'Snowy Mountains'
      //   }
      // ]
    }
  },
  props: {
    data: Array
  },
  // mounted() {
  //   this.showSlides(this.slideIndex)
  //   console.log('TESTST')

  //   axios
  //     .get(`http://company.ditenun.com/api/v1/ulospedia/client/ulos/19`)
  //     .then((response) => console.log(response.data))
  // },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n))
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n))
    },
    showSlides(n) {
      const slides = document.getElementsByClassName('mySlides')
      const dots = document.getElementsByClassName('demo')
      const captionText = document.getElementById('caption')

      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
      }

      slides[this.slideIndex - 1].style.display = 'block'
      dots[this.slideIndex - 1].className += ' active'
      captionText.innerHTML = dots[this.slideIndex - 1].alt
    },
    getCurrentSlide() {
      return this.slides[this.slideIndex - 1]
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}

.mySlides {
  display: none;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.caption-container {
  text-align: center;
  background-color: #222;
  padding: 2px 16px;
  color: white;
}

.row:after {
  content: '';
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 16.66%;
}

.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}
</style>
