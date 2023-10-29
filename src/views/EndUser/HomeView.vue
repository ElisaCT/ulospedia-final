<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <Navbar />
  <div class="mx-[180px]">
    <SliderUlos />
    <!-- Hero section -->
    <div class="flex flex-wrap items-center justify-center md:flex-row pt-8 pb-10 px-6">
      <div class="md:w-1/2 text-center md:text-left md:text-xl">
        <h1 class="text-5xl font-bold text-gray-900 leading-tight">
          Lebih dekat dengan <span class="text-primary_main">Ulos</span> bersama
          <span class="text-primary_main">Ulospedia</span>
        </h1>
        <p id="text-highlightUlos1" class="mt-4 text-neutral_90 text-lg md:text-xl">
          Kembangkan pengetahuanmu tentang ulos <br />
          bersama Ditenun Ulospedia
        </p>
        <div class="mt-8 md:mt-12">
          <a
            href="/galeri-ulos"
            id="btn-exploreUlos"
            class="bg-primary_main hover:bg-primary_hover text-neutral_10 font-medium py-3 px-10 rounded-lg"
            >Eksplor Ulos</a
          >
        </div>
      </div>

      <div class="md:w-1/2 mt-12 md:mt-0">
        <img src="../../assets/images/hero-1.png" alt="Hero Image" class="w-full rounded" />
      </div>
    </div>

    <!-- Two card -->
    <div class="flex justify-center gap-8 py-8 lg:flex-row sm:flex-col">
      <!-- card 1 -->
      <div class="w-1/2 sm:w-full flex-1">
        <div
          class="bg-[#D6DDF0] overflow-hidden justify-items-start text-left"
          style="box-shadow: 18px 18px 0px #000000"
        >
          <div class="px-6 py-4">
            <h4 class="font-bold text-2xl mb-2">Apa itu ulos?</h4>
            <p id="text-defenisiUlos" class="text-gray-700 text-lg">
              Ulos merupakan selendang tenun tradisional Batak yang berasal dari Sumatera Utara.
              Kain ini berperan penting dalam setiap tahap kehidupan budaya Batak, yaitu kelahiran,
              kehidupan, dan kematian.
            </p>
          </div>
          <div class="px-6 py-4 flex items-center gap-2">
            <a
              id="span-btn-jelajahiUlos"
              href="/sejarah-ulos"
              class="hover:text-primary_hover text-primary_main font-medium underline decoration-solid py-2"
              >Jelajahi Ulos</a
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
              <path
                stroke="#3355B5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M12.025 4.942 17.083 10l-5.058 5.058M2.917 10h14.025"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- card 2 -->
      <div class="w-1/2 sm:w-full flex-1">
        <div
          class="bg-[#FBEFD2] overflow-hidden justify-items-start text-left"
          style="box-shadow: 18px 18px 0px #000000"
        >
          <div class="px-6 py-4">
            <h4 class="font-bold text-2xl mb-2">Lahir, hidup, dan mati</h4>
            <p id="text-lahirHidupMati" class="text-gray-700 text-lg">
              Ulos merupakan simbol kesuburan dalam upacara kelahiran, bagian penting dari tata cara
              pelaksanaan upacara adat selama hidup, serta tanda berkabung dan penghormatan terakhir
              pada saat kematian.
            </p>
          </div>
          <div class="px-6 py-4 flex items-center gap-2">
            <a
              id="span-btn-sejarahUlos"
              href="/sejarah-ulos"
              class="hover:text-primary_hover text-primary_main font-medium underline decoration-solid py-2"
              >Telusuri Sejarah Ulos</a
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
              <path
                stroke="#3355B5"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="1.5"
                d="M12.025 4.942 17.083 10l-5.058 5.058M2.917 10h14.025"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <carousel />
  </div>
  <ragam-ulos />
  <div class="mx-[180px]">
    <!-- jenis Ulos -->
    <JenisUlos />
  </div>

  <div class="flex justify-center">
    <div class="mx-[180px]">
      <section>
        <div class="flex flex-row pb-6">
          <h2
            id="text-fakta-menarik"
            class="lg:text-4xl md:text-3xl sm:text-2xl text-center grow font-medium"
          >
            Temukan Kekayaan Warisan Ulos
          </h2>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Yb6H-XB6dDM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import RagamUlos from '../../components/EndUser/RagamUlos.vue'
import JenisUlos from '../../components/EndUser/JenisUlos.vue'
import Carousel from '../../components/EndUser/Carousel.vue'
import Navbar from '../../components/EndUser/Navbar.vue'
import Footer from '../../components/EndUser/Footer.vue'
// import SliderUlos from '../../components/EndUser/SliderUlos.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  mounted() {
    console.log(`TESTTTTTTTT`)
    axios
      .get(`http://company.ditenun.com/api/v1/ulospedia/client/ulos/19`)
      .then((response) => console.log(response.data))
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components, vue/no-reserved-component-names
    RagamUlos,
    JenisUlos,
    Carousel,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
    Navbar
    // eslint-disable-next-line vue/no-unused-components
    // SliderUlos
  }
}
</script>

<style>
iframe {
  width: 100%;
  max-width: 560px;
  height: 315px;
}
</style>
