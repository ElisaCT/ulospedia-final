<template>
  <Navbar/>
  <div class="max-w-6xl mx-auto text-center mb-10 lg:mb-14 pt-10">
    <h2 class="text-2xl font-bold md:text-4xl text-neutral_100 mb-4">Alat Tenun Ulos</h2>
    <p class="mt-1 text-neutral_90 text-[16px] mb-0">
      Tiga jenis alat tenun yang digunakan penenun dengan tangan-tangan terampil untuk menghasilkan
      ulos yang bernilai tinggi
    </p>
  </div>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden">
        <router-link to="/penenun-gedogan">
          <div class="relative">
            <img
              class="h-80 w-90 rounded-xl object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src="../../assets/gedogan.png"
              alt=""
            />
            <div class="absolute inset-0 flex items-center justify-center">
              <p
                class="text-neutral_10 text-center text-2xl font-bold bg-black bg-opacity-50 px-4 py-2 opacity-100 hover:opacity-0 transition duration-300 ease-in"
              >
                Gedogan
              </p>
            </div>
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from-neutral_100 group-hover:via-neutral_100 group-hover:to-neutral_100 opacity-70"
          ></div>
          <div
            class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
          >
            <p
              class="mb-3 text-[16px] text-neutral_10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              Gedogan merupakan salah satu jenis alat tenun tradisional yang sudah sejak lama
              digunakan oleh para leluhur di berbagai daerah Indonesia dalam proses penenunan kain.
              Cara penggunaannya yaitu dengan memangku atau menggendong alat tenun sambil duduk di
              lantai.
            </p>
          </div>
        </router-link>
      </div>
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden">
        <div class="">
          <img
            class="h-80 w-90 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src="../../assets/atbm.png"
            alt=""
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <p
              class="text-neutral_10 text-center text-2xl font-bold bg-black bg-opacity-50 px-4 py-2"
            >
              Alat Tenun Bukan Mesin (ATBM)
            </p>
          </div>
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from-neutral_100 group-hover:via-neutral_100 group-hover:to-neutral_100 opacity-70"
        ></div>
        <div
          class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
        >
          <p
            class="mb-3 text-[16px] text-neutral_10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Alat tenun bukan mesin (ATBM) merupakan alat untuk melakukan penenunan yang digerakkan
            oleh manusia. ATBM dapat dipergunakan sambil duduk maupun berdiri. Alat ini biasa
            digunakan dalam industri tekstil kecil dan tradisional.
          </p>
        </div>
      </div>
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden">
        <div class="relative">
          <img
            class="h-80 w-90 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src="../../assets/atm.png"
            alt=""
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <p
              class="text-neutral_10 text-center text-2xl font-bold bg-black bg-opacity-50 px-4 py-2"
            >
              Alat Tenun Mesin (ATM)
            </p>
          </div>
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from-neutral_100 group-hover:via-neutral_100 group-hover:to-neutral_100 opacity-70"
        ></div>
        <div
          class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
        >
          <p
            class="mb-3 text-[16px] text-neutral_10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            Alat tenun mesin (ATM) merupakan alat tenun yang dilengkapi dengan motor penggerak
            sehingga proses pengerjaan kain tenun menjadi relatif lebih cepat karena sepenuhnya
            dikerjakan oleh mesin.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Navbar from '../../components/EndUser/Navbar.vue'
import Footer from '../../components/EndUser/Footer.vue';

export default {

  // eslint-disable-next-line vue/multi-word-component-names
  name: 'penenun',

  components:{
    Navbar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer
  }
}
</script>
