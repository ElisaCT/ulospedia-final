<template lang="">
  <Sidebar />
  <div class="ml-80 pt-10 gap-6 mr-8">
    <div v-if="ulosDetails">
      <div class="flex flex-col items-center gap-12 px-32 mb-12">
        <div class="flex gap-6 items-center">
          <div class="flex flex-col items-center gap-2">
            <h3 id="nama-ulos" class="font-semibold text-lg">{{ ulosDetails.name }}</h3>
            <div class="flex flex-row gap-2">
              <span
                class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
              >
                <span id="suku-ulos" class="text-sm font-normal text-gray-800 text-primary_main">{{
                  ulosDetails.ethnic
                }}</span>
              </span>
              <span
                class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
              >
                <span
                  id="lokasi-ulos"
                  class="text-sm font-normal text-gray-800 text-primary_main"
                  >{{ ulosDetails.location }}</span
                >
              </span>
              <span
                class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
              >
                <span
                  id="teknik-tenun-ulos"
                  class="text-sm font-normal text-gray-800 text-primary_main"
                  >{{ ulosDetails.technique }}</span
                >
              </span>
              <span
                class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
              >
                <span id="ukuran-ulos" class="text-sm font-normal text-gray-800 text-primary_main"
                  >{{ ulosDetails.length }}cm x {{ ulosDetails.width }}cm</span
                >
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- image -->
      <SliderUlos :data="ulosDetails.ulosRelatedImageResponseList" />

      <div class="grid grid-cols-12 gap-6 px-8 mt-12">
        <!-- makna dan fungsi -->
        <div class="flex flex-col gap-8 col-span-7">
          <div class="flex flex-col gap-3">
            <div class="flex flex-row gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M25.667 19.53V5.448c0-1.4-1.144-2.438-2.532-2.321h-.07c-2.45.21-6.172 1.458-8.248 2.765l-.199.128c-.338.21-.898.21-1.236 0l-.292-.175c-2.076-1.295-5.787-2.532-8.236-2.73-1.389-.117-2.52.933-2.52 2.322V19.53c0 1.12.91 2.17 2.03 2.31l.338.047c2.532.338 6.44 1.621 8.68 2.846l.046.024c.315.175.817.175 1.12 0 2.24-1.237 6.16-2.532 8.704-2.87l.385-.047c1.12-.14 2.03-1.19 2.03-2.31ZM14 6.405v17.5M9.041 9.905H6.416M9.916 13.405h-3.5"
                />
              </svg>
              <h4 class="font-medium text-base text-neutral_100">Makna Ulos</h4>
            </div>
            <p id="makna-ulos" class="font-normal text-sm text-neutral_90 text-left">
              {{ ulosDetails.meaning }}
            </p>
          </div>

          <hr class="solid border-neutral_40" />

          <div class="flex flex-col gap-3">
            <div class="flex flex-row gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.083 23.917a2.471 2.471 0 0 0 3.5 0L22.75 8.75a2.471 2.471 0 0 0 0-3.5 2.471 2.471 0 0 0-3.5 0L4.083 20.417a2.472 2.472 0 0 0 0 3.5Z"
                />
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m21.012 10.488-3.5-3.5"
                />
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9.916 2.847 1.75-.514-.513 1.75.513 1.75-1.75-.513-1.75.513.514-1.75-.514-1.75 1.75.514ZM5.25 9.847 7 9.333l-.513 1.75.513 1.75-1.75-.513-1.75.513.513-1.75-.513-1.75 1.75.514ZM22.75 15.68l1.75-.513-.513 1.75.513 1.75-1.75-.514-1.75.514.513-1.75-.513-1.75 1.75.513Z"
                />
              </svg>
              <h4 class="font-medium text-base text-neutral_100">Fungsi Ulos</h4>
            </div>
            <p id="fungsi-ulos" class="font-normal text-sm text-neutral_90 text-left">
              {{ ulosDetails.func }}
            </p>
          </div>
        </div>

        <!-- e-commerce -->
        <div
          id="card-ketersediaan-ulos"
          v-if="ulosDetails.availabilityOfProduct"
          class="flex flex-col gap-4 bg-neutral_10 px-4 py-4 rounded-lg col-span-5 e-commerce shadow-lg"
        >
          <p class="font-normal text-lg text-neutral_100">Tersedia di e-commerce DiTenun</p>

          
            <div v-for="product in ulosDetails.productDetailResponseList" :key="product.id">
              <div class="grid grid-cols-6 gap-4">
                <img id="gambar-produk-ulos" :src="product.imageUrl" alt="" class="rounded-md col-span-3 w-[200px] h-[180px]" />
                <div class=" gap-6 pt-12 col-span-3">
                  <div class="gap-4 mb-6">
                    <p id="nama-produk-ulos" class="font-medium text-lg">{{ product.name }}</p>
                    <h5 id="harga-produk-ulo" class="font-normal text-xl">Rp{{ product.price }}</h5>
                  </div>
                  <a
                    id="btn-beli-sekarang"
                    class="bg-primary_main text-neutral_10 rounded-lg px-4 py-2 "
                    target="_blank"
                    :href="product.url"
                    >Beli Sekarang</a
                  >
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import axios from 'axios'
import Sidebar from '../../../components/Admin/Sidebar.vue'
import SliderUlos from '../../../components/EndUser/SliderUlos.vue'
export default {
  data: function () {
    return {
      ulosDetails: null,
      productAvail: []
    }
  },
  components: {
    Sidebar, 
    SliderUlos
  },
  mounted() {
    const token = localStorage.getItem('token')
    axios
      .get('http://company.ditenun.com/api/v1/ulospedia/ulos/' + this.$route.params.id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        this.ulosDetails = response.data.data.ulos
        this.productAvail = response.data.data.ulos.clientProductDetailResponseList
        console.log(this.ulosDetail)
        console.log(this.productAvail)
      })
  }
}
</script>
<style lang=""></style>
