<template>
  <div>
    <!-- Delete button -->
    <button @click="showModal = true" class="p-[10px] bg-danger_surface rounded">
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

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-neutral_10 opacity-50"></div>

      <div class="rounded-lg p-6 shadow-lg md:w-1/3 sm:w-full bg-neutral_10 z-50">
        <div class="flex flex-row gap-4 w-full mr-4">
          <div>
            <svg class="" xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
              <rect width="48" height="48" x="4" y="4" fill="#EEB4B0" rx="24" />
              <path
                stroke="#CB3A31"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M37 21.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3l-2.04.2M24.5 20.97l.22-1.31c.16-.95.28-1.66 1.97-1.66h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M34.85 25.14l-.65 10.07C34.09 36.78 34 38 31.21 38h-6.42c-2.79 0-2.88-1.22-2.99-2.79l-.65-10.07M26.33 32.5h3.33M25.5 28.5h5"
              />
              <rect width="48" height="48" x="4" y="4" stroke="#FEF3F2" stroke-width="8" rx="24" />
            </svg>
          </div>
          <div>
            <h2 class="text-xl text-neutral_90 font-medium mb-3">Yakin akan menghapus item ini?</h2>
            <p class="text-neutral_70 text-left text-sm font-normal">
              Apakah Anda yakin untuk menghapus item ini? Setelah dihapus item ini tidak bisa
              dikembalikan.
            </p>
            <div class="mt-8 flex justify-end gap-3">
              <!-- Cancel button -->
              <button
                id="btn-batal"
                @click="showModal = false"
                class="mr-2 rounded-lg border border-primary_surface px-4 py-2 text-neutral_80"
              >
                Batal
              </button>
              <!-- Delete button -->
              <button
                id="btn-hapus-confirm"
                @click="deleteItem"
                class="text-neutral_10 rounded-lg bg-danger_main px-4 py-2"
              >
                Hapus
              </button>
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
  data() {
    return {
      showModal: false
    }
  },
  props: ['weaverId'],
  methods: {
    async deleteItem() {
      const token = localStorage.getItem('token')
      const response = await axios.delete(
        `http://company.ditenun.com/api/v1/ulospedia/weavers/${this.weaverId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log(response.data)
      this.showModal = false
      this.$emit('weaver-deleted', this.weaverId)
    }
  }
}
</script>

<style>
/* Add Tailwind CSS classes or customize as needed */
</style>
