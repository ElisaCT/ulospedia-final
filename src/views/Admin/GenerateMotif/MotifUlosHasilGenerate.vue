<template>
  <div id="app">
    <Sidebar />
    <div class="ml-80 pt-10 gap-6 mr-8">
      <div class="flex flex-row justify-between items-center">
        <h3 class="font-medium text-3xl text-left pb-6">Motif { Ulos name } Hasil Generate</h3>
        <div class="flex flex-row gap-6">
         <AddMotifHasilGenerate/>
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

      <!-- <div >
        <div v-if="motifUlos.length > 0">
          <div v-for="motif in motifUlos" :key="motif.id">
            
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
          </div>
          </div>
        </div> -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Sidebar from '../../../components/Admin/Sidebar.vue'
import AddMotifHasilGenerate from '../../../components/Admin/GenerateMotif/AddMotifHasilGenerate.vue'
export default {
  components: {
    Sidebar,
    AddMotifHasilGenerate
  },
  data: function () {
    return {
      motifUlosGenerated: [],
      propName: 'Motif Ulos Hasil Generate'
    }
  }, //motifs/1
  mounted() {
    const token = localStorage.getItem('token')
    axios
      .get(
        `http://company.ditenun.com/api/v1/generate/ulos/${this.Ulos.id}/motifs/${this.motifUlos.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((response) => {
        this.motifUlos = response.data.data
        console.log(this.motifUlos)
      })
  }
}
</script>
<style lang=""></style>
