<template>
  <div id="app">
    <Sidebar />
    <div class="ml-80 pt-10 gap-6 mr-8">
      <div class="flex flex-row justify-between items-center">
        <h3 class="font-medium text-3xl text-left pb-6">Motif {{ ulosName }}</h3>
        <div class="flex flex-row gap-6">
          <AddMotif @data="handleAddMotif" />

          <button
            @click="toggleDeleteMotif"
            :disabled="motifUlos.length===0 || loading"
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
            {{ showDeleteMotif ? 'Simpan' : 'Sunting Konten' }}
          </button>
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
              class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
              role="tab"
              @click="changeSize('')"
              :class="{ active: activeButton === '' }"
            >
              Semua
            </button>
            <button
              type="button"
              class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
              role="tab"
              @click="changeSize('besar')"
              :class="{ active: activeButton === 'besar' }"
            >
              Besar
            </button>
            <button
              type="button"
              class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
              role="tab"
              @click="changeSize('sedang')"
              :class="{ active: activeButton === 'sedang' }"
            >
              Sedang
            </button>
            <button
              type="button"
              class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
              role="tab"
              @click="changeSize('kecil')"
              :class="{ active: activeButton === 'kecil' }"
            >
              Kecil
            </button>
          </nav>
        </div>
      </div>
    </div>

    <div v-if="loading" class="ml-80 pt-10 gap-6 mr-8">
      <CardSkeleton />
    </div>
    <div class="ml-80 pt-10 gap-6 mr-8">
      <!-- semua -->
      <div>
        <div v-if="motifUlos.length > 0">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="motif in motifUlos" :key="motif.id" >
              <template v-if="!showDeleteMotif">
                <!-- <router-link
                  :to="'/generate-motif/' + ulosID + '/motif-ulos/' + motif.id + '/hasil-generate'"
                > -->

                <div
                @click="sendDataId(motif.id)" class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
                >
                  <div  class="h-[300px] w-[252px]">
                    
                    <img
                      class="h-full w-full object-cover transition-transform rounded-lg"
                      :src="motif.imageUrl"
                    />
                  </div>
                  <div
                    class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
                  ></div>
                </div>
                <!-- </router-link> -->
                <!-- <DeleteMotif :motif-id="motif.id" @motif-deleted="handleMotifDeleted" class="z-10" /> -->
              </template>

              <template v-else>
            
                <div class="flex flex-col items-center gap-1">
                  <div
                    class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
                  >
                    <div class="h-[300px] w-[252px]">
                      
                      <img
                        class="h-full w-full object-cover transition-transform rounded-lg"
                        :src="motif.imageUrl"
                      />
                    </div>
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
                    ></div>
                  </div>
                  <div>
                    <DeleteMotif
                      :motif-id="motif.id"
                      @motif-deleted="handleMotifDeleted"
                      class="z-10"
                    />
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>

        <div v-else-if="motifUlos.length === 0 && loading === false">
          <EmptyState :name="propName" />
        </div>
      </div>

      <!-- besar -->
      <!-- <div id="segment-2" class="hidden" role="tabpanel" aria-labelledby="segment-item-2">
        motif ulos besar
      </div> -->
      <!-- sedang -->
      <!-- <div id="segment-3" class="hidden" role="tabpanel" aria-labelledby="segment-item-3">
        motif ulos sedang
      </div> -->
      <!-- kecil -->
      <!-- <div id="segment-4" class="hidden" role="tabpanel" aria-labelledby="segment-item-4">
        motif ulos kecil
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '../../../components/Admin/Sidebar.vue'
import EmptyState from '../../../components/Admin/EmptyState.vue'
import AddMotif from '../../../components/Admin/GenerateMotif/AddMotif.vue'
import DeleteMotif from '../../../components/Admin/Modals/Generate Motif/DeleteMotif.vue'
import CardSkeleton from '../../../components/EndUser/CardSkeleton.vue'
export default {
  components: {
    Sidebar,
    EmptyState,
    AddMotif,
    DeleteMotif,
    CardSkeleton
  },
  data: function () {
    return {
      motifUlos: [],
      propName: 'Motif Ulos',
      ulosID: this.$route.params.id,
      loading: false,
      ulosName: '',
      size: '',
      activeButton: '',
      showDeleteMotif: false
    }
  },
  mounted() {
    // const token = localStorage.getItem('token')
    // const ulosID = this.$route.params.id

    // axios
    //   .get(`http://company.ditenun.com/api/v1/generate/ulos/${ulosID}/motifs?size=${this.size}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   })
    //   .then((response) => {
    //     console.log(response.data)
    //     this.motifUlos = response.data.data.motifs.motifDashboardResponseList
    //     this.ulosName = response.data.motifs.ulosName
    //     console.log(this.motifUlos)
    //   })
    this.fetchMotifs('')
  },
  methods: {
    handleAddMotif(data) {
      this.motifUlos.unshift(data)
    },
    handleMotifDeleted(motifId) {
      this.motifUlos = this.motifUlos.filter((motif) => motif.id !== motifId)
    },
    sendDataId(motifId) {
      console.log('card clicked motifId:', motifId)
      this.$router.push({ name: 'MotifUlosHasilGenerate', params: { motifId } })
    },
    getUrlPath(ulosId, size) {
      if (size === '') {
        return `http://company.ditenun.com/api/v1/generate/ulos/${ulosId}/motifs`
      }
      return `http://company.ditenun.com/api/v1/generate/ulos/${ulosId}/motifs?size=${size}`
    },
    async fetchMotifs(size) {
      this.loading = true

      try {
        const token = localStorage.getItem('token')
        const ulosID = this.$route.params.id
        const url = this.getUrlPath(ulosID, size)
        console.log(url)

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response.data)
        this.motifUlos = response.data.data.motifs.motifDashboardResponseList
        this.ulosName = response.data.data.motifs.ulosName
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },
    changeSize(newSize) {
      this.size = newSize
      this.activeButton = newSize

      console.log(this.size, this.activeButton)
      this.fetchMotifs(this.size)
    },
    toggleDeleteMotif() {
      this.showDeleteMotif = !this.showDeleteMotif
      console.log(this.showDeleteMotif)
    }
  }
}
</script>
<style scoped></style>
