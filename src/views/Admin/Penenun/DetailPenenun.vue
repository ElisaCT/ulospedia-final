<template>
  <Sidebar />
  <div class="ml-80 pt-10 gap-6 mr-8">
    <div class="flex flex-row justify-between items-center">
      <h3 class="font-medium text-3xl text-left pb-6">Data Penenun</h3>
      <div v-if="weaverDetails">
        <div v-for="weaverDetail in weaverDetails" :key="weaverDetail.id">
          <div class="flex flex-row gap-6">
            <router-link to="">
              <button
                class="flex flex-row bg-primary_main items-center px-4 py-2 gap-2 rounded-lg text-lg font-medium text-neutral_10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                  <path
                    stroke="#FFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="m11.05 3-6.842 7.242c-.258.275-.508.816-.558 1.191l-.308 2.7c-.109.975.591 1.642 1.558 1.475l2.683-.458c.375-.067.9-.342 1.159-.625l6.841-7.242c1.184-1.25 1.717-2.675-.125-4.416C13.625 1.142 12.233 1.75 11.05 3Z"
                  />
                  <path
                    stroke="#FFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M9.908 4.208A5.105 5.105 0 0 0 14.45 8.5M2.5 18.333h15"
                  />
                </svg>
                Edit Penenun
              </button>
            </router-link>
            <DeleteButtonPenenun
              :weaver-id="weaverDetail.id"
              @weaver-deleted="handleWeaverDeleted"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="weaverDetails">
      <div v-for="weaverDetail in weaverDetails" :key="weaverDetail.id">
        <div class="flex flex-col gap-12 items-center px-44 p-12">
          <div class="flex gap-6 items-center">
            <div class="flex flex-col items-center gap-2">
              <h3 class="font-semibold text-lg">{{ weaverDetail.name }}</h3>
              <div class="flex flex-row gap-2">
                <span
                  class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
                >
                  <span class="text-sm font-normal text-primary_main"
                    >Penenun {{ weaverDetail.theLoom }}</span
                  >
                </span>
                <span
                  class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
                >
                  <span class="text-sm font-normal text-primary_main">{{
                    weaverDetail.ethnic
                  }}</span>
                </span>
                <span
                  class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
                >
                  <span class="text-sm font-normal text-primary_main"
                    >Usia {{ weaverDetail.age }}</span
                  >
                </span>
                <span
                  class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
                >
                  <span class="text-sm font-normal text-gray-800 text-primary_main"
                    >Asal {{ weaverDetail.domicile }}</span
                  >
                </span>
              </div>
            </div>
          </div>

          <!-- image -->
          <div>
            <div class="w-full flex justify-center h-72">
              <img :src="weaverDetail.imageUrl" class="mx-auto w-8/12 rounded-lg object-cover" />
            </div>
          </div>

          <!-- story -->
          <div class="flex flex-col col-span-12">
            <div class="flex flex-col gap-3">
              <p class="font-normal text-sm text-neutral_90 text-left">
                {{ weaverDetail.story }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Sidebar from '../../../components/Admin/Sidebar.vue'
import DeleteButtonPenenun from '../../../components/Admin/Modals/DeleteButtonPenenun.vue'
export default {
  components: {
    Sidebar,
    DeleteButtonPenenun
  },
  data: function () {
    return {
      weaverDetails: []
    }
  },
  mounted() {
    const token = localStorage.getItem('token')
    axios
      .get('http://company.ditenun.com/api/v1/ulospedia/weavers/' + this.$route.params.id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        this.weaverDetails = response.data.data
        console.log(this.weaverDetails)
      })
  },
  methods: {
    handleWeaverDeleted(weaverId) {
      console.log('Before filtering:', this.weaverDetails)
      this.weaverDetails = this.weaverDetails.filter((weaverDetail) => weaverDetail.id !== weaverId)
      console.log('After filtering:', this.weaverDetails)
      console.log('navigate')
      this.$router.push('/admin/penenun')
    }
  }
}
</script>
<style lang=""></style>
