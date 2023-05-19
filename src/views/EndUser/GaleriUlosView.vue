<template>
  <Navbar />
  <div class="mx-[180px]">
    <!-- search -->
    <div class="flex flex-row items-center gap-3">
      <div class="inline-flex flex-grow items-center bg-[#F5F5F5] rounded-lg py-2 px-4">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
          <path
            stroke="#C2C2C2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M9.583 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM18.333 18.333l-1.666-1.666"
          />
        </svg>
        <input
          class="w-full bg-[#F5F5F5] border-[#F5F5F5] focus:outline-none pl-3"
          type="text"
          v-model="searchText"
          @input="handleSearch"
          placeholder="Cari ulos"
        />
      </div>

      <button
        id="filterButton"
        class="ml-4 border border-[#E0E0E0] bg-white text-[#616161] font-normal py-2 px-2 rounded-lg flex flex-row gap-2 items-center"
        @click="toggleDropdown"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
          <path
            stroke="#616161"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1.5"
            d="M18.334 5.417h-5M5 5.417H1.667M8.333 8.333a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833ZM18.333 14.583H15M6.667 14.583h-5M11.667 17.5a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833Z"
          />
          <path
            stroke="#616161"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1.5"
            d="M18.334 5.417h-5M5 5.417H1.667M8.333 8.333a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833ZM18.333 14.583H15M6.667 14.583h-5M11.667 17.5a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833Z"
          />
        </svg>
        Filter
      </button>
    </div>

    <!-- menu filter -->
    <div v-if="isDropdownVisible" class="relative">
      <div
        id="dropdown"
        class="absolute top-2 right-2 mt-4 z-[4] bg-white px-10 py-6 w-96 rounded-lg shadow flex flex-col gap-4 border border-solid border-primary_surface"
      >
        <div class="flex flex-row gap-14">
          <div class="gap-6">
            <div>
              <label class="font-normal text-left text-base text-neutral_90 pb-2">Ragam Ulos</label>
              <ul
                class="text-base text-neutral_80 font-normal gap-2 pl-3"
                aria-labelledby="dropdownDefaultButton"
              >
                <li class="py-2">
                  <label>
                    <input type="radio" value="Batak Toba" v-model="selectedOptionEthnic" />
                    Batak Toba
                  </label>
                </li>
                <li class="py-2">
                  <label>
                    <input type="radio" value="Batak Karo" v-model="selectedOptionEthnic" />
                    Batak Karo
                  </label>
                </li>
                <li class="py-2">
                  <label>
                    <input type="radio" value="Batak Simalungun" v-model="selectedOptionEthnic" />
                    Batak Simalungun
                  </label>
                </li>
                <li class="py-2">
                  <label>
                    <input type="radio" value="Batak Mandailing" v-model="selectedOptionEthnic" />
                    Batak Mandailing
                  </label>
                </li>
                <li class="py-2">
                  <label>
                    <input type="radio" value="Batak Angkola" v-model="selectedOptionEthnic" />
                    Batak Angkola
                  </label>
                </li>
              </ul>
            </div>

            <div class="mt-6">
              <label class="font-normal text-left text-base text-neutral_90 py-2">Jenis Ulos</label>
              <ul
                class="text-base text-neutral_80 font-normal gap-2 pl-3"
                aria-labelledby="dropdownDefaultButton"
              >
                <li class="py-2">
                  <label>
                    <input type="radio" value="Tradisional" v-model="selectedOptionType" />
                    Tradisional
                  </label>
                </li>
                <li class="py-2">
                  <label>
                    <input type="radio" value="Pengembangan" v-model="selectedOptionType" />
                    Pengembangan
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <label class="font-normal text-left text-base text-neutral_90 pb-2">Jenis Ulos</label>
            <ul
              class="text-base text-neutral_80 font-normal gap-2 pl-3"
              aria-labelledby="dropdownDefaultButton"
            >
              <li class="py-2">
                <label>
                  <input type="checkbox" value="merah" v-model="isCheckedColor" />
                  Merah
                </label>
              </li>
              <li class="py-2">
                <label>
                  <input type="checkbox" value="hitam" v-model="isCheckedColor" />
                  Hitam
                </label>
              </li>
              <li class="py-2">
                <label>
                  <input type="checkbox" value="putih" v-model="isCheckedColor" />
                  Putih
                </label>
              </li>
              <li class="py-2">
                <label>
                  <input type="checkbox" value="biru" v-model="isCheckedColor" />
                  Biru
                </label>
              </li>
              <li class="py-2">
                <label>
                  <input type="checkbox" value="hijau" v-model="isCheckedColor" />
                  Hijau
                </label>
              </li>
              <li class="py-2">
                <label>
                  <input type="checkbox" value="kuning" v-model="isCheckedColor" />
                  Kuning
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-row gap-4 justify-end">
          <button
            class="px-4 py-3 rounded-lg bg-neutral_20 text-center text-lg font-medium text-neutral_70"
            @click="isDropdownVisible = false"
          >
            Batal
          </button>
          <button
            class="px-4 py-3 rounded-lg bg-primary_main text-center text-lg font-medium text-neutral_10"
            @click="addFilter"
          >
            Terapkan
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="applyClicked === true" class="flex justify-center pt-6 gap-2">
    <!-- type -->
    <div
      v-if="selectedOptionType !== ''"
      class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
    >
      <span class="text-sm font-normal text-primary_main mr-2">{{ selectedOptionType }}</span>
      <button @click="deleteSelectedOptionType">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
          <path
            stroke="#3355B5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m12.5 4-8 8m0-8 8 8"
            opacity=".9"
          />
        </svg>
      </button>
    </div>
    <!-- ethnic -->
    <div
      v-if="selectedOptionEthnic !== ''"
      class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
    >
      <span class="text-sm font-normal text-primary_main mr-2">{{ selectedOptionEthnic }}</span>
      <button @click="deleteSelectedOptionEthnic">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
          <path
            stroke="#3355B5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m12.5 4-8 8m0-8 8 8"
            opacity=".9"
          />
        </svg>
      </button>
    </div>
    <!-- colors -->
    <!-- <div v-if="isCheckedColor.length > 0">
      <div v-if="isCheckedColor !== ''">
        <div v-for="color in isCheckedColor" :key="color">
          <div
            class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
          >
            <span class="text-sm font-normal text-primary_main mr-2">{{ isCheckedColor }}</span>
            <button @click="deleteSelectedOptionEthnic">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
                <path
                  stroke="#3355B5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="m12.5 4-8 8m0-8 8 8"
                  opacity=".9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <!-- card ulos -->
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
                class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100"
              ></div>
              <div class="absolute inset-0 flex translate-y-[80%] flex-col text-left pl-6 z-[3]">
                <h1 class="text-xl font-medium text-neutral_10">{{ ulos.name }}</h1>
                <p class="text-neutral_10">{{ ulos.originEthnic }}</p>
              </div>
              <div v-if="ulos.isAvailableOnEcommerce === true">
                <ecommerceAvailable class="absolute top-6 right-6 z-[3]" />
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

    <div v-else>
      <CardSkeleton />
    </div>
  </div>

  <!-- Load more -->
  <div class="max-w-6xl mx-auto text-center mb-10 lg:mb-14">
    <button
      class="text-neutral_70 font-medium text-lg bg-neutral_20 items-center px-4 py-4 rounded-lg w-full max-w-md"
      @click="loadMore"
      v-if="!lastPage"
    >
      Muat lebih banyak
    </button>
  </div>

  <!-- Footer -->
  <Footer />
</template>

<script>
//import UlosCard from '../../components/EndUser/UlosCard.vue';
import axios from 'axios'
import Navbar from '../../components/EndUser/Navbar.vue'
import Footer from '../../components/EndUser/Footer.vue'
import CardSkeleton from '../../components/EndUser/CardSkeleton.vue'
import ecommerceAvailable from '../../components/EndUser/ecommerceAvailable.vue'
import EmptySearch from '../../components/EndUser/EmptySearch.vue'

export default {
  name: 'GaleriUlosView',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Navbar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
    CardSkeleton,
    ecommerceAvailable,
    EmptySearch
  },
  data: function () {
    return {
      searchText: '',
      ulosData: [],
      pageNo: 1,
      lastPage: true,
      // ethnic: '',
      // type: '',
      colors: '',
      search: '',
      isDropdownVisible: false,
      selectedOptionType: '',
      selectedOptionEthnic: '',
      //isCheckedColor: [],
      applyClicked: false
    }
  },
  watch: {
    selectedOptionType(value) {
      console.log(value)
      // this.selectedOptionEthnic = value
    },
    selectedOptionEthnic(value) {
      console.log(value)
    },
    selectedOptionColors(value) {
      console.log(value)
    }
  },
  mounted() {
    axios
      .get(`http://company.ditenun.com/api/v1/ulospedia/client/ulos?pageNo=${this.pageNo}`)
      .then((response) => {
        console.log(response.data)
        this.ulosData = response.data.data.ulosList.clientUlosResponseList
        // cek state apakah akan menjadi page terakhir atau tidak
        if (!response.data.data.ulosList.isLastPage) {
          this.pageNo = this.pageNo + 1
          this.lastPage = false
          console.log(`State: ${this.lastPage}`)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    deleteSelectedOptionEthnic() {
      this.pageNo = 1

      this.selectedOptionEthnic = ''
      // hapus penanda di filter
      const url = this.setApiPath(
        this.pageNo,
        this.selectedOptionEthnic,
        this.selectedOptionType,
        this.colors,
        this.searchText
      )

      axios.get(url).then((response) => {
        console.log(response.data)
        this.ulosData = response.data.data.ulosList.clientUlosResponseList
        if (!response.data.data.ulosList.isLastPage) {
          this.pageNo = this.pageNo + 1
          this.lastPage = false
        } else {
          this.lastPage = true
        }
      })
    },
    deleteSelectedOptionType() {
      this.pageNo = 1

      this.selectedOptionType = ''
      // hapus penanda di filter
      const url = this.setApiPath(
        this.pageNo,
        this.selectedOptionEthnic,
        this.selectedOptionType,
        this.colors,
        this.searchText
      )

      axios.get(url).then((response) => {
        console.log(response.data)
        this.ulosData = response.data.data.ulosList.clientUlosResponseList
        if (!response.data.data.ulosList.isLastPage) {
          this.pageNo = this.pageNo + 1
          this.lastPage = false
        } else {
          this.lastPage = true
        }
      })
    },
    addFilter() {
      this.pageNo = 1

      const url = this.setApiPath(
        this.pageNo,
        this.selectedOptionEthnic,
        this.selectedOptionType,
        this.colors,
        this.searchText
      )

      axios.get(url).then((response) => {
        console.log(response.data)
        this.ulosData = response.data.data.ulosList.clientUlosResponseList
        if (!response.data.data.ulosList.isLastPage) {
          this.pageNo = this.pageNo + 1
          this.lastPage = false
        } else {
          this.lastPage = true
        }
      })

      this.applyClicked = !this.applyClicked
      this.isDropdownVisible = !this.isDropdownVisible
    },
    setApiPath(pageNo, ethnic, type, colors, search) {
      return `http://company.ditenun.com/api/v1/ulospedia/client/ulos?pageNo=${pageNo}${
        ethnic !== '' ? '&ethnic=' + ethnic : ''
      }
      ${type !== '' ? '&type=' + type : ''}
      ${colors !== '' ? '&colors=' + colors : ''}
      ${search !== '' ? '&search=' + search : ''}`
    },
    async loadMore() {
      console.log(
        this.setApiPath(this.pageNo, this.ethnic, this.type, this.colors, this.searchText)
      )
      const moreUlosData = await axios.get(
        this.setApiPath(
          this.pageNo,
          this.selectedOptionEthnic,
          this.selectedOptionType,
          this.colors,
          this.searchText
        )
      )
      console.log(moreUlosData.data)
      this.ulosData = this.ulosData.concat(moreUlosData.data.data.ulosList.clientUlosResponseList)
      // cek state apakah akan menjadi page terakhir atau tidak
      if (!moreUlosData.data.data.ulosList.isLastPage) {
        this.pageNo = this.pageNo + 1
        this.lastPage = false
      } else {
        this.lastPage = true
      }
    },
    handleSearch() {
      this.pageNo = 1
      console.log(
        `http://company.ditenun.com/api/v1/ulospedia/client/ulos?pageNo=${this.pageNo}&search=${this.searchText}`
      )
      if (this.searchText === '') {
        axios
          .get(`http://company.ditenun.com/api/v1/ulospedia/client/ulos?pageNo=1`)
          .then((response) => {
            console.log(response.data.data.ulosList.clientUlosResponseList)
            this.ulosData = response.data.data.ulosList.clientUlosResponseList
            // cek state apakah akan menjadi page terakhir atau tidak
            if (!response.data.data.ulosList.isLastPage) {
              this.pageNo = this.pageNo + 1
              this.lastPage = false
            } else {
              this.lastPage = true
            }
          })
      } else {
        axios
          .get(
            `http://company.ditenun.com/api/v1/ulospedia/client/ulos?pageNo=${this.pageNo}&search=${this.searchText}`
          )
          .then((response) => {
            console.log(response.data.data.ulosList.clientUlosResponseList)
            this.ulosData = response.data.data.ulosList.clientUlosResponseList
            // cek state apakah akan menjadi page terakhir atau tidak
            if (!response.data.data.ulosList.isLastPage) {
              this.pageNo = this.pageNo + 1
              this.lastPage = false
            } else {
              this.lastPage = true
            }
          })
      }
    },
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible
      this.selectedOption = null // Reset the selected option
    },
    // handleSearch() {
    //   if (this.searchText) {
    //     this.ulosData = this.ulosData.filter((ulos) => {
    //       return ulos.name.toLowerCase().includes(this.searchText.toLowerCase())
    //     })
    //   } else {
    //     // If searchText is empty, reset the ulosData to the original data
    //     axios
    //       .get(`http://company.ditenun.com/api/v1/ulospedia/client/ulos?pageNo=${this.pageNo}`)
    //       .then((response) => {
    //         console.log(response.data)
    //         this.ulosData = response.data.data.ulosList.clientUlosResponseList

    //         // cek state apakah akan menjadi page terakhir atau tidak
    //         if (!response.data.data.weaverList.isLastPage) {
    //           this.pageNo = this.pageNo + 1
    //           this.lastPage = false
    //         }
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   }
    // },
    handleFilter() {
      // Do something to filter results
      console.log('Filtering results')
    }
  }
}
</script>

<style scoped>
.gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.375) 0.79%,
    rgba(0, 0, 0, 0.175) 17.08%,
    rgba(0, 0, 0, 0.1) 31.87%,
    rgba(0, 0, 0, 0) 99.17%
  );
  border-radius: 8px;
  z-index: 2;
}
</style>
