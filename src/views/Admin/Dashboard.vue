<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Sidebar />
  <div class="ml-80 pt-10 gap-6 mr-8">
    <h3 class="text-2xl font-medium text-left pb-6">Dashboard Ulospedia DiTenun</h3>
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-6 relative">
        <img src="../../assets/images/Admin/dashboard-ulos.svg" class="w-full" />
        <div
          class="absolute inset-0 left-9 top-6 flex flex-col text-left pl-6 gap-2 text-neutral_10"
        >
          <h2 class="font-semibold text-4xl">30</h2>
          <h5 class="font-medium text-xl">Data Ulos</h5>
        </div>
      </div>

      <div class="col-span-6 relative">
        <img src="../../assets/images/Admin/dashboard-penenun.svg" class="w-full" />
        <div
          class="absolute inset-0 left-9 top-6 flex flex-col text-left pl-6 gap-2 text-neutral_10"
        >
          <h2 class="font-semibold text-4xl">30</h2>
          <h5 class="font-medium text-xl">Data Penenun</h5>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-6 pt-6">
      <!-- Ulos-ulos -->
      <div class="col-span-6">
        <p class="font-bold text-lg text-left pb-4">Ulos-ulos</p>

        <div v-if="penenuns">
          <div class="grid grid-cols-2 gap-6">
            <div v-for="penenun in penenuns" :key="penenun.id">
              <router-link :to="'/penenun-gedogan/' + penenun.id">
                <div
                  class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
                >
                  <div class="h-[300px] w-auto">
                    <div class="gradient"></div>
                    <img
                      class="h-full w-full object-cover transition-transform rounded-lg"
                      :src="penenun.imageUrl"
                    />
                  </div>
                  <div
                    class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
                  ></div>
                  <div
                    class="absolute inset-0 flex translate-y-[80%] flex-col text-left pl-6 z-[3]"
                  >
                    <h1 class="text-xl font-medium text-neutral_10">{{ penenun.name }}</h1>
                    <p class="text-neutral_10">{{ penenun.age }}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Penenun -->
      <div class="col-span-6">
        <p class="font-bold text-lg text-left pb-4">Penenun</p>

        <div v-if="penenuns">
          <div class="grid grid-cols-2 gap-5">
            <div v-for="penenun in penenuns" :key="penenun.id">
              <router-link :to="'/penenun-gedogan/' + penenun.id">
                <div
                  class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
                >
                  <div class="h-[300px] w-auto">
                    <div class="gradient"></div>
                    <img
                      class="h-full w-full object-cover transition-transform rounded-lg"
                      :src="penenun.imageUrl"
                    />
                  </div>
                  <div
                    class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
                  ></div>
                  <div
                    class="absolute inset-0 flex translate-y-[80%] flex-col text-left pl-6 z-[3]"
                  >
                    <h1 class="text-xl font-medium text-neutral_10">{{ penenun.name }}</h1>
                    <p class="text-neutral_10">{{ penenun.age }}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Sidebar from '../../components/Admin/Sidebar.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'dashboard',
  components: { Sidebar },
  data: function () {
    return {
      penenuns: null
    }
  },
  mounted() {
    axios
      .get('http://company.ditenun.com/api/v1/ulospedia/client/weavers?theLoom=Gedongan&pageNo=1')
      .then((response) => {
        this.penenuns = response.data.data.weaverList.clientWeaverResponseList
        console.log(this.penenuns)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style lang=""></style>
