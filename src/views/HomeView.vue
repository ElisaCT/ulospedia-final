<template>
  <div class="mx-[180px]">
    <!-- Hero section -->
    <div class="flex flex-wrap items-center justify-center md:flex-row py-16 px-6">
      <div class="md:w-1/2 text-center md:text-left md:text-xl">
        <h1 class="text-5xl font-bold text-gray-900 leading-tight">
          Lebih dekat dengan <span class="text-blue-600">Ulos</span> bersama
          <span class="text-blue-600">Ulospedia</span>
        </h1>
        <p class="mt-4 text-gray-600 text-lg md:text-xl">
          Kembangkan pengetahuanmu tentang ulos <br />
          bersama Ditenun Ulospedia
        </p>
        <div class="mt-8 md:mt-12">
          <a
            href="#"
            class="bg-primary_main hover:bg-primary_hover text-neutral_10 font-md py-4 px-6 rounded-[8px]"
            >Eksplor Ulos</a
          >
        </div>
      </div>

      <div class="md:w-1/2 mt-12 md:mt-0">
        <img src="../assets/images/hero-1.png" alt="Hero Image" class="w-full rounded" />
      </div>
    </div>

    <!-- Two card -->
    <div class="flex justify-center gap-8">
      <!-- card 1 -->
      <div class="w-1/2 sm:w-full flex-1">
        <div
          class="bg-[#D6DDF0] overflow-hidden justify-items-start text-left"
          style="box-shadow: 18px 18px 0px #000000"
        >
          <div class="px-6 py-4">
            <h4 class="font-bold text-2xl mb-2">Apa itu ulos?</h4>
            <p class="text-gray-700 text-lg">
              Ulos merupakan selendang tenun tradisional Batak yang berasal dari Sumatera Utara.
              Kain ini berperan penting dalam setiap tahap kehidupan budaya Batak, yaitu kelahiran,
              kehidupan, dan kematian.
            </p>
          </div>
          <div class="px-6 py-4 flex items-center">
            <a
              href="#"
              class="hover:text-blue-700 text-blue-600 font-medium underline decoration-solid py-2 px-4 rounded mr-2"
              >Jelajahi Ulos</a
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 text-blue-600 rotate-90"
            >
              <path
                fill-rule="evenodd"
                d="M6.707 10.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L13 7.414V15a1 1 0 01-2 0V7.414l-3.293 3.293a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- card 2 -->
      <div class="w-1/2 flex-1">
        <div
          class="bg-[#FBEFD2] overflow-hidden justify-items-start text-left"
          style="box-shadow: 18px 18px 0px #000000"
        >
          <div class="px-6 py-4">
            <h4 class="font-bold text-2xl mb-2">Lahir, hidup, dan mati</h4>
            <p class="text-gray-700 text-lg">
              Ulos merupakan simbol kesuburan dalam upacara kelahiran, bagian penting dari tata cara
              pelaksanaan upacara adat selama hidup, serta tanda berkabung dan penghormatan terakhir
              pada saat kematian.
            </p>
          </div>
          <div class="px-6 py-4 flex items-center">
            <a
              href="#"
              class="hover:text-blue-700 text-blue-600 font-medium underline decoration-solid py-2 px-4 rounded mr-2"
              >Telusuri Sejarah Ulos</a
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 text-blue-600 rotate-90"
            >
              <path
                fill-rule="evenodd"
                d="M6.707 10.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L13 7.414V15a1 1 0 01-2 0V7.414l-3.293 3.293a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
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
</template>

<script>
// @ is an alias to /src
import RagamUlos from '../components/RagamUlos.vue'
import JenisUlos from '../components/JenisUlos.vue'
import Footer from '../components/Footer.vue'
import Carousel from '../components/Carousel.vue'

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components, vue/no-reserved-component-names
    Footer,
    RagamUlos,
    JenisUlos,
    Carousel
  }
}
</script>
