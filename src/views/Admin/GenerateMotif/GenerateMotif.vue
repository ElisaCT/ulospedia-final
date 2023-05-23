<template>
  <div id="app">
    <Sidebar />
    <div class="ml-80 pt-10 gap-6 mr-8">
      <div class="flex flex-row justify-between items-center">
        <h3 class="font-medium text-3xl text-left pb-6">Generate Motif</h3>
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
              Tambah Gambar Ulos
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
      <!-- search -->
      <div class="grid grid-cols-12 items-center gap-6 pt-8">
        <div
          class="inline-flex flex-grow items-center bg-[#F5F5F5] rounded-lg py-2 px-4 col-span-9 border border-[#F5F5F5]"
        >
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              stroke="#C2C2C2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9.583 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM18.333 18.333l-1.666-1.666"
            />
          </svg>
          <input
            class="w-full bg-[#F5F5F5] focus:outline-none pl-3"
            type="text"
            v-model="searchText"
            @input="handleSearch"
            placeholder="Cari ulos"
          />
        </div>

        <div class="col-span-3 relative inline-block">
          <select
            class="block appearance-none w-full bg-neutral_10 border border-primary_border text-primary_pressed text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
            required
          >
            <option value="" disabled selected hidden>Pilih Asal Suku</option>
            <option value="option1" class="pb-3 hover:bg-primary_surface">Batak Toba</option>
            <option value="option2" class="pb-3 hover:bg-primary_surface">Batak Simalungun</option>
            <option value="option3" class="pb-3 hover:bg-primary_surface">Batak Karo</option>
            <option value="option2" class="pb-3 hover:bg-primary_surface">Batak Angkola</option>
            <option value="option3" class="pb-3 hover:bg-primary_surface">Batak Mandailing</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
              <g clip-path="url(#a)">
                <path
                  fill="#323232"
                  d="M6.175 7.158 10 10.975l3.825-3.817L15 8.333l-5 5-5-5 1.175-1.175Z"
                />
              </g>
              <defs>
                <clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <!-- ulos -->
      <div class="flex justify-center py-8">
        <div v-if="ulosData.length > 0">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="ulos in ulosData" :key="ulos.id">
              <router-link :to="'/ulos-detail/' + ulos.id">
                <div
                  class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
                >
                  <div class="h-[300px] w-[252px]">
                    <div class="gradient"></div>
                    <img
                      class="h-full w-full object-cover transition-transform rounded-lg"
                      :src="ulos.imageUrl"
                    />
                  </div>
                  <div
                    class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
                  ></div>
                  <div
                    class="absolute inset-0 flex translate-y-[80%] flex-col text-left pl-6 z-[3]"
                  >
                    <h1 class="text-xl font-medium text-neutral_10">{{ ulos.name }}</h1>
                    <p class="text-neutral_10">{{ ulos.originEthnic }}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <div v-else-if="ulosData.length === 0">
          <!-- Show empty state component when searchText is not empty and ulosData is empty -->
          <EmptySearch />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '../../../components/Admin/Sidebar.vue'
import EmptySearch from '../../../components/Admin/EmptyState.vue'
export default {
  components: {
    Sidebar,
    EmptySearch
  },
  data: function () {
    return {
      searchText: '',
      ulosData: [],
      pageNo: 1,
      lastPage: true
    }
  },
  mounted() {
    axios
      .get(`http://company.ditenun.com/api/v1/ulospedia/client/ulos?pageNo=${this.pageNo}`)
      .then((response) => {
        this.ulosData = response.data.data.ulosList.clientUlosResponseList
        // cek state apakah akan menjadi page terakhir atau tidak
        if (!response.data.data.ulosList.isLastPage) {
          this.pageNo = this.pageNo + 1
          this.lastPage = false
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style></style>
