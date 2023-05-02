<template>
  <div class="max-w-6xl mx-auto text-center mb-10 lg:mb-14 pt-10">
    <h2 class="text-2xl font-bold md:text-4xl text-neutral_100 mb-4">Penenun Gedogan</h2>
    <p class="mt-1 text-neutral_90 text-[16px] mb-0">
      Tangan-tangan terampil penghasil ulos kualitas tinggi
    </p>
  </div>
  <div class="flex justify-center pb-10">
    <div v-if="penenuns">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="penenun in penenuns" :key="penenun.id">
          <div
            class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
          >
            <div class="h-[300px] w-[252px]">
              <img
                class="h-full w-full object-cover transition-transform rounded-lg"
                :src="penenun.imageUrl"
              />
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
            ></div>
            <div class="absolute inset-0 flex translate-y-[80%] flex-col text-left pl-6">
              <h1 class="text-xl font-medium text-neutral_10">{{ penenun.name }}</h1>
              <p class="text-neutral_10">{{ penenun.age }}</p>
            </div>
          </div>
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

<style></style>
