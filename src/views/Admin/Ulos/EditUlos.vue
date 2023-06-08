<template>
  <!-- <div class="fixed inset-0 bg-[#FCFBFD]"></div> -->
  <div class="mx-40 py-10 gap-6 z-10">
    <div class="">
      <h3 class="font-semibold text-2xl text-neutral_90 text-left pb-6">Edit Ulos</h3>
      <!-- stepper -->
      <div class="stepper">
        <div :hidden="currentStep != 1">
          <ol
            class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base pb-6"
          >
            <li
              class="flex md:w-full items-center text-primary_main dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
              >
                <span class="mr-2">1</span>
                Gambar <span class="hidden sm:inline-flex sm:ml-2">Ulos</span>
              </span>
            </li>
            <li
              class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
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
            class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base pb-6"
          >
            <li
              class="flex md:w-full items-center text-primary_main dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
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
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
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
            class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base pb-6"
          >
            <li
              class="flex md:w-full items-center text-primary_main dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
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
                class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
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
            <h5 class="font-medium text-xl text-neutral_90 text-left pb-6">Gambar Ulos</h5>
            <div class="flex flex-row gap-6">
              <div class="text-sm text-left text-neutral_80 gap-3 w-56">
                <p class="font-medium pb-3">Gambar Ulos Utuh*</p>
                <p class="font-normal">
                  Gambar utama adalah gambar yang akan ditampilkan pada kartu ulos dan wajib untuk
                  diisi
                </p>
              </div>
              <div class="flex flex-row gap-6">
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar Utama</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 2</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 3</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 4</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 5</span>
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
            </div>
            <!-- potongan ulos -->
            <div class="flex flex-row gap-6 pt-6">
              <div class="text-sm text-left text-neutral_80 gap-3 w-56">
                <p class="font-medium pb-3">Gambar Potongan Ulos</p>
                <p class="font-normal">
                  Gambar potongan ulos merupakan bagian detail dari gambar ulos utuh
                </p>
              </div>
              <div class="flex flex-row gap-6">
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 1</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 2</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 3</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 4</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 5</span>
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
            </div>

            <!-- motif ulos -->
            <div class="flex flex-row gap-6 pt-6">
              <div class="text-sm text-left text-neutral_80 gap-3 w-56">
                <p class="font-medium pb-3">Gambar Motif Ulos</p>
                <p class="font-normal">
                  Gambar motif ulos merupakan bagian yang lebih detail dari potongan ulos
                </p>
              </div>
              <div class="flex flex-row gap-6">
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 1</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 2</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 3</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 4</span>
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
                <div class="flex items-center justify-center w-full">
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
                      <p class="my-2 text-sm text-neutral_70">
                        <span class="font-normal">Gambar 5</span>
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
                      v-model="ulosData.name"
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
                    for="ulos-ethnic"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Asal Suku Ulos*</label
                  >
                  <div class="md:w-2/3 relative inline-block">
                    <select
                      id="dropdown-suku-ulos"
                      v-model="ulosData.ethnic"
                      class="block appearance-none w-full bg-neutral_10 border border-primary_border text-primary_pressed text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
                      required
                    >
                      <option value="" disabled selected hidden>Pilih Suku Ulos</option>
                      <option value="option1" class="pb-3 hover:bg-primary_surface">
                        Batak Toba
                      </option>
                      <option value="option2" class="pb-3 hover:bg-primary_surface">
                        Batak Simalungun
                      </option>
                      <option value="option3" class="pb-3 hover:bg-primary_surface">
                        Batak Karo
                      </option>
                      <option value="option2" class="pb-3 hover:bg-primary_surface">
                        Batak Angkola
                      </option>
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
                <!-- warna ulos -->
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-colors"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Warna Pada Ulos*</label
                  >
                  <div class="md:w-2/3 relative inline-block">
                    <select
                      id="checkbox-warna-ulos"
                      class="block appearance-none w-full bg-neutral_10 border border-primary_border text-primary_pressed text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
                      required
                    >
                      <option value="" disabled selected hidden>Pilih Warna Ulos</option>
                      <option value="option1" class="pb-3 hover:bg-primary_surface">Merah</option>
                      <option value="option2" class="pb-3 hover:bg-primary_surface">Hitam</option>
                      <option value="option3" class="pb-3 hover:bg-primary_surface">Biru</option>
                      <option value="option2" class="pb-3 hover:bg-primary_surface">Hijau</option>
                      <option value="option3" class="pb-3 hover:bg-primary_surface">Kuning</option>
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
                      />
                      <span class="ml-2 text-neutral_90">Pengembangan</span>
                    </label>
                  </div>
                </div>

                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-location"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Lokasi Asal Ulos</label
                  >
                  <div class="md:w-2/3">
                    <input
                      v-model="ulosData.location"
                      type="text"
                      id="ulos-location"
                      class="bg-neutral_10 border border-primary_border text-neutral_70 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                      placeholder="Contoh: Balige"
                    />
                  </div>
                </div>
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-size"
                    class="block mb-2 text-sm font-medium text-neutral_90 md:w-1/3"
                    >Ukuran Ulos</label
                  >
                  <div class="flex flex-row gap-6 w-auto">
                    <div class="flex md:w-2/3 gap-1">
                      <input
                        v-model="ulosData.length"
                        type="number"
                        min="0"
                        id="ulos-legth"
                        class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                        placeholder="Panjang"
                      />
                      <span
                        class="inline-flex items-center px-3 text-sm text-neutral_80 bg-neutral_20 border border-neutral_60 rounded"
                      >
                        cm
                      </span>
                    </div>
                    <div class="flex md:w-2/3 gap-1">
                      <input
                        v-model="ulosData.width"
                        type="number"
                        min="0"
                        id="ulos-width"
                        class="bg-neutral_10 border border-primary_border text-neutral_70 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                        placeholder="lebar"
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
                    >Teknik Tenun</label
                  >
                  <div class="md:w-2/3 relative inline-block">
                    <select
                      id="dropdown-teknik-tenun"
                      v-model="ulosData.technique"
                      class="block appearance-none w-full bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
                      required
                    >
                      <option value="" disabled selected hidden>Pilih Teknik Tenun</option>
                      <option value="option1" class="pb-3 hover:bg-primary_surface">
                        Teknik Ikat Lungsi
                      </option>
                      <option value="option2" class="pb-3 hover:bg-primary_surface">
                        Teknik Ikat Pakan
                      </option>
                      <option value="option3" class="pb-3 hover:bg-primary_surface">
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
                      v-model="ulosData.meaning"
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
                      v-model="ulosData.func"
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
              <form>
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-name"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Ulos Tersedia</label
                  >

                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" v-model="toggleStatus" />
                    <div
                      class="w-11 h-6 bg-neutral_70 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral_60 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary_main"
                    ></div>
                  </label>
                </div>
                <div class="flex flex-col gap-6 md:flex-row pb-6">
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
                        <p class="my-2 text-sm text-neutral_70">
                          <span class="font-normal">Gambar Produk</span>
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        class="hidden"
                        accept="image/png, image/jpg, image/jpeg"
                        :disabled="!toggleStatus"
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
                      type="text"
                      id="ulos-name"
                      :class="{
                        'bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5': true,
                        'bg-neutral_20 cursor-not-allowed border-neutral_20': !toggleStatus
                      }"
                      class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                      placeholder="Masukkan nama produk"
                      v-bind:disabled="!toggleStatus"
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-name"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >Harga Produk*</label
                  >
                  <div class="md:w-2/3">
                    <input
                      type="text"
                      id="ulos-name"
                      :class="{
                        'bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5': true,
                        'bg-neutral_20 cursor-not-allowed border-neutral_20': !toggleStatus
                      }"
                      class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                      placeholder="Masukkan harga produk"
                      v-bind:disabled="!toggleStatus"
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
                  <label
                    for="ulos-name"
                    class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
                    >URL Produk*</label
                  >
                  <div class="md:w-2/3">
                    <input
                      type="text"
                      id="ulos-name"
                      :class="{
                        'bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5': true,
                        'bg-neutral_20 cursor-not-allowed border-neutral_20': !toggleStatus
                      }"
                      class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
                      placeholder="contoh: https://ditenun.com/product/menik-lanyard/"
                      v-bind:disabled="!toggleStatus"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="flex flex-row gap-6 justify-end mt-6">
          <!-- Stepper navigation buttons -->
          <button
            id="btn-kembali"
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
            id="btn-simpan-perubahan"
            @click="nextStep"
            :hidden="currentStep < totalSteps"
            class="px-4 py-3 rounded-lg bg-primary_main text-center text-lg font-medium text-neutral_10"
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//import Multiselect from 'vue-multiselect'
export default {
  components: {
    //Multiselect
  },
  data() {
    return {
      ulosId: '',
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
      colors: ['Hitam', 'Merah', 'Putih', 'Hijau', 'Biru', 'Kuning'], // Array of ethnics values for the dropdown
      selectedTechnics: [],
      technics: ['Teknik Ikat Lungsi', 'Teknik Ikat Pakan', 'Teknik Ikat Ganda'],
      toggleStatus: false,

      ulosData: {
        name: '',
        ethnic: '',
        location: '',
        technique: '',
        length: '',
        width: '',
        meaning: '',
        func: ''
      }
    }
  },
  mounted() {
    this.ulosId = this.$route.params.id
    // this.getUlosData(this.$route.params.id)
  },
  methods: {
    // getUlosData() {
    //   const token = localStorage.getItem('token')

    //   axios
    //     .get(`http://company.ditenun.com/api/v1/ulospedia/ulos/10`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json'
    //       }
    //     })
    //     .then((res) => {
    //       console.log(res.data.data.ulos)

    //       this.ulosData = res.data.data.ulos
    //     })
    //     .catch(function (error) {
    //       if (error.response) {
    //         if (error.response.status == 404) {
    //           alert(error.response.data.message)
    //         }
    //       }
    //     })
    // },
    async editUlos() {
      const token = localStorage.getItem('token')
      console.log(token)
      console.log(this.ulosId)
      console.log(this.ulosData.name)

      const bodyReq = {
        id: this.ulosId,
        name: this.ulosData.name,
        colors: this.ulosData.colors,
        originEthnic: this.ulosData.originEthnic,
        type: this.ulosData.type,
        location: this.ulosData.location,
        length: this.ulosData.length,
        width: this.ulosData.width,
        technique: this.ulosData.technique,
        meaning: this.ulosData.meaning,
        func: this.ulosData.func
      }

      console.log(bodyReq)

      const responseDataText = await axios.put(
        `http://company.ditenun.com/api/v1/ulospedia/ulos/${this.ulosId}`,
        bodyReq,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(responseDataText)

      this.$router.push('/admin/ulos')
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
    }
  }
}
</script>
<style lang=""></style>
