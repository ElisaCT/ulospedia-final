<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <Sidebar />
    <div class="ml-80 pt-10 gap-6 mr-8">
      <div class="flex flex-row justify-between items-center">
        <h3 class="font-medium text-3xl text-left pb-6">Daftar Ulos</h3>
        <router-link to="add-ulos">
          <button
            id="btn-tambah-ulos"
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
            Tambah Ulos
          </button>
        </router-link>
      </div>
      <!-- Tabel -->
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-4 bg-neutral_10">
        <div class="flex justify-between mb-6 py">
          <div class="font-medium text-xl">Tabel Data Ulos</div>
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
                type="text"
                id="table-search"
                class="block p-2 pl-10 text-base font-normal text-neutral_80 rounded-lg w-80 bg-neutral_20 focus:ring-neutral_50 focus:border-neutral_80"
                placeholder="Cari berdasarkan nama ulos"
                v-model="search"
              />
            </div>
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-neutral_70 font-bold bg-[#F8F7FA] w-full rounded">
            <tr>
              <th scope="col" class="px-6 py-3">
                <button
                  id="btn-sort-nama-ulos"
                  class="flex flex-row items-center gap-3"
                  @click="sortedBy('name')"
                >
                  Nama Ulos
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
                  id="btn-sort-suku-ulos"
                  class="flex flex-row items-center gap-3"
                  @click="sortedBy('ethnic')"
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
              <th scope="col" class="px-6 py-3">Ukuran</th>
              <th scope="col" class="px-6 py-3">
                <button
                  id="btn-sort-teknik-tenun"
                  class="flex flex-row items-center gap-3"
                  @click="sortedBy('technique')"
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

              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <template v-if="sortedItems.length > 0">
            <tbody class="divide-y divide-neutral_30 text-neutral_90">
              <tr
                id="baris-daftar-ulos"
                class="hover:bg-primary_surface hover:cursor-pointer"
                v-for="(ulos, id) in sortedItems"
                :key="id"
              >
                <td class="px-6 py-4" @click="goToDetailPage(ulos.id)">{{ ulos.name }}</td>
                <td class="px-6 py-4" @click="goToDetailPage(ulos.id)">{{ ulos.ethnic }}</td>
                <td class="px-6 py-4" @click="goToDetailPage(ulos.id)">
                  {{ ulos.width }}x{{ ulos.length }} cm
                </td>
                <td class="px-6 py-4" @click="goToDetailPage(ulos.id)">{{ ulos.technique }}</td>
                <td class="px-6 py-4">
                  <div class="flex gap-4">
                    <router-link :to="'/admin/edit-ulos/' + ulos.id">
                      <button id="btn-edit-ulos" class="p-[10px] bg-secondary_surface rounded">
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
                      :ulos-id="ulos.id"
                      @ulos-deleted="handleUlosDeleted"
                      class="z-10"
                    />

                    <!-- <router-link :to="'/admin/edit-ulos/' + ulos.id">
                      <button id="btn-hapus-ulos" class="p-[10px] bg-danger_surface rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                          <path
                            stroke="#CB3A31"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M14 3.987a67.801 67.801 0 0 0-6.68-.334c-1.32 0-2.64.067-3.96.2L2 3.987M5.667 3.313l.146-.873C5.92 1.807 6 1.333 7.127 1.333h1.746c1.127 0 1.214.5 1.314 1.114l.146.866M12.567 6.093l-.434 6.714c-.073 1.046-.133 1.86-1.993 1.86H5.86c-1.86 0-1.92-.814-1.993-1.86l-.434-6.714M6.887 11h2.22M6.333 8.333h3.334"
                          />
                        </svg>
                      </button>
                    </router-link> -->
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
          <p id="info-pagination" class="font-normal text-sm text-neutral_60">
            Menampilkan 1 sampai {{ totalElementOnPage }} dari {{ totalElement }} data
          </p>
          <div class="flex flex-row gap-4 items-center">
            <button
              id="btn-prev-pagination"
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
              id="btn-next-pagination"
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
import axios from 'axios'
import Sidebar from '../../../components/Admin/Sidebar.vue'
import DeleteConfirmation from '../../../components/Admin/Modals/DeleteConfirmation.vue'
import EmptyState from '../../../components/Admin/EmptyState.vue'
export default {
  components: {
    Sidebar,
    EmptyState,
    // eslint-disable-next-line vue/no-unused-components
    DeleteConfirmation
  },
  data() {
    return {
      ulosList: [],
      totalElement: 0,
      totalElementOnPage: 0,

      lastPage: true,
      moveState: false,
      isLoading: false,
      propName: 'Ulos',

      // utk sorting
      pageNo: 1,
      sortBy: 'updatedAt',
      sortDir: 'asc',
      search: ''
    }
  },
  mounted() {
    const token = localStorage.getItem('token')
    const apiUrl = `http://company.ditenun.com/api/v1/ulospedia/ulos?pageNo=${this.pageNo}${
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
      .then((response) => {
        console.log(response.data)
        this.lastPage = response.data.data.ulos.isLastPage
        this.ulosList = response.data.data.ulos.ulosElDashboardResponseList
        this.totalElement = response.data.data.ulos.totalEl
        this.totalElementOnPage = response.data.data.ulos.lastElOfPage
      })
  },
  computed: {
    sortedItems() {
      const sorted = [...this.ulosList]

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
  methods: {
    goToDetailPage(ulosId) {
      this.$router.push(`/admin/ulos/detail-ulos/${ulosId}`)
    },
    handleUlosDeleted(ulosId) {
      this.ulos = this.ulos.filter((ulos) => ulos.id !== ulosId)
    },
    defineParam(pageNo, sortBy, sortDir, search) {
      return `http://company.ditenun.com/api/v1/ulospedia/ulos?pageNo=${pageNo}${
        sortBy !== '' ? '&sortBy=' + sortBy : ''
      }${sortDir !== '' ? '&sortDir=' + sortDir : ''}${search !== '' ? '&search=' + search : ''}`
    },
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
        this.ulosList = response.data.data.ulos.ulosElDashboardResponseList
        this.totalElement = response.data.data.ulos.totalEl
        this.totalElementOnPage = response.data.data.ulos.lastElOfPage

        // cek apakah current page adalah page terakhir
        if (!response.data.data.ulos.lastPage) {
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
        this.ulosList = response.data.data.ulos.ulosElDashboardResponseList

        // cek apakah current page adalah page terakhir
        if (!response.data.data.ulos.lastPage) {
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
    sortedBy(key) {
      this.sortDir = this.sortBy === key ? (this.sortDir === 'asc' ? 'desc' : 'asc') : 'asc'

      this.sortBy = key
      console.log(key)
      console.log(this.sortDir)
    }
  }
}
</script>
<style scoped>
#app {
  background-color: #fcfbfd;
}
</style>
