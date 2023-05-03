<template>
  <div class="flex min-h-screen items-center justify-center">
    <div v-if="penenuns">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <!-- card -->
        <div v-for="penenun in penenuns" :key="penenun.id">
          <div class="p-10">
            <h1 class="text-lg font-bold">{{ penenun.name }}</h1>
          </div>
          <div>
            <img :src="penenun.imageUrl" />
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>

  <div class="flex min-h-screen items-center justify-center">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div
        class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
      >
        <div class="h-96 w-72">
          <div class="gradient"></div>
          <img
            class="h-full w-full object-cover transition-transform rounded-lg"
            src="../assets/asti-panjaitan.png"
            alt=""
          />
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
        ></div>
        <div class="absolute inset-0 flex translate-y-[80%] flex-col text-left pl-6">
          <h1 class="text-xl font-medium text-neutral_10">Asti Panjaitan</h1>
          <p class="text-neutral_10">32 Tahun</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'App',
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

<style scoped>
  .gradient{
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.375) 0.79%, rgba(0, 0, 0, 0.175) 17.08%, rgba(0, 0, 0, 0.1) 31.87%, rgba(0, 0, 0, 0) 99.17%);
    border-radius: 8px;
  }
</style>
