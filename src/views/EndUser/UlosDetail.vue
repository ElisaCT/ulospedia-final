<template>
    <Navbar/>
    <div v-if="ulosDetails">
        <div v-for="ulosDetail in ulosDetails" :key="ulosDetail.id">
            <div class="flex flex-col items-center gap-12 px-32">
                <div class="flex gap-6 items-center">
                    <div class="flex flex-col items-center gap-2">
                        <h3 class="font-semibold text-lg">{{ ulosDetail.name }}</h3>
                        <div class="flex flex-row gap-2">
                            <span class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2">
                                <span class="text-sm font-normal text-gray-800 text-primary_main">{{ ulosDetail.ethnic }}</span>
                            </span>
                            <span class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2">
                                <span class="text-sm font-normal text-gray-800 text-primary_main">{{ ulosDetail.location }}</span>
                            </span>
                            <span class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2">
                                <span class="text-sm font-normal text-gray-800 text-primary_main">{{ ulosDetail.technique }}</span>
                            </span>
                            <span class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2">
                                <span class="text-sm font-normal text-gray-800 text-primary_main">{{ ulosDetail.length }}cm x {{ ulosDetail.width }}cm</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
       
        <div class="drop-shadow flex flex-row gap-6 px-32 py-8 relative">
            <img :src="ulosDetail.mainUlosImageUrl" alt="" class="object-cover">
            <img :src="ulosDetail.firstUlosPiecesImageUrl" alt="" class="">
            <img :src="ulosDetail.firstUlosMotifImageUrl" alt="" class="">

            <button class="absolute bottom-8 right-10 z-[3] flex flex-row gap-2 rounded-lg px-4 py-3 items-center bg-neutral_20 text-neutral_70 font-medium text-base ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                    <path stroke="#757575" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M11.693 5.54a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28ZM4.307 5.54a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28ZM11.693 13.74a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28ZM4.307 13.74a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28Z"/>
                </svg>
                Lihat semua gambar
            </button>
        </div> 

                <div class="grid grid-cols-12 gap-6 px-32">
                    <!-- makna dan fungsi -->
                    <div class="flex flex-col gap-8 col-span-7">
                        <div class="flex flex-col gap-3">
                            <div class="flex flex-row gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
                                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25.667 19.53V5.448c0-1.4-1.144-2.438-2.532-2.321h-.07c-2.45.21-6.172 1.458-8.248 2.765l-.199.128c-.338.21-.898.21-1.236 0l-.292-.175c-2.076-1.295-5.787-2.532-8.236-2.73-1.389-.117-2.52.933-2.52 2.322V19.53c0 1.12.91 2.17 2.03 2.31l.338.047c2.532.338 6.44 1.621 8.68 2.846l.046.024c.315.175.817.175 1.12 0 2.24-1.237 6.16-2.532 8.704-2.87l.385-.047c1.12-.14 2.03-1.19 2.03-2.31ZM14 6.405v17.5M9.041 9.905H6.416M9.916 13.405h-3.5"/>
                                </svg>
                                <h4 class="font-medium text-base text-neutral_100">Makna Ulos</h4>
                            </div>
                            <p class="font-normal text-sm text-neutral_90 text-left">
                                {{ ulosDetail.meaning }} 
                            </p>
                        </div>

                        <hr class="solid border-neutral_40">

                        <div class="flex flex-col gap-3">
                            <div class="flex flex-row gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
                                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.083 23.917a2.471 2.471 0 0 0 3.5 0L22.75 8.75a2.471 2.471 0 0 0 0-3.5 2.471 2.471 0 0 0-3.5 0L4.083 20.417a2.472 2.472 0 0 0 0 3.5Z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.012 10.488-3.5-3.5"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m9.916 2.847 1.75-.514-.513 1.75.513 1.75-1.75-.513-1.75.513.514-1.75-.514-1.75 1.75.514ZM5.25 9.847 7 9.333l-.513 1.75.513 1.75-1.75-.513-1.75.513.513-1.75-.513-1.75 1.75.514ZM22.75 15.68l1.75-.513-.513 1.75.513 1.75-1.75-.514-1.75.514.513-1.75-.513-1.75 1.75.513Z"/>
                                </svg>
                                <h4 class="font-medium text-base text-neutral_100">Fungsi Ulos</h4>
                            </div>
                                <p class="font-normal text-sm text-neutral_90 text-left">
                                    {{ ulosDetail.func }} 
                                </p>
                        </div>
                    </div>

                    <!-- e-commerce -->
                        <div v-if="ulosDetail.products != null" class="flex flex-col gap-4 bg-neutral_10 px-4 py-4 rounded-lg col-span-5 e-commerce">
                            <p class="font-normal text-lg text-neutral_100">Tersedia di e-commerce DiTenun</p>

                            <div class="flex flex-row gap-4">
                                <img src="../assets/images/tote-bag.png" alt="" class="rounded-md">
                                <div class="flex flex-col gap-6 pt-12">
                                    <div class="gap-4">
                                        <p class="font-medium text-lg">Totebag Harungguan</p>
                                        <h5 class="font-normal text-xl">Rp350.000</h5>
                                    </div>

                                    <button 
                                    id="btn-beli-sekarang" 
                                    class="bg-primary_main text-neutral_10 rounded-lg px-4 py-2">
                                        Beli sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    <Footer/>
</template>
<script>
import Navbar from '../../components/EndUser/Navbar.vue'
import Footer from '../../components/EndUser/Footer.vue';
import axios from 'axios';

export default {
    // eslint-disable-next-line vue/no-reserved-component-names
    components:{Navbar, Footer},
    data: function () {
    return {
      ulosDetails: null
    }
  },
  mounted() {
    axios
    .get('http://company.ditenun.com/api/v1/ulospedia/client/ulos/' + this.$route.params.id)
      .then((response) => {
        this.ulosDetails = response.data.data
        console.log(this.ulosDetails)
      })
  },
}
</script>
<style scoped>
    .e-commerce{
        border: 1px solid #EDEDED;
        box-shadow: 0px 6px 16px rgba(112, 144, 176, 0.2);
    }
    .aspect-ratio {
  padding-top: 75%; /* 4:3 aspect ratio (75% = 3/4 * 100%) */
}
</style>