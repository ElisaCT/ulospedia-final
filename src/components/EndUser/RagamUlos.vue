<template>
  <div class="bg-[#FDF7E9] pt-[61px] pb-[105px] mt-24 px-[180px]">
    <!-- Title -->
    <div class="font-[#0A0A0A] pb-8 text-center">
      <h1 class="lg:text-4xl md:text-3xl sm:text-2xl font-bold">Ragam Ulos</h1>
      <p class="lg:text-xl md:text-lg sm:text-base">
        Temukan berbagai keunikan ulos dari beberapa etnis Batak berikut.
      </p>
    </div>

    <!-- Button -->
    <div class="gap-6 font-[#0A0A0A] lg:text-2xl md:text-xl sm:text-base text-center">
      <!-- first col -->
      <div class="grid grid-cols-2 gap-6 pb-6">
        <a
        id="btn-ragamUlos-BatakToba"
          class="bg-[#BBC6E6] lg:col-span-1 md:col-span-2 sm:col-span-3 h-[140px] rounded-[20px] flex justify-center items-center"
          href="http://127.0.0.1:1753/galeri-ulos?pageNo=1&ethnic=Batak+Toba"
          @click="selectFilter('Batak Toba')"
          >Batak Toba</a
        >
        <a
        id="btn-ragamUlos-BatakSimalungun"
          class="bg-[#FBEFD2] lg:col-span-1 md:col-span-2 sm:col-span-3 h-[140px] rounded-[20px] flex justify-center items-center"
          href="http://127.0.0.1:1753/galeri-ulos?pageNo=1&ethnic=Batak+Simalungun"
          @click="selectFilter('Batak Simalungun')"
          >Batak Simalungun</a
        >
      </div>

      <!-- second col -->
      <div class="grid md:grid-cols-3 sm:flex-row gap-6 h-[140px]">
        <a
        id="btn-ragamUlos-BatakMandailing"
          class="bg-[#FBEFD2] rounded-[20px] flex justify-center items-center"
          href="http://127.0.0.1:1753/galeri-ulos?pageNo=1&ethnic=Batak+Mandailing"
          @click="selectFilter('Batak Mandailing')"
          >Batak Mandailing</a
        >
        <a
        id="btn-ragamUlos-BatakKaro"
          class="bg-[#BBC6E6] rounded-[20px] flex justify-center items-center"
          href="http://127.0.0.1:1753/galeri-ulos?pageNo=1&ethnic=Batak+Karo"
          @click="selectFilter('Batak Karo')"
          >Batak Karo</a
        >
        <a
        id="btn-ragamUlos-BatakAngkola"
          class="bg-[#FBEFD2] rounded-[20px] flex justify-center items-center"
          href="http://127.0.0.1:1753/galeri-ulos?pageNo=1&ethnic=Batak+Angkola"
          @click="selectFilter('Batak Angkola')"
          >Batak Angkola</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { createRouter, createWebHistory } from 'vue-router'
import GaleriUlosView from '../../views/EndUser/GaleriUlosView.vue'
const routes = [
  {
    path: '/galeri-ulos',
    name: 'galeri-ulos',
    component: GaleriUlosView,
    props: true
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default {
  methods: {
    selectFilter(ethnic) {
      this.selectedOptionEthnic = ethnic
      router.push({
        name: 'galeri-ulos',
        query: {
          pageNo: 1,
          ethnic: ethnic
        }
      })
      console.log('test')
    }
  }
}
</script>
<style></style>
