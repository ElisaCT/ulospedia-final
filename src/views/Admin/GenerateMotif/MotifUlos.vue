<template>
  <div id="app">
    <Sidebar />
    <div class="ml-80 pt-10 gap-6 mr-8">
      <div class="flex flex-row justify-between items-center">
        <h3 class="font-medium text-3xl text-left pb-6">Motif { Ulos name }</h3>
        <div class="flex flex-row gap-6">
          <router-link to="">
            <button
              class="flex flex-row bg-primary_main items-center px-4 py-2 gap-2 rounded-lg text-lg font-medium text-neutral_10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M10 18.333c4.583 0 8.333-3.75 8.333-8.333S14.583 1.667 10 1.667 1.667 5.417 1.667 10s3.75 8.333 8.333 8.333ZM6.667 10h6.666M10 13.333V6.667"
                />
              </svg>
              Tambah Motif Ulos
            </button>
          </router-link>
          <router-link to="">
            <button
              class="flex flex-row bg-neutral_20 items-center px-4 py-2 gap-2 rounded-lg text-lg font-medium text-neutral_70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                <path
                  stroke="#757575"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="m11.05 3-6.842 7.242c-.258.275-.508.816-.558 1.191l-.308 2.7c-.109.975.591 1.642 1.558 1.475l2.683-.458c.375-.067.9-.342 1.159-.625l6.841-7.242c1.184-1.25 1.717-2.675-.125-4.416C13.625 1.142 12.233 1.75 11.05 3Z"
                />
                <path
                  stroke="#757575"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="M9.908 4.208A5.105 5.105 0 0 0 14.45 8.5M2.5 18.333h15"
                />
              </svg>
              Sunting Konten
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <!-- navigation -->
    <div class="ml-80 pt-10 gap-6 mr-8">
      <div class="flex place-content-center pb-10 pt-10">
        <div
          class="flex bg-primary_surface hover:bg-primary_surface rounded-[16px] transition dark:bg-primary_main dark:hover:bg-primary_hover"
        >
          <nav class="flex space-x-2 p-1.5" aria-label="Tabs" role="tablist">
            <button
              type="button"
              class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active"
              id="segment-item-1"
              data-hs-tab="#segment-1"
              aria-controls="segment-1"
              role="tab"
            >
              Semua
            </button>
            <button
              type="button"
              class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
              id="segment-item-2"
              data-hs-tab="#segment-2"
              aria-controls="segment-2"
              role="tab"
            >
              Besar
            </button>
            <button
              type="button"
              class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
              id="segment-item-3"
              data-hs-tab="#segment-3"
              aria-controls="segment-3"
              role="tab"
            >
              Sedang
            </button>
            <button
              type="button"
              class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
              id="segment-item-4"
              data-hs-tab="#segment-4"
              aria-controls="segment-4"
              role="tab"
            >
              Kecil
            </button>
          </nav>
        </div>
      </div>
    </div>

    <div class="ml-80 pt-10 gap-6 mr-8">
      <!-- semua -->
      <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
        <div v-if="motifUlos">
          <div v-for="motif in motifUlos" :key="motif.id">
            <router-link :to="'/generate-motif/' + motif.id + '/motif-ulos/hasil-generate'">
              <div
                class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
              >
                <div class="h-[300px] w-[252px]">
                  <div class="gradient"></div>
                  <img
                    class="h-full w-full object-cover transition-transform rounded-lg"
                    :src="motif.imageUrl"
                  />
                </div>
                <div
                  class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
                ></div>
              </div>
            </router-link>
          </div>
        </div>

        <div v-else>
          <EmptyState :name="propName" />
        </div>
      </div>

      <!-- besar -->
      <div id="segment-2" class="hidden" role="tabpanel" aria-labelledby="segment-item-2">
        motif ulos besar
      </div>
      <!-- sedang -->
      <div id="segment-3" class="hidden" role="tabpanel" aria-labelledby="segment-item-3">
        motif ulos sedang
      </div>
      <!-- kecil -->
      <div id="segment-4" class="hidden" role="tabpanel" aria-labelledby="segment-item-4">
        motif ulos kecil
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '../../../components/Admin/Sidebar.vue'
import EmptyState from '../../../components/Admin/EmptyState.vue'
export default {
  components: {
    Sidebar,
    EmptyState
  },
  data: function () {
    return {
      motifUlos: [],
      propName: 'Motif Ulos'
    }
  },
  mounted() {
    const token = localStorage.getItem('token')
    axios
      .get(`http://company.ditenun.com/api/v1/generate/ulos/${this.motifUlos.id}/motifs`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        this.motifUlos = response.data.data
        console.log(this.motifUlos)
      })
  }
}
</script>
<style scoped></style>
