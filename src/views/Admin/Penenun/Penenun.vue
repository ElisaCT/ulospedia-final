<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <Sidebar />
    <div class="ml-80 pt-10 gap-6 mr-8">
      <div class="flex flex-row justify-between items-center">
        <h3 class="font-medium text-3xl text-left pb-6">Daftar Penenun</h3>
        <router-link to="add-penenun">
          <button
            id="btn-tambah-penenun"
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
            Tambah Penenun
          </button>
        </router-link>
      </div>
      <!-- Tabel -->
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-4 bg-neutral_10">
        <div class="flex justify-between mb-6 py">
          <div class="font-medium text-xl">Tabel Data Penenun</div>
          <!-- Search -->
          <div class="">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1 gap-3">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                  <path
                    stroke="#C2C2C2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M9.583 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM18.333 18.333l-1.666-1.666"
                  />
                </svg>
              </div>
              <input
                v-model="search"
                type="text"
                id="table-search"
                class="block p-2 pl-10 text-base font-normal text-neutral_90 rounded-lg w-80 bg-neutral_20 focus:ring-neutral_50 focus:border-neutral_80"
                placeholder="Cari berdasarkan nama penenun"
              />
            </div>
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-neutral_70 font-bold bg-[#F8F7FA] uppercase w-full rounded">
            <tr>
              <th scope="col" class="px-6 py-3">
                <button
                  id="btn-sort-nama-penenun"
                  @click="sortedBy('name')"
                  class="flex flex-row items-center gap-3"
                >
                  Nama Penenun
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="none">
                    <path
                      stroke="#757575"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="m16.3 10.27-2.717-2.716a.827.827 0 0 0-1.166 0L9.7 10.271M16.3 17.73l-2.717 2.716a.827.827 0 0 1-1.166 0L9.7 17.729"
                    />
                  </svg>
                </button>
              </th>
              <th scope="col" class="px-6 py-3">
                <button
                  id="btn-sort-alat-tenun"
                  @click="sortedBy('theLoom')"
                  class="flex flex-row items-center gap-3"
                >
                  Alat Tenun
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="none">
                    <path
                      stroke="#757575"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="m16.3 10.27-2.717-2.716a.827.827 0 0 0-1.166 0L9.7 10.271M16.3 17.73l-2.717 2.716a.827.827 0 0 1-1.166 0L9.7 17.729"
                    />
                  </svg>
                </button>
              </th>
              <th scope="col" class="px-6 py-3">
                <button
                  id="btn-sort-teknik-tenun"
                  @click="sortedBy('technique')"
                  class="flex flex-row items-center gap-3"
                >
                  Teknik Tenun
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="none">
                    <path
                      stroke="#757575"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="m16.3 10.27-2.717-2.716a.827.827 0 0 0-1.166 0L9.7 10.271M16.3 17.73l-2.717 2.716a.827.827 0 0 1-1.166 0L9.7 17.729"
                    />
                  </svg>
                </button>
              </th>
              <th scope="col" class="px-6 py-3">
                <button
                  id="btn-sort-suku-penenun"
                  @click="sortedBy('ethnic')"
                  class="flex flex-row items-center gap-3"
                >
                  Suku
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="none">
                    <path
                      stroke="#757575"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="m16.3 10.27-2.717-2.716a.827.827 0 0 0-1.166 0L9.7 10.271M16.3 17.73l-2.717 2.716a.827.827 0 0 1-1.166 0L9.7 17.729"
                    />
                  </svg>
                </button>
              </th>

              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <template v-if="sortedItems.length > 0">
            <tbody class="divide-y divide-neutral_30 text-neutral_90">
              <tr
                id="baris-daftar-penenun"
                class="hover:bg-primary_surface hover:cursor-pointer"
                v-for="(weavers, id) in sortedItems"
                :key="id"
              >
                <td class="px-6 py-4" @click="goToDetailPage(weavers.id)">{{ weavers.name }}</td>
                <td class="px-6 py-4" @click="goToDetailPage(weavers.id)">{{ weavers.theLoom }}</td>
                <td class="px-6 py-4" @click="goToDetailPage(weavers.id)">
                  {{ weavers.technique }}
                </td>
                <td class="px-6 py-4" @click="goToDetailPage(weavers.id)">{{ weavers.ethnic }}</td>

                <td class="px-6 py-4">
                  <div class="flex gap-4">
                    <router-link :to="'/admin/edit-penenun/' + weavers.id">
                      <button id="btn-edit-penenun" class="p-[10px] bg-secondary_surface rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                          <path
                            stroke="#ECB11F"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M7.333 1.333H6C2.667 1.333 1.333 2.667 1.333 6v4c0 3.333 1.334 4.667 4.667 4.667h4c3.333 0 4.667-1.334 4.667-4.667V8.667"
                          />
                          <path
                            stroke="#ECB11F"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1.5"
                            d="M10.693 2.013 5.44 7.267c-.2.2-.4.593-.44.88l-.287 2.006c-.106.727.407 1.234 1.134 1.134L7.853 11c.28-.04.674-.24.88-.44l5.254-5.253c.906-.907 1.333-1.96 0-3.294-1.334-1.333-2.387-.906-3.294 0Z"
                          />
                          <path
                            stroke="#ECB11F"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1.5"
                            d="M9.94 2.767a4.763 4.763 0 0 0 3.293 3.293"
                          />
                        </svg>
                      </button>
                    </router-link>
                    <DeleteConfirmation
                      :weaver-id="weavers.id"
                      @weaver-deleted="handleWeaverDeleted"
                      class="z-10"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
          <template v-else>
            <tr>
              <td colspan="5">
                <EmptyState :name="propName" />
              </td>
            </tr>
          </template>
        </table>

        <!-- pagination -->
        <div class="flex flex-row justify-between items-center w-full pt-3">
          <p class="font-normal text-sm text-neutral_60">
            Menampilkan 1 sampai {{ totalElementOnPage }} dari {{ totalElement }} data
          </p>
          <div class="flex flex-row gap-4 items-center">
            <button
              @click="previousPage"
              :disabled="isLoading || pageNo === 1"
              class="p-1 bg-neutral_30 rounded disabled:bg-neutral_20 disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <path
                  stroke="#616161"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="M10 13.28 5.653 8.933a1.324 1.324 0 0 1 0-1.866L10 2.72"
                />
              </svg>
            </button>
            <div class="p-1 bg-primary_surface text-sm text-center text-primary_hover rounded">
              <span class="p-1 w-5 h-5">{{ pageNo }}</span>
            </div>
            <button
              @click="nextPage"
              :disabled="isLoading || lastPage"
              class="p-1 bg-neutral_30 rounded disabled:bg-neutral_20 disabled:opacity-50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                <path
                  stroke="#616161"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="m5.94 13.28 4.347-4.347a1.324 1.324 0 0 0 0-1.866L5.94 2.72"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '../../../components/Admin/Sidebar.vue'
import DeleteConfirmation from '../../../components/Admin/Modals/DeleteConfirmation.vue'
//import DiscardConfirmation from '../../../components/Admin/Modals/DiscardConfirmation.vue'
//import SaveSuccess from '../../../components/Admin/Modals/SaveSuccess.vue'
import EmptyState from '../../../components/Admin/EmptyState.vue'
import axios from 'axios'
export default {
  // ini waktu di mau hit api nya
  // ini udah deploy di server del
  mounted() {
    // const token = localStorage.getItem('token')
    // const apiUrl = `http://company.ditenun.com/api/v1/ulospedia/weavers?pageNo=${this.pageNo}${
    //   this.sortBy !== '' ? '&sortBy=' + this.sortBy : ''
    // }${this.sortDir !== '' ? '&sortDir=' + this.sortDir : ''}${
    //   this.search !== '' ? '&searchByName=' + this.search : ''
    // }`
    // axios
    //   .get(apiUrl, {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   })
    //   .then((response) => {
    //     console.log(response.data)
    //     console.log(apiUrl)
    //     this.lastPage = response.data.data.weavers.lastPage
    //     this.weavers = response.data.data.weavers.weaversListAdminDashboard
    //     this.totalElement = response.data.data.weavers.totalAllElements
    //     this.totalElementOnPage = response.data.data.weavers.totalElementsOnPage
    //   })
    this.fetchWeavers()
  },
  data() {
    return {
      weavers: [],
      totalElement: 0,
      totalElementOnPage: 0,

      lastPage: true,
      moveState: false,
      isLoading: false,
      propName: 'Penenun',

      // sort
      sortDir: 'asc',
      pageNo: 1,
      search: '',
      sortBy: 'updatedAt',
    }
  },
  methods: {
    goToDetailPage(weaverId) {
      this.$router.push(`/admin/penenun/detail-penenun/${weaverId}`)
    },
    handleWeaverDeleted(weaverId) {
      this.weavers = this.weavers.filter((weaver) => weaver.id !== weaverId)
    },
    defineParam(pageNo, sortBy, sortDir, search) {
      return `http://company.ditenun.com/api/v1/ulospedia/weavers?pageNo=${pageNo}${
        sortBy !== '' ? '&sortBy=' + sortBy : ''
      }${sortDir !== '' ? '&sortDir=' + sortDir : ''}${
        search !== '' ? '&searchByName=' + search : ''
      }`
    },
    // async sortByName() {
    //   if (!this.moveState) {
    //     this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc'
    //   } else {
    //     this.moveState = false
    //     this.sortDir = 'asc'
    //   }
    //   const token = localStorage.getItem('token')
    //   const url = this.defineParam(this.pageNo, 'name', 'asc', '')
    //   console.log(url)
    //   const response = await axios.get(url, {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   })
    //   console.log(response)
    //   this.weavers = response.data.data.weavers.weaversListAdminDashboard
    //   this.totalElement = response.data.data.weavers.totalAllElements
    //   this.totalElementOnPage = response.data.data.weavers.totalElementsOnPage

    //   // cek apakah current page adalah page terakhir
    //   if (!response.data.data.weavers.lastPage) {
    //     this.pageNo = this.pageNo + 1
    //     this.lastPage = false
    //   } else {
    //     this.lastPage = true
    //   }
    // },
    async nextPage() {
      console.log('DITEKAN')
      console.log(this.lastPage)
      if (this.lastPage) {
        return
      }

      this.isLoading = true

      try {
        const token = localStorage.getItem('token')
        const url = this.defineParam(this.pageNo + 1, 'name', 'asc', '')
        console.log(url)
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log(response.data)
        this.weavers = response.data.data.weavers.weaversListAdminDashboard
        this.totalElement = response.data.data.weavers.totalAllElements
        this.totalElementOnPage = response.data.data.weavers.totalElementsOnPage

        // cek apakah current page adalah page terakhir
        if (!response.data.data.weavers.lastPage) {
          this.pageNo = this.pageNo + 1
          this.lastPage = false
        } else {
          this.pageNo = this.pageNo + 1
          this.lastPage = true
        }
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
    async previousPage() {
      console.log('DITEKAN')
      if (this.pageNo === 1) {
        return
      }

      this.isLoading = true

      try {
        const token = localStorage.getItem('token')
        const url = this.defineParam(this.pageNo - 1, 'name', 'asc', '')
        console.log(url)
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log(response.data)
        this.weavers = response.data.data.weavers.weaversListAdminDashboard

        // cek apakah current page adalah page terakhir
        if (!response.data.data.weavers.lastPage) {
          this.pageNo = this.pageNo - 1
          this.lastPage = false
        } else {
          this.pageNo = this.pageNo - 1
          this.lastPage = true
        }
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
    async fetchWeavers() {
      try {
        const token = localStorage.getItem('token')
        const apiUrl = `http://company.ditenun.com/api/v1/ulospedia/weavers?pageNo=${this.pageNo}${
      this.sortBy !== '' ? '&sortBy=' + this.sortBy : ''
    }${this.sortDir !== '' ? '&sortDir=' + this.sortDir : ''}${
      this.search !== '' ? '&search=' + this.search : ''
    }`
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response)=>{
        this.lastPage = response.data.data.weavers.lastPage
        this.weavers = response.data.data.weavers.weaversListAdminDashboard
        this.totalElement = response.data.data.weavers.totalAllElements
        this.totalElementOnPage = response.data.data.weavers.totalElementsOnPage
      })
        
      }catch (error) {
        console.error(error)
      }
    },
    sortedBy(key) {
      this.sortDir = this.sortBy === key ? (this.sortDir === 'asc' ? 'desc' : 'asc') : 'asc'

      this.sortBy = key
      console.log(key)
      console.log(this.sortDir)
    }
  },
  computed: {
    sortedItems() {
       const sorted = [...this.weavers]

      // search result
      const filtered = sorted.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      )
      console.log(this.search)

      filtered.sort((a, b) => {
        if (a[this.sortBy] > b[this.sortBy]) {
          return this.sortDir === 'asc' ? 1 : -1
        }
        if (a[this.sortBy] < b[this.sortBy]) {
          return this.sortDir === 'asc' ? -1 : 1
        }
        return 0
      })
      return filtered
    }
  },
  components: {
    Sidebar,
    DeleteConfirmation,

    EmptyState
  }
}
</script>
<style scoped>
#app {
  background-color: #fcfbfd;
}
</style>
