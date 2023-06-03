<template>
    <Navbar/>
    <div class="max-w-6xl mx-auto text-center mb-10 lg:mb-14 pt-10">
      <h2 class="text-2xl font-bold md:text-4xl text-neutral_100 mb-4">Penenun Alat Tenun Mesin</h2>
      <p class="mt-1 text-neutral_90 text-[16px] mb-0">
        Tangan-tangan terampil penghasil ulos kualitas tinggi
      </p>
    </div>
    
    
      <div class="flex justify-center pb-10">
        
          <div v-if="penenuns">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div v-for="penenun in penenuns" :key="penenun.id">
                <router-link :to="'/penenun-gedogan/' + penenun.id" id="card-penenun">
                  <div
                    class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
                  >
                    <div class="h-[300px] w-[252px]">
                      <div class="gradient"></div>
                      <img
                        id="penenun-gambar"
                        class="h-full w-full object-cover transition-transform rounded-lg"
                        :src="penenun.imageUrl"
                      />
                    </div>
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
                    ></div>
                    <div class="absolute inset-0 flex translate-y-[80%] flex-col text-left pl-6 z-[3]">
                      <h1 id="penenun-nama" class="text-xl font-medium text-neutral_10">{{ penenun.name }}</h1>
                      <p id="penenun-umur" class="text-neutral_10">{{ penenun.age }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        
        <div v-else>
          <CardSkeleton />
        </div>
      
        
      </div>
  
      <!-- Load more -->
      <div class="max-w-6xl mx-auto text-center mb-10 lg:mb-14">
          <button class="text-neutral_70 font-medium text-lg bg-neutral_20 items-center px-4 py-4 rounded-lg w-full max-w-md" @click="loadMore" v-if="!lastPage">Muat lebih banyak</button>
      </div>
      <Footer/>
  </template>
  
  <script>
  import axios from 'axios'
  import CardSkeleton from '../../components/EndUser/CardSkeleton.vue'
  import Navbar from '../../components/EndUser/Navbar.vue'
  import Footer from '../../components/EndUser/Footer.vue';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'App',
    data: function () {
      return {
        penenuns: null,
        pageNo: 1,
        lastPage:true,
        searchText: ''
      }
    },
    mounted() {
      axios
        .get(
          `http://company.ditenun.com/api/v1/ulospedia/client/weavers?theLoom=ATM&pageNo=${this.pageNo}`
        )
        .then((response) => {
          console.log(response.data)
          this.penenuns = response.data.data.weaverList.clientWeaverResponseList
  
          // cek state apakah akan menjadi page terakhir atau tidak
          if (!response.data.data.weaverList.isLastPage) {
            this.pageNo = this.pageNo + 1
            this.lastPage = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods: {
      async loadMore() {
        const morePenenuns = await axios.get(
          `http://company.ditenun.com/api/v1/ulospedia/client/weavers?theLoom=ATM&pageNo=${this.pageNo}`
        )
        console.log(morePenenuns.data)
        this.penenuns = this.penenuns.concat(
          morePenenuns.data.data.weaverList.clientWeaverResponseList
        )
        // cek state apakah akan menjadi page terakhir atau tidak
        if (!morePenenuns.data.data.weaverList.isLastPage) {
          this.pageNo = this.pageNo + 1
          this.lastPage = false
        } else {
          this.lastPage = true
        }
      }
    },
    components: { 
      CardSkeleton,
      Navbar,
      // eslint-disable-next-line vue/no-reserved-component-names
      Footer 
    }
  }
  </script>
  
  <style scoped>
    .gradient{
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.375) 0.79%, rgba(0, 0, 0, 0.175) 17.08%, rgba(0, 0, 0, 0.1) 31.87%, rgba(0, 0, 0, 0) 99.17%);
      border-radius: 8px;
      z-index: 2;
    }
  </style>
  