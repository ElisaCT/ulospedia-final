<template>
  <div>
    <button
      @click="showModal = true"
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

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-10">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-neutral_10 opacity-50"></div>

      <div class="rounded-lg p-8 shadow-lg md:w-1/3 sm:w-full bg-neutral_10 z-50">
        <div class="flex flex-col gap-4 w-full mr-4">
          <h5 class="font-bold text-left text-xl">Tambah Gambar Ulos</h5>
          <div class="flex flex-col gap-6 md:flex-row pb-6">
            <label for="ulos-name" class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
              >Gambar Ulos*</label
            >
            <div class="flex items-center">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-36 h-36 border-2 border-neutral_60 border-dashed rounded-lg cursor-pointer bg-neutral_10"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="40"
                    height="40"
                    fill="none"
                  >
                    <path fill="url(#a)" d="M0 0h40v40H0z" />
                    <defs>
                      <pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox">
                        <use xlink:href="#b" transform="scale(.01)" />
                      </pattern>
                      <image
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH+UlEQVR4nO1da6hUVRQ+vV8G2YuKDPpT9sQkLdAgiAh/SCE9jULMHlQU3R4WFFdNKNSsG5di7pzv286NazoVlpJIFmpFZV4rH6VYEpSmvdTUSk2dWN0tDNOcc/Z5zTlzZ3+wYH4c9mN9c/Zee62113EcCwsLCwsLCwsLCwsLCwsLCwuLFkV7e/vhJIe5rns7yTaSE/uZtMncXNe9XObq5BWu654F4GUAW0hWWkR+ItlRKBTOdPKCSqVyGMmnSP6ZAwVVshAAu+XtEV1kSka5XD4OQDlrhTA/Mld0kgkZ8m8A8HoOlFDJmbyZyZuil6msJ1/JowB4ouEbuMGesQvA5yQX9ydB35x2Bc1dKXVGwwgRa8rn37GN5PiOjo5jnH4KpdSxJCcA2O6jh5caMhixvb1MWyEDwIVOi2DWrFkX+ZCyuSF7SbFYHO7zqo53WgxKqbu99CGHx9QHQHKsxwB29udlKmD5qrunALjNSRskH/MgZIXToiC5woOQR1PvHMAkj86XOC0KAEs8dDKpEZ1bQmpgCckZLCERAeA0APcAmEfyK5I/AlhNcgHJB+XAG7Fdu2RFsITatVfW74S9h+Q013VPDNO+JSQElFInAfgwpD9qTVdX19mmfVhCDNHe3n4kgI8jOgjXmrrSLSGGIPl0TK+tkT/KEmIA2Qf8nH+GssckPGsJMQCAO33++VsAPEnyFvE8APjeh5Q2g76slRUEksqDjD9IDqp+tlgsnuyTnLEgqC9LiAFILvVQ8Csez0/2eP7roL4sIQYA8KWHS/zxes+7rjvOg5DNBn3ZJSuqkki6Hs8/73UmidqXdS5WgWTBQ0l/FYvFC2qeHUTyd4/n33ICYAkxgLagKj4b+wwAj+g34xefZx8I6ssSYgCJXupUzzgHw92lUumUoL4sIYYA8FDMg+Fkw37sHhIi73hhxLfj00KhcJRJP5aQ8EvXGyEJ+cRkqToES0hIlMvlI1zXvc9v89ayQ1wp5XL56DDtW0IiQtzpSqkbxCQGsAhAr04PFdzc2dk5IEq7lpCcwRKSM5C8CsAcHQK2J/W8oFAonCo3qXTCuXWd5AU9PT0DxQMgMZeWSZRzXfcyANNJLhePLIAf9O8ZJC+JmCJ0I8kX9Ya/Qf/T/9FLkfi6vgHwNsnnAIwKMgIacks3a0J6enoGyl0+AAd9DnUHZU2XZ/3a6u7uPgHAXSSX+bXn089eTdAYSahwskCWhHR1dZ1L8ltDZW0HcIVXvF0nQPwa07VSLRslCa/hxGRFSKlUOk8yDQ3J+FkpNaReO0qpmwBsSpCI2r5XKaVGOP2ZkFl9N5W2hHgz/neLS9Z7kq+lRUSNHCA5RTwETn8jRCk1xMDlcUhkA762to1SqXSObMgNIqNaJ++FTUvNNSEkhx2y6X0mvVrXHhlX78aSRAdNl7o6ba8Ul4pc1dNWXJQ2euV84jQ7IUqpEdrZ5zfhZX7/QP1mRCJDTN3u7u7Tq+Y9MsbbslwsOqdZCVFKXW1wF3xxoVA43qsNvWdEXqYArKtuT/aDmMvX/FRu5aZNCMnrJBEhYIILgxKhAXTHVODaOmOrxBGvFKTcEkJydK2Drk4/84LiFWLaxlVeGoSQ3Oe67sVOMxBiQgbJuUFhVZ1kvSmnhIh8lOjSlQYhSqlbtcla8ZHZJqdgAM8kobgUCREZHVVXqRMiJiuA/QHK6TJx1IklE+LMkiUhy508EkLyXn2q9Rv8q6ZeUykIk5TSUiZEZJiTJ0JI3h/kYQUwPWSby5qFEKmo5OSFEJPiZwCejRDPONhEhGwKM7/UCNGlVoMG3B52XEmYuo0kRMR13fOdLAmRO+ABSjgYtWCLRPqajZBEyllFIUSndPoqTC83D8cY16ImJGRa1PlGJkRXoOsKGJhYWhNijuu7gFDravG8hpBynT56Q8o6P5NevA5x5hyaEO2QKwX8E/crpe6IOy56X7hZWe21bTSUUoNJbvWY/7KGESIuDp085vdm7JN4Q+xBOf8Rss9jXIm0H3NsXhdKv2gIIeL80xV3/N6MvSSvdxICvf1gmdeBJDnTQwe9qRMilXcAvBtAxt+S1+QkCHpkkEikT4JdDYlv10D+mJIi5FXjOJGQhR8hOs/p/QAydiulrklkxlWQDTRgecydlVXPcEiyCOYagzJIOyUxOfYg6oDkO81GCMmpToplYoMmuF0pdWXsAXhA0jubkJCxTlyIlzLC5H4jOdRJEQBGNRshYYqkBX3SyPi6sWQRFovFS52U0dnZOUBbbs1CyPrEJi+f+THsdHNt1YQ0gb7E52YhZEpiE5eiXgYFJUU2pvzpiJE1ChvTDISI305ylRMjJIQbPVUBMKd6TBJz13+CXBNiUoMrNLQHd27GpOypTdOUKwF5J8TrmkRsSLJaDkiZWKcS6aocEzLbSRPypkhGnkHqZyoCYJuU6KuTF3wgh4TsaNg3D+WbS1JWVSyrDEh5oY7ypuSNELnD6DQaem8Zqk/0bfo2aqpCcnJtEp04E+V+RgzlbahTMyUOITOdVofbl1baG5EQCZwNTsKkFidirr+bm8Fl/uURlblVB5dmRv20rJDRip+C8oUOC8yPuwdEWabsmxFsDdYN9SYsOzLZwJsRpb7r1YtTJGNBbeVsCzNLUO6jfJYECTqnbEFqJ/BWQrFYHC6JzxEv+ayX807ijkKLPoiZq2ufTNMh4aVVSW8f6NqNU+WMlUhwycLCwsLCwkkO/wKU32vtpJt5YwAAAABJRU5ErkJggg=="
                        id="b"
                        width="100"
                        height="100"
                      />
                    </defs>
                  </svg>
                  <p class="my-2 text-sm text-neutral_70">
                    <span class="font-normal">Gambar Ulos</span>
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  accept="image/png, image/jpg, image/jpeg"
                />
              </label>
            </div>
          </div>
          <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
            <label for="ulos-name" class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
              >Nama Ulos*</label
            >
            <div class="md:w-2/3">
              <input
                type="text"
                id="ulos-name"
                class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                placeholder="Contoh: Harungguan"
                required
              />
            </div>
          </div>
          <!-- Asal suku -->
          <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
            <label for="ulos-ethnic" class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
              >Asal Suku Ulos*</label
            >
            <div class="md:w-2/3 relative inline-block">
              <select
                class="block appearance-none w-full bg-neutral_10 border border-primary_border text-primary_pressed text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
                required
              >
                <option value="" disabled selected hidden>Pilih Suku Ulos</option>
                <option value="option1" class="pb-3 hover:bg-primary_surface">Batak Toba</option>
                <option value="option2" class="pb-3 hover:bg-primary_surface">
                  Batak Simalungun
                </option>
                <option value="option3" class="pb-3 hover:bg-primary_surface">Batak Karo</option>
                <option value="option2" class="pb-3 hover:bg-primary_surface">Batak Angkola</option>
                <option value="option3" class="pb-3 hover:bg-primary_surface">
                  Batak Mandailing
                </option>
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
          <div class="flex flex-row gap-6 justify-end mt-6">
            <button
              @click="showModal = false"
              class="px-6 py-3 rounded-lg bg-neutral_20 text-center text-lg font-medium text-neutral_70"
            >
              Batal
            </button>
            <button
              @click="sumbit"
              class="px-4 py-3 rounded-lg bg-primary_main text-center text-lg font-medium text-neutral_10"
            >
              Simpan
            </button>
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
    submit() {
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
