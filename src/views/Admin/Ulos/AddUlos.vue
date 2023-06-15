<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <!-- <div class="fixed inset-0 bg-[#FCFBFD]"></div> -->
  <div class="mx-40 py-10 gap-6 z-10">
    <div class="">
      <h3 class="font-semibold text-2xl text-neutral_90 text-left pb-6">Tambah Ulos</h3>
      <!-- stepper -->
      <div class="stepper">
        <div :hidden="currentStep != 1">
          <ol
            class="flex items-center w-full text-sm font-medium text-center text-neutral_80 dark:text-gray-400 sm:text-base pb-6"
          >
            <li
              class="flex md:w-full items-center text-primary_main dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-neutral_80"
              >
                <span class="mr-2">1</span>
                Gambar <span class="hidden sm:inline-flex sm:ml-2">Ulos</span>
              </span>
            </li>
            <li
              class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-neutral_80"
              >
                <span class="mr-2">2</span>
                Informasi <span class="hidden sm:inline-flex sm:ml-2">Ulos</span>
              </span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">3</span>
              Produk <span class="hidden sm:inline-flex sm:ml-2">Ulos</span>
            </li>
          </ol>
        </div>

        <div :hidden="currentStep != 2">
          <ol
            class="flex items-center w-full text-sm font-medium text-center text-neutral_80 dark:text-gray-400 sm:text-base pb-6"
          >
            <li
              class="flex md:w-full items-center text-primary_main dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-neutral_80"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Gambar <span class="hidden sm:inline-flex sm:ml-2">Ulos</span>
              </span>
            </li>
            <li
              class="flex md:w-full items-center text-primary_main after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-neutral_80"
              >
                <span class="mr-2">2</span>
                Informasi <span class="hidden sm:inline-flex sm:ml-2">Ulos</span>
              </span>
            </li>
            <li class="flex items-center">
              <span class="mr-2">3</span>
              Produk <span class="hidden sm:inline-flex sm:ml-2">Ulos</span>
            </li>
          </ol>
        </div>

        <div :hidden="currentStep != 3">
          <ol
            class="flex items-center w-full text-sm font-medium text-center text-neutral_80 dark:text-gray-400 sm:text-base pb-6"
          >
            <li
              class="flex md:w-full items-center text-primary_main dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-neutral_80"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Gambar <span class="hidden sm:inline-flex sm:ml-2">Ulos</span>
              </span>
            </li>
            <li
              class="flex md:w-full items-center text-primary_main after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-neutral_80"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Informasi <span class="hidden sm:inline-flex sm:ml-2">Ulos</span>
              </span>
            </li>
            <li class="flex items-center text-primary_main">
              <span class="mr-2">3</span>
              Produk <span class="hidden sm:inline-flex sm:ml-2">Ulos</span>
            </li>
          </ol>
        </div>

        <div class="step-content">
          <!-- image -->
          <div v-show="currentStep === 1" class="bg-neutral_10 rounded-lg shadow-md p-8 ml-6">
            <h5 id="stepper-tambah-ulos" class="font-medium text-xl text-neutral_90 text-left pb-6">
              Gambar Ulos
            </h5>
            <div class="flex flex-row gap-6">
              <div class="text-sm text-left text-neutral_80 gap-3 w-56">
                <p class="font-medium pb-3">Gambar Ulos Utuh*</p>
                <p class="font-normal">
                  Gambar utama adalah gambar yang akan ditampilkan pada kartu ulos dan wajib untuk
                  diisi
                </p>
              </div>

              <div class="flex flex-row gap-6 pt-6">
                <form @submit.prevent="submitForm" class="flex flex-row gap-6">
                  <div v-for="(field, index) in ulosFields" :key="index">
                    <label class="relative block" for="dropzone-file">
                      <div
                        id="btn-tambah-gambar-utama"
                        class="file-input-content flex flex-col items-center justify-center w-36 h-36 border-2 border-neutral_60 border-dashed rounded-lg cursor-pointer bg-neutral_10"
                      >
                        <img
                          v-if="selectedImage"
                          :src="selectedImage"
                          alt="Preview"
                          class="w-24 h-24 object-cover rounded-lg"
                        />
                        <div v-else>
                          <svg
                            v-if="!selectedImage"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="40"
                            height="40"
                            fill="none"
                          >
                            <path fill="url(#a)" d="M0 0h40v40H0z" />
                            <defs>
                              <pattern
                                id="a"
                                width="1"
                                height="1"
                                patternContentUnits="objectBoundingBox"
                              >
                                <use xlink:href="#b" transform="scale(.01)" />
                              </pattern>
                              <image
                                xlink:href="data:image/png;base64,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"
                                id="b"
                                width="100"
                                height="100"
                              />
                            </defs>
                          </svg>
                          <p v-if="!selectedImage" class="my-2 text-sm text-neutral_70">
                            <span class="font-normal">Gambar Utama*</span>
                          </p>
                        </div>
                        <!-- <span class="file-input-text text-neutral_80">{{
                          index === 0 && field.fileName === '' ? 'Gambar Utama*' : field.fileName
                        }}</span> -->
                      </div>
                      <input
                        @change="handleFileChange1"
                        id="dropzone-file"
                        type="file"
                        accept="image/jpeg, image/png"
                        class="hidden"
                      />
                    </label>
                    <button
                      v-if="index > 0"
                      @click="removeField('ulosFields', index)"
                      class="absolute text-neutral_80"
                    >
                      Hapus
                    </button>
                  </div>
                </form>

                <button @click="addField('ulosFields')" :hidden="ulosFields.length >= 5">
                  <div
                    id="btn-tambah-gambar-lainnya-gambar-utama"
                    class="flex flex-col items-center justify-center w-36 h-36 border-2 border-neutral_60 border-dashed rounded-lg cursor-pointer bg-neutral_10 text-neutral_80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="40"
                      fill="none"
                    >
                      <path fill="url(#a)" d="M0 0h40v40H0z" />
                      <defs>
                        <pattern
                          id="a"
                          width="1"
                          height="1"
                          patternContentUnits="objectBoundingBox"
                        >
                          <use xlink:href="#b" transform="scale(.01)" />
                        </pattern>
                        <image
                          xlink:href="data:image/png;base64,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"
                          id="b"
                          width="100"
                          height="100"
                        />
                      </defs>
                    </svg>
                    Tambah Gambar Ulos
                  </div>
                </button>
              </div>
            </div>
            <!-- potongan ulos -->
            <div class="flex flex-row gap-6 pt-6">
              <div class="text-sm text-left text-neutral_80 gap-3 w-56">
                <p class="font-medium pb-3">Gambar Potongan Ulos</p>
                <p class="font-normal">
                  Gambar potongan ulos merupakan bagian detail dari gambar ulos utuh
                </p>
              </div>
              <div class="flex flex-row gap-6 pt-6">
                <form @submit.prevent="submitForm" class="flex flex-row gap-6">
                  <div v-for="(field, index) in potonganFields" :key="index">
                    <label class="relative block">
                      <input
                        type="file"
                        accept="image/jpeg, image/png"
                        class="hidden"
                        @change="handleFileChange2"
                        :required="index === 0"
                      />
                      <div
                        id="btn-tambah-gambar-potongan"
                        class="file-input-content flex flex-col items-center justify-center w-36 h-36 border-2 border-neutral_60 border-dashed rounded-lg cursor-pointer bg-neutral_10"
                      >
                        <img
                          v-if="selectedPiecesImage"
                          :src="selectedPiecesImage"
                          alt="Preview"
                          class="w-24 h-24 object-cover rounded-lg"
                        />
                        <svg
                          v-if="!selectedPiecesImage"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="40"
                          height="40"
                          fill="none"
                        >
                          <path fill="url(#a)" d="M0 0h40v40H0z" />
                          <defs>
                            <pattern
                              id="a"
                              width="1"
                              height="1"
                              patternContentUnits="objectBoundingBox"
                            >
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
                        <p v-if="!selectedPiecesImage" class="my-2 text-sm text-neutral_70"></p>
                      </div>
                    </label>
                    <button
                      id="btn-remove-gambar"
                      @click="removeField('potonganFields', index)"
                      class="absolute text-neutral_80"
                    >
                      Hapus
                    </button>
                  </div>
                </form>

                <button @click="addField('potonganFields')" :hidden="potonganFields.length >= 5">
                  <div
                    id="btn-tambah-gambar-lainnya-gambar-potongan"
                    class="flex flex-col items-center justify-center w-36 h-36 border-2 border-neutral_60 border-dashed rounded-lg cursor-pointer bg-neutral_10 text-neutral_80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="40"
                      fill="none"
                    >
                      <path fill="url(#a)" d="M0 0h40v40H0z" />
                      <defs>
                        <pattern
                          id="a"
                          width="1"
                          height="1"
                          patternContentUnits="objectBoundingBox"
                        >
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
                    {{ index === 0 ? 'Gambar Potongan Ulos' : 'Tambah Potongan Ulos' }}
                  </div>
                </button>
              </div>
            </div>

            <!-- motif ulos -->
            <div class="flex flex-row gap-6 pt-6">
              <div class="text-sm text-left text-neutral_80 gap-3 w-56">
                <p class="font-medium pb-3">Gambar Motif Ulos</p>
                <p class="font-normal">
                  Gambar motif ulos merupakan bagian yang lebih detail dari potongan ulos
                </p>
              </div>
              <div class="flex flex-row gap-6 pt-6">
                <form @submit.prevent="submitForm" class="flex flex-row gap-6">
                  <div v-for="(field, index) in motifFields" :key="index">
                    <label class="relative block">
                      <input
                        type="file"
                        accept="image/jpeg, image/png"
                        class="hidden"
                        @change="handleFileChange3"
                      />
                      <div
                        id="btn-tambah-gambar-motif"
                        class="file-input-content flex flex-col items-center justify-center w-36 h-36 border-2 border-neutral_60 border-dashed rounded-lg cursor-pointer bg-neutral_10 text-neutral_80"
                      >
                        <img
                          v-if="selectedMotifImage"
                          :src="selectedMotifImage"
                          alt="Image Preview"
                          class="w-24 h-24 object-cover rounded-lg"
                        />
                        <svg
                          v-if="!selectedMotifImage"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="40"
                          height="40"
                          fill="none"
                        >
                          <path fill="url(#a)" d="M0 0h40v40H0z" />
                          <defs>
                            <pattern
                              id="a"
                              width="1"
                              height="1"
                              patternContentUnits="objectBoundingBox"
                            >
                              <use xlink:href="#b" transform="scale(.01)" />
                            </pattern>
                            <image
                              xlink:href="data:image/png;base64,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"
                              id="b"
                              width="100"
                              height="100"
                            />
                          </defs>
                        </svg>
                        <p v-if="!selectedMotifImage" class="my-2 text-sm text-neutral_70"></p>
                      </div>
                    </label>
                    <button
                      @click="removeField('motifFields', index)"
                      class="absolute text-neutral_80"
                    >
                      Hapus
                    </button>
                  </div>
                </form>

                <button @click="addField('motifFields')" :hidden="motifFields.length >= 5">
                  <div
                    id="btn-tambah-gambar-lainnya-gambar-motif"
                    class="flex flex-col items-center justify-center w-36 h-36 border-2 border-neutral_60 border-dashed rounded-lg cursor-pointer bg-neutral_10 text-neutral_80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="40"
                      fill="none"
                    >
                      <path fill="url(#a)" d="M0 0h40v40H0z" />
                      <defs>
                        <pattern
                          id="a"
                          width="1"
                          height="1"
                          patternContentUnits="objectBoundingBox"
                        >
                          <use xlink:href="#b" transform="scale(.01)" />
                        </pattern>
                        <image
                          xlink:href="data:image/png;base64,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"
                          id="b"
                          width="100"
                          height="100"
                        />
                      </defs>
                    </svg>
                    Tambah Motif Ulos
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div v-show="currentStep === 2">
            <!-- ulos information -->
            <div class="bg-neutral_10 rounded-lg shadow-md p-8 ml-6">
              <h5 class="font-medium text-xl text-neutral_90 text-left pb-6">Informasi Ulos</h5>

              <form>
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-name"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Nama Ulos*</label
                  >
                  <div class="md:w-2/3">
                    <input
                      v-model="name"
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
                  <label
                    for="penenun-ethnic"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Asal Suku Ulos*</label
                  >
                  <div class="md:w-2/3 relative inline-block">
                    <select
                      id="dropdown-suku-ulos"
                      v-model="originEthnic"
                      class="block appearance-none w-full bg-neutral_10 border border-primary_border text-primary_pressed text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
                      required
                    >
                      <option value="" disabled selected hidden>Pilih Asal Suku Ulos</option>
                      <option value="Batak Toba" class="pb-3 hover:bg-primary_surface">
                        Batak Toba
                      </option>
                      <option value="Batak Simalungun" class="pb-3 hover:bg-primary_surface">
                        Batak Simalungun
                      </option>
                      <option value="Batak Karo" class="pb-3 hover:bg-primary_surface">
                        Batak Karo
                      </option>
                      <option value="Batak Angkola" class="pb-3 hover:bg-primary_surface">
                        Batak Angkola
                      </option>
                      <option value="Batak Mandailing" class="pb-3 hover:bg-primary_surface">
                        Batak Mandailing
                      </option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral_80"
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
                <!-- warna ulos -->
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-colors"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Warna Pada Ulos*</label
                  >
                  <div class="md:w-2/3 flex flex-row gap-3 text-neutral_90">
                    <div class="flex flex-row gap-2 pr-3">
                      <input
                        id="checkbox-merah"
                        type="checkbox"
                        v-model="colors.Merah"
                        value="true"
                      />
                      <span>Merah</span>
                    </div>
                    <div class="flex flex-row gap-2 pr-3">
                      <input
                        id="checkbox-hitam"
                        type="checkbox"
                        v-model="colors.Hitam"
                        value="hitam"
                      />
                      <span>Hitam</span>
                    </div>
                    <div class="flex flex-row gap-2 pr-3">
                      <input
                        id="checkbox-putih"
                        type="checkbox"
                        v-model="colors.Putih"
                        value="putih"
                      />
                      <span>Putih</span>
                    </div>
                    <div class="flex flex-row gap-2 pr-3">
                      <input
                        id="checkbox-kuning"
                        type="checkbox"
                        v-model="colors.Kuning"
                        value="kuning"
                      />
                      <span>Kuning</span>
                    </div>
                    <div class="flex flex-row gap-2 pr-3">
                      <input
                        id="checkbox-biru"
                        type="checkbox"
                        v-model="colors.Biru"
                        value="biru"
                      />
                      <span>Biru</span>
                    </div>
                    <div class="flex flex-row gap-2 pr-3">
                      <input
                        id="checkbox-hijau"
                        type="checkbox"
                        v-model="colors.Hijau"
                        value="hijau"
                      />
                      <span>Hijau</span>
                    </div>
                  </div>
                </div>
                <!-- JENIS ULOS -->
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-location"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Jenis Ulos</label
                  >
                  <div class="space-y-2">
                    <label class="inline-flex items-center pr-8">
                      <input
                        id="jenis-ulos-tradisional"
                        type="radio"
                        class="form-radio text-primary_main"
                        name="radioGroup"
                        value="Tradisional"
                        v-model="typeUlos"
                      />
                      <span class="ml-2 text-neutral_90">Tradisional</span>
                    </label>
                    <label class="inline-flex items-center">
                      <input
                        id="jenis-ulos-pengembangan"
                        type="radio"
                        class="form-radio text-primary_main"
                        name="radioGroup"
                        value="Pengembangan"
                        v-model="typeUlos"
                      />
                      <span class="ml-2 text-neutral_90">Pengembangan</span>
                    </label>
                  </div>
                </div>
                <!-- LOKASI ULOS -->
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-location"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Lokasi Asal Ulos</label
                  >
                  <div class="md:w-2/3">
                    <input
                      v-model="location"
                      type="text"
                      id="ulos-location"
                      class="bg-neutral_10 border border-primary_border text-neutral_70 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                      placeholder="Contoh: Balige"
                    />
                  </div>
                </div>
                <!-- UKURAN ULOS -->
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-size"
                    class="block mb-2 text-sm font-medium text-neutral_90 md:w-1/3"
                    >Ukuran Ulos</label
                  >
                  <div class="flex flex-row gap-6 w-auto">
                    <div class="flex md:w-2/3 gap-1">
                      <input
                        type="number"
                        min="0"
                        id="ulos-legth"
                        class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                        placeholder="Panjang"
                        v-model="length"
                      />
                      <span
                        class="inline-flex items-center px-3 text-sm text-neutral_80 bg-neutral_20 border border-neutral_60 rounded"
                      >
                        cm
                      </span>
                    </div>
                    <div class="flex md:w-2/3 gap-1">
                      <input
                        v-model="width"
                        type="number"
                        min="0"
                        id="ulos-width"
                        class="bg-neutral_10 border border-primary_border text-neutral_70 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                        placeholder="Lebar"
                      />
                      <span
                        class="inline-flex items-center px-3 text-sm text-neutral_80 bg-neutral_20 border border-neutral_60 rounded"
                      >
                        cm
                      </span>
                    </div>
                  </div>
                </div>

                <!-- teknik tenun -->
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-name"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Teknik Tenun yang digunakan*</label
                  >
                  <div class="md:w-2/3 relative inline-block">
                    <select
                      id="dropdown-teknik-tenun"
                      v-model="technique"
                      class="block appearance-none w-full bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
                      required
                    >
                      <option value="" disabled selected hidden>Pilih Teknik Tenun</option>
                      <option value="Ikat Lungsi" class="pb-3 hover:bg-primary_surface">
                        Teknik Ikat Lungsi
                      </option>
                      <option value="Ikat Pakan" class="pb-3 hover:bg-primary_surface">
                        Teknik Ikat Pakan
                      </option>
                      <option value="Ikan Ganda" class="pb-3 hover:bg-primary_surface">
                        Teknik Ikat Ganda
                      </option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
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

                <!-- makna dan fungsi ulos -->
                <div class="flex flex-col gap-6 md:flex-row pb-6">
                  <label
                    for="ulos-meaning"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Makna Ulos</label
                  >
                  <div class="md:w-2/3">
                    <textarea
                      v-model="meaning"
                      type="text"
                      id="ulos-meaning"
                      rows="4"
                      class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                      placeholder="Masukkan makna ulos"
                    ></textarea>
                  </div>
                </div>
                <div class="flex flex-col gap-6 md:flex-row pb-6">
                  <label
                    for="ulos-meaning"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Fungsi Ulos</label
                  >
                  <div class="md:w-2/3">
                    <textarea
                      v-model="func"
                      type="text"
                      id="ulos-meaning"
                      rows="4"
                      class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                      placeholder="Masukkan fungsi ulos"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div v-show="currentStep === 3">
            <div class="bg-neutral_10 rounded-lg shadow-md p-8 ml-6">
              <h5 class="font-medium text-xl text-neutral_90 text-left pb-6">
                Ketersedian Ulos pada E-commerce DiTenun
              </h5>
              <div>
                <form>
                  <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                    <label
                      for="ulos-name"
                      class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                      >Ulos Tersedia</label
                    >

                    <label class="relative inline-flex items-center cursor-pointer">
                      <input
                        id="status-togel-eccommerce"
                        type="checkbox"
                        value=""
                        class="sr-only peer"
                        v-model="toggleStatus"
                        @change="toggleAvailability"
                      />
                      <div
                        class="w-11 h-6 bg-neutral_70 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary_main rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral_60 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary_main"
                      ></div>
                    </label>
                  </div>

                  <div v-if="toggleStatus">
                    <h1>{{ formIndex }}</h1>
                    <div class="flex flex-col gap-6 md:flex-row pb-8">
                      <label
                        for="ulos-name"
                        class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                        >Gambar Produk*</label
                      >
                      <div class="flex items-center">
                        <label
                          for="dropzone-file"
                          :class="{
                            'flex flex-col items-center justify-center w-36 h-36 border-2 border-neutral_60 border-dashed rounded-lg cursor-pointer bg-neutral_10': true,
                            'opacity-50 border-neutral_50 cursor-not-allowed': !toggleStatus
                          }"
                          class="flex flex-col items-center justify-center w-36 h-36 border-2 border-neutral_60 border-dashed rounded-lg cursor-pointer bg-neutral_10"
                        >
                          <img
                            :src="selectedProductImage"
                            v-if="selectedProductImage"
                            alt="Preview"
                            class="w-24 h-24 object-cover rounded-lg"
                          />
                          <div
                            class="flex flex-col items-center justify-center pt-5 pb-6"
                            v-if="!selectedProductImage"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="40"
                              height="40"
                              fill="none"
                            >
                              <path fill="url(#a)" d="M0 0h40v40H0z" />
                              <defs>
                                <pattern
                                  id="a"
                                  width="1"
                                  height="1"
                                  patternContentUnits="objectBoundingBox"
                                >
                                  <use xlink:href="#b" transform="scale(.01)" />
                                </pattern>
                                <image
                                  xlink:href="data:image/png;base64,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"
                                  id="b"
                                  width="100"
                                  height="100"
                                />
                              </defs>
                            </svg>
                            <p v-if="!selectedProductImage" class="my-2 text-sm text-neutral_70">
                              <span class="font-normal">Gambar Produk*</span>
                            </p>
                          </div>
                          INDEX {{ formIndex }}
                          <input
                            id="dropzone-file"
                            type="file"
                            class="hidden"
                            accept="image/png, image/jpg, image/jpeg"
                            @change="handleFileChange4"
                          />
                        </label>
                      </div>
                    </div>

                    <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                      <label
                        for="ulos-name"
                        class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                        >Nama Produk*</label
                      >
                      <div class="md:w-2/3">
                        <input
                          v-model="productName"
                          type="text"
                          id="ulos-name"
                          :class="{
                            'bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5': true,
                            'bg-neutral_20 cursor-not-allowed border-neutral_20': !toggleStatus
                          }"
                          class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                          placeholder="Masukkan nama produk"
                          required
                        />
                      </div>
                    </div>
                    <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                      <label
                        for="ulos-price"
                        class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                        >Harga Produk*</label
                      >
                      <div class="md:w-2/3">
                        <input
                          v-model="price"
                          type="text"
                          id="ulos-price"
                          :class="{
                            'bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5': true,
                            'bg-neutral_20 cursor-not-allowed border-neutral_20': !toggleStatus
                          }"
                          class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                          placeholder="Masukkan harga produk"
                          required
                        />
                      </div>
                    </div>
                    <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                      <label
                        for="ulos-url"
                        class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                        >URL Produk*</label
                      >
                      <div class="md:w-2/3 text-neutral_80">
                        <input
                          v-model="productUrl"
                          type="text"
                          id="ulos-url"
                          :class="{
                            'bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5': true,
                            'bg-neutral_20 cursor-not-allowed border-neutral_20': !toggleStatus
                          }"
                          class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                          placeholder="contoh: https://ditenun.com/product/menik-lanyard/"
                          required
                        />
                      </div>
                    </div>
                    <button id="btn-remove-produk" @click="removeForm(form.id)">Remove</button>
                  </div>
                </form>
              </div>

              <button
                id="btn-tambah-produk-eccomerce"
                :disabled="!toggleStatus"
                @click="addForm"
                :class="{
                  'text-xs text-primary_main border rounded-lg border-primary_main p-2 flex flex-row justify-end items-end': true,
                  'opacity-50 border-neutral_50 cursor-not-allowed': !toggleStatus
                }"
              >
                Tambah Produk
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex-row gap-6 justify-end mt-6">
          <!-- Stepper navigation buttons -->
          <button
            id="btn-batal"
            @click="backToUlos"
            :hidden="currentStep > 1"
            class="px-6 py-3 rounded-lg bg-neutral_20 text-center text-lg font-medium text-neutral_70"
          >
            Batal
          </button>
          <button
            id="btn-kembali"
            @click="previousStep"
            :hidden="currentStep === 1"
            class="px-4 py-3 rounded-lg bg-neutral_20 text-center text-lg font-medium text-neutral_70"
          >
            Kembali
          </button>
          <button
            id="btn-selanjutnya"
            @click="nextStep"
            :hidden="currentStep === totalSteps"
            class="px-4 py-3 rounded-lg bg-primary_main text-center text-lg font-medium text-neutral_10"
          >
            Selanjutnya
          </button>
          <button
            @click="save"
            :hidden="currentStep < totalSteps"
            class="px-4 py-3 rounded-lg bg-primary_main text-center text-lg font-medium text-neutral_10"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import Multiselect from 'vue-multiselect'
import axios from 'axios'
// import { Field, ErrorMessage } from 'vee-validate'
// import * as yup from 'yup'
//import FormWizard from './components/FormWizard.vue';
//import FormStep from './components/FormStep.vue';
//import { ref, reactive, computed } from 'vue'
export default {
  components: {
    //Multiselect
    // Field,
    // ErrorMessage
  },
  watch: {
    mainImageReference(value) {
      console.log(value)
    },
    imageReference(value) {
      console.log(value)
    },
    imageMotifReference(value) {
      console.log(value)
    },
    name(value) {
      console.log(value)
    },
    originEthnic(value) {
      console.log(value)
    },
    colors(value) {
      console.log(value)
    },
    typeUlos(value) {
      console.log(value)
    },
    location(value) {
      console.log(value)
    },
    selectedColors(value) {
      console.log(value)
    },
    length(value) {
      console.log(value)
    },
    width(value) {
      console.log(value)
    },
    technique(value) {
      console.log(value)
    },
    meaning(value) {
      console.log(value)
    },
    func(value) {
      console.log(value)
    },
    state(value) {
      console.log(value)
    },
    ulosFields(value) {
      console.log(value)
    },
    forms(value) {
      console.log(value)
    },
    productName(value) {
      console.log(value)
    },
    price(value) {
      console.log(value)
    },
    productUrl(value) {
      console.log(value)
    },
    toggleStatus(value) {
      console.log(value)
    }
  },
  data() {
    // const schemas = [
    // yup.object({
    //   name: yup.string().required(),
    //   email: yup.string().required().email()
    // }),
    // yup.object({
    //   name: yup.string().required('Nama ulos harus diisi'),
    //   ethnic: yup.string().required('Suku ulos harus diisi'),
    //   color: yup.string().required('Pilih minimal 1 warna ulos'),
    //   typeUlos: yup.string().required('Suku penenun harus diisi'),
    //   location: yup.string().required('Suku penenun harus diisi'),
    //   technique: yup.string().required('Teknik tenun ulos harus diisi'),
    //   meaning: yup.string().required('Makna Ulos harus diisi'),
    //   width: yup.string().required('Lebar ulos ulos harus diisi'),
    //   length: yup.string().required('Panjang Ulos harus diisi'),
    //   func: yup.string().required('Fungsi Ulos harus diisi'),
    // }),
    // yup.object({
    //   productName: yup.string().required('Nama Produk ulos harus diisi'),
    //   productPrice: yup.string().required('Harga Produk ulos harus diisi'),
    //   urlProduct: yup.string().required('Url produk Ulos harus diisi'),
    // })
    // ]
    return {
      mainImage: null,
      name: '',
      originEthnic: null,
      color: null,
      typeUlos: null,
      location: '',
      length: null,
      width: null,
      technique: null,
      meaning: '',
      func: '',
      state: false,
      currentStep: 1,
      totalSteps: 3, // Adjust this number based on the total number of steps in your form
      selectedEthnic: null, // Vue data property to store the selected values
      ethincs: [
        'Batak Toba',
        'Batak Karo',
        'Batak Simalungun',
        'Batak Mandailing',
        'Batak Angkola'
      ], // Array of ethnics values for the dropdown
      selectedColors: [], // Vue data property to store the selected values
      colors: {
        Hitam: false,
        Merah: false,
        Putih: false,
        Hijau: false,
        Biru: false,
        Kuning: false
      },
      selectedTechnics: [],
      ulosFields: [{ fileName: '', image: null, file: null }],
      potonganFields: [{ fileName: '', image: null }],
      motifFields: [{ fileName: '', image: null }],
      productImage: [{ fileName: '', image: null }],
      forms: [],
      //imagePreview:null,
      selectedImage: null,
      selectedPiecesImage: null,
      selectedMotifImage: null,

      formIndex: 0,

      toggleStatus: false,
      selectedProductImage: null,
      productName: '',
      price: '',
      productUrl: ''
    }
  },
  methods: {
    async save() {
      console.log('CALLED')
      const token = localStorage.getItem('token')
      console.log(this.colors)

      const trueColors = Object.keys(this.colors).filter((color) => this.colors[color])

      const request1 = {
        name: this.name,
        colors: trueColors,
        originEthnic: this.originEthnic,
        type: this.typeUlos,
        location: this.location,
        length: this.length,
        width: this.width,
        technique: this.technique,
        meaning: this.meaning,
        func: this.func
      }

      const request2 = {
        name: this.productName,
        price: this.price,
        url: this.productUrl
      }

      console.log(request1)
      console.log(request2)

      //Ulos information
      const url1 = `http://company.ditenun.com/api/v1/ulospedia/ulos`

      let res1

      try {
        const response1 = await axios.post(url1, request1, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        console.log(response1.data)
        res1 = response1.data
      } catch (error) {
        console.error(error)
      }

      // main image
      const ulosId = res1.data.ulos.id
      console.log(ulosId)
      console.log(`http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/main-image`)

      const formData = new FormData()
      formData.append('main-image', this.mainImageReference)

      try {
        const responseDataImage = await axios.post(
          `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/main-image`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        console.log(responseDataImage)
      } catch (error) {
        console.log(error)
      }

      // pieces image
      console.log(ulosId)
      console.log(`http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/pieces-images`)

      formData.append('ulos-pieces-image', this.imageReference)

      try {
        const responseDataImage = await axios.post(
          `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/pieces-images`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        console.log(responseDataImage)
      } catch (error) {
        console.log(error)
      }

      // motif image
      console.log(ulosId)
      console.log(`http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/motif-images`)

      formData.append('ulos-motif-image', this.imageReference)

      try {
        const url4 = await axios.post(
          `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/motif-images`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        console.log(url4)
      } catch (error) {
        console.log(error)
      }

      //Availability Product
      const ava = `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/products/availability?state=${this.toggleStatus}`

      try {
        const response = await axios.post(
          ava,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }

      // Detail Product
      console.log(ulosId)
      console.log(`http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/products`)
      const url5 = `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/products`

      let productId

      try {
        const response1 = await axios.post(url5, request2, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
        console.log(response1.data)
        productId = response1.data.data.product.id
        console.log(productId)
      } catch (error) {
        console.error(error)
      }

      // // Image Product
      // console.log(ulosId)
      // console.log(productId)
      // console.log(
      //   `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/products/${productId}/image`
      // )

      // formData.append('product-image', this.imageReference)

      // try {
      //   const responseDataImage = await axios.post(
      //     `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/products/${productId}/image`,
      //     formData,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //         'Content-Type': 'multipart/form-data'
      //       }
      //     }
      //   )
      //   console.log(responseDataImage)
      // } catch (error) {
      //   console.log(error)
      // }

      // formData.append('product-image', this.imageReference)

      // try {
      //   const url6 = await axios.post(
      //     `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/products/${productId}/image`,
      //     formData,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //         'Content-Type': 'multipart/form-data'
      //       }
      //     }
      //   )
      //   console.log(url6)
      // } catch (error) {
      //   console.log(error)
      // }

      //detail text product

      // const url7 = `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/products`
      // const response7 = await axios.post(url7, request2, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'application/json'
      //   }
      // })
      // console.log(response7.data.data.product)

      // const url6 = `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/products`

      // let res6

      // try {
      //   const response6 = await axios.post(url6, request2, {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       'Content-Type': 'application/json'
      //     }
      //   })
      //   console.log(response6.data)
      //   // eslint-disable-next-line no-unused-vars
      //   res6 = response6.data
      // } catch (error) {
      //   console.error(error)
      // }

      // const responseDataText = await axios.post(
      //   `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/products`,
      //   {
      //     name: this.name,
      //     price: this.price,
      //     productUrl: this.productUrl
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       'Content-Type': 'application/json'
      //     }
      //   }
      // )
      // console.log(responseDataText.data)

      // other image
      // const url3 = `http://company.ditenun.com/api/v1/ulospedia/ulos/${ulosId}/other-images`

      // if (this.ulosFields.length !== 1) {
      //   if (this.ulosFields[1].file !== null) {
      //     for (let i = 1; i < this.ulosFields.length; i++) {
      //       const formData = new FormData()
      //       formData.append('other-image', this.ulosFields[i].file)
      //       const response3 = await axios.post(url3, formData, {
      //         headers: {
      //           Authorization: `Bearer ${token}`,
      //           'Content-Type': 'multipart/form-data'
      //         }
      //       })

      //       console.log(response3.data)
      //     }
      //   }
      // }

      this.$router.push('/admin/ulos')
    },
    handleFileChange1(event) {
      this.mainImageReference = event.target.files[0]
      const mainImageReference = event.target.files[0]

      if (mainImageReference) {
        // Create a FileReader to read the file
        const reader = new FileReader()
        reader.onload = (e) => {
          // Set the selected image data to the component's data
          this.selectedImage = e.target.result
          console.log('File name:', mainImageReference.name)
        }
        reader.readAsDataURL(mainImageReference) // Read the file as a data URL
      }
    },
    handleFileChange2(event) {
      this.imageReference = event.target.files[0]
      const imageReference = event.target.files[0]

      if (imageReference) {
        // Create a FileReader to read the file
        const reader = new FileReader()
        reader.onload = (e) => {
          // Set the selected image data to the component's data
          this.selectedPiecesImage = e.target.result
          console.log('File name:', imageReference.name)
        }
        reader.readAsDataURL(imageReference) // Read the file as a data URL
      }
    },
    handleFileChange3(event) {
      this.imageReference = event.target.files[0]
      const imageReference = event.target.files[0]

      if (imageReference) {
        // Create a FileReader to read the file
        const reader = new FileReader()
        reader.onload = (e) => {
          // Set the selected image data to the component's data
          this.selectedMotifImage = e.target.result
          console.log('File name:', imageReference.name)
        }
        reader.readAsDataURL(imageReference) // Read the file as a data URL
      }
    },
    handleFileChange4(event) {
      this.imageReference = event.target.files[0]
      const imageReference = event.target.files[0]

      if (imageReference) {
        // Create a FileReader to read the file
        const reader = new FileReader()
        reader.onload = (e) => {
          // Set the selected image data to the component's data
          this.selectedProductImage = e.target.result
          console.log('File name:', imageReference.name)
        }
        reader.readAsDataURL(imageReference) // Read the file as a data URL
      }
    },

    handleMainImage(event) {
      this.mainImage = event.target.files[0]
    },
    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    backToUlos() {
      this.$router.push('/admin/ulos')
    },
    // handleFileUpload(event, fileKey) {
    //   const file = event.target.files[0]
    //   this.files[fileKey] = file
    // },
    addField(formName) {
      const formFields = this[`${formName}`]
      console.log(formFields)
      if (formFields.length < 5) {
        formFields.push({ fileName: '', image: null })
      }
    },
    removeField(formName, index) {
      const formFields = this[`${formName}`]
      formFields.splice(index, 1)
    },
    addForm() {
      const nextId = this.forms.length > 0 ? this.forms[this.forms.length - 1].id + 1 : 0
      console.log(nextId)
      this.forms.push({
        previewUrl: '',
        productName: '',
        productPrice: '',
        urlProduct: ''
      })
    },
    removeForm(id) {
      this.forms = this.forms.filter((form) => form.id !== id)
    },
    isRemoveDisabled() {
      return this.forms.length === 1 // Disable the button if there is only one form
    },
    handleImagePreview(event, index) {
      // console.log(event)
      // console.log(typeof formIndex)
      // console.log(formIndex)
      // const file = event.target.files[0]
      // const reader = new FileReader()
      // reader.onload = () => {
      //   this.forms[formIndex].imagePreview = reader.result
      // }
      // reader.readAsDataURL(file)
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        const previewUrl = reader.result
        this.forms[index].previewUrl = previewUrl
      }
      reader.readAsDataURL(file)
    }
  },
  mounted() {
    if (this.forms.length === 0) {
      this.addForm()
    }
  }
}
</script>
<style scoped></style>
