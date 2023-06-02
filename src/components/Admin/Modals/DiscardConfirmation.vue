<template>
  <div>
    <!-- Discard button -->
    <button @click="showModal = true" class="text-red-500">Discard</button>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-neutral_10 opacity-50"></div>
      <!-- Modal -->
      <div class="bg-white rounded-lg p-6 shadow-lg md:w-1/3 sm:w-full bg-neutral_10 z-50">
        <div class="flex flex-row gap-4 w-full mr-4">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none">
              <rect width="48" height="48" x="4" y="4" fill="#F9E5B4" rx="24" />
              <path
                stroke="#ECB11F"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M23 19v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C23.76 24 24.04 24 24.6 24h6.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C33 23.24 33 22.96 33 22.4V20m0 17v-6.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C32.24 29 31.96 29 31.4 29h-6.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C23 29.76 23 30.04 23 30.6V37m14-11.674V32.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C34.72 37 33.88 37 32.2 37h-8.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C19 34.72 19 33.88 19 32.2v-8.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C21.28 19 22.12 19 23.8 19h6.874c.49 0 .734 0 .965.055.204.05.399.13.578.24.201.123.374.296.72.642l3.126 3.126c.346.346.519.519.642.72.11.18.19.374.24.578.055.23.055.475.055.965Z"
              />
              <rect width="48" height="48" x="4" y="4" stroke="#FFFAEB" stroke-width="8" rx="24" />
            </svg>
          </div>
          <div>
            <h2 class="text-xl text-neutral_90 font-medium mb-3">Perubahan belum disimpan</h2>
            <p class="text-neutral_70 text-left text-sm font-normal">
              Apakah Anda ingin menyimpan atau membuang perubahan?
            </p>
            <div class="mt-8 flex justify-end gap-3">
              <!-- Cancel button -->
              <button
                @click="showModal = false"
                class="mr-2 rounded-lg border border-primary_surface px-4 py-2 text-neutral_80"
              >
                Batal
              </button>
              <!-- Delete button -->
              <button
                @click="discardItem"
                class="text-neutral_10 rounded-lg bg-primary_main px-4 py-2"
              >
                Konfirmasi
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
    discardItem() {
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
