<template>
  <div>
    <!-- Discard button -->
    <button @click="showModal = true" class="text-red-500">Save Success</button>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-neutral_10 opacity-50"></div>

      <div class="bg-white rounded-lg p-6 shadow-lg md:w-1/3 sm:w-full bg-neutral_10 z-50">
        <div class="flex flex-row gap-4 w-full mr-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
              <rect width="48" height="48" x="4" y="4" fill="#B8DBCA" rx="24" />
              <path
                stroke="#43936C"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m23.5 28 3 3 6-6m5.5 3c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
              />
              <rect width="48" height="48" x="4" y="4" stroke="#ECFDF3" stroke-width="8" rx="24" />
            </svg>
          </div>
          <div>
            <h2 class="text-xl text-neutral_90 font-medium mb-3">Perubahan berhasil disimpan</h2>
            <p class="text-neutral_70 text-left text-sm font-normal">
              Perubahan sudah berhasil disimpan. Lihat perubahan data.
            </p>
            <div class="mt-8 flex justify-end gap-3">
              <!-- Confirm button -->
              <button
                @click="showData"
                class="text-neutral_10 rounded-lg bg-primary_main px-4 py-2"
              >
                Lihat Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    showData() {
      // Perform the delete action here
      // Example: Make an API call to delete the item
      // Once the delete action is complete, you can close the modal
      this.showModal = false
    }
  }
}
</script>

<style>
/* Add Tailwind CSS classes or customize as needed */
</style>
