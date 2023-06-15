<template>
  <!-- <div class="fixed inset-0 bg-[#FCFBFD]"></div> -->
  <div class="mx-40 py-10 gap-6 z-10">
    <Form @submit="submit" :validation-schema="schema">
      <h3 class="font-semibold text-2xl text-neutral_90 text-left pb-6">Tambah Penenun</h3>
      <div class="bg-neutral_10 rounded-lg shadow-md p-8 ml-6 mb-8">
        <h5 class="font-medium text-xl text-neutral_90 text-left pb-6">Gambar Penenun</h5>
        <div class="flex flex-col gap-6 md:flex-row pb-6">
          <label for="ulos-name" class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
            >Gambar Penenun*</label
          >
          <div class="flex gap-2 flex-col">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-36 h-36 border-2 border-neutral_60 border-dashed rounded-lg cursor-pointer bg-neutral_10"
            >
              <div class="relative flex flex-col items-center justify-center">
                <img
                  v-if="selectedImage"
                  :src="selectedImage"
                  alt="Preview"
                  class="w-24 h-24 object-cover rounded-lg"
                />

                <div class="flex flex-col items-center justify-center">
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
                      <pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox">
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
                    <span class="font-normal">Gambar Penenun</span>
                  </p>
                </div>
              </div>
              <!-- <Field name="image" > -->
              <input
                name="image"
                @change="handleFileChange"
                id="dropzone-file"
                type="file"
                class="hidden"
                accept="image/png, image/jpg, image/jpeg"
              />
              <!-- </Field> -->
            </label>
            <!-- <ErrorMessage name="image" class="text-danger_main text-s" /> -->
          </div>
        </div>
      </div>

      <div class="bg-neutral_10 rounded-lg shadow-md p-8 ml-6">
        <h5 class="font-medium text-xl text-neutral_90 text-left pb-6">Informasi Penenun</h5>

        <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
          <label for="penenun-name" class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
            >Nama Penenun*</label
          >
          <div class="md:w-2/3 flex flex-col gap-2">
            <Field
              name="name"
              v-model="name"
              type="text"
              id="penenun-name"
              class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
              placeholder="Masukkan nama penenun"
            />
            <ErrorMessage name="name" class="text-danger_main text-s" />
          </div>
        </div>

        <!-- born year -->
        <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
          <label for="ulos-name" class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
            >Tahun Lahir Penenun*</label
          >
          <div class="w-2/3 inline-block">
            <div name="birthYear">
              <YearPicker v-on:updateYear="updateBirthYear"></YearPicker>
            </div>
            <!-- <ErrorMessage name="birthYear" class="text-danger_main text-s" /> -->
          </div>
        </div>

        <!-- suku penenun -->
        <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
          <label
            for="penenun-ethnic"
            class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
            >Suku Penenun*</label
          >
          <div class="md:w-2/3 flex flex-col gap-2">
            <div class="w-full relative inline-block">
              <Field
              id="dropdown-suku-penenun"
                name="ethnic"
                as="select"
                v-model="ethnic"
                :value="ethnic"
                class="block appearance-none w-full bg-neutral_10 border border-primary_border text-primary_pressed text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
                required
              >
                <option value="" disabled selected hidden>Pilih Suku Penenun</option>
                <option value="Batak Toba" class="pb-3 hover:bg-primary_surface">Batak Toba</option>
                <option value="Batak Simalungun" class="pb-3 hover:bg-primary_surface">
                  Batak Simalungun
                </option>
                <option value="Batak Karo" class="pb-3 hover:bg-primary_surface">Batak Karo</option>
                <option value="Batak Angkola" class="pb-3 hover:bg-primary_surface">
                  Batak Angkola
                </option>
                <option value="Batak Mandailing" class="pb-3 hover:bg-primary_surface">
                  Batak Mandailing
                </option>
              </Field>

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
            <ErrorMessage name="ethnic" class="text-danger_main text-s" />
          </div>
        </div>

        <!-- domisisli penenun -->
        <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
          <label for="domicile" class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
            >Domisili Penenun*</label
          >
          <div class="md:w-2/3 gap-2 flex flex-col">
            <Field
              v-model="domicile"
              type="text"
              id="domicile"
              class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
              placeholder="Contoh:Balige"
              name="domicile"
            />
            <ErrorMessage name="domicile" class="text-danger_main text-s" />
          </div>
        </div>
        <!-- alat tenun -->
        <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
          <label
            for="penenun-ethnic"
            class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
            >Alat Tenun*</label
          >
          <div class="md:w-2/3 flex flex-col gap-2">
            <div class="w-full relative inline-block">
              <Field
                id="dropdown-alat-tenun"
                name="theLoom"
                v-model="theLoom"
                as="select"
                class="block appearance-none w-full bg-neutral_10 border border-primary_border text-primary_pressed text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
              >
                <option value="" disabled selected hidden>Pilih Alat Tenun</option>
                <option value="Gedogan" class="pb-3 hover:bg-primary_surface">Gedogan</option>
                <option value="ATBM" class="pb-3 hover:bg-primary_surface">
                  Alat Tenun Bukan Mesin (ATBM)
                </option>
                <option value="ATM" class="pb-3 hover:bg-primary_surface">
                  Alat Tenun Mesin (ATM)
                </option>
              </Field>
              <!-- </Field> -->
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
            <ErrorMessage name="theLoom" class="text-danger_main text-s" />
          </div>
        </div>

        <!-- teknik tenun -->
        <div class="flex flex-col gap-6 md:flex-row md:items-center pb-6">
          <label for="ulos-name" class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
            >Teknik Tenun yang digunakan*</label
          >
          <div class="md:w-2/3 flex flex-col gap-2">
            <div class="w-full relative inline-block">
              <Field
                id="dropdown-teknik-tenun"
                as="select"
                name="technique"
                rules="required"
                v-model="technique"
                class="block appearance-none w-full bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
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
              </Field>

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
            <ErrorMessage name="technique" class="text-danger_main text-s" />
          </div>
        </div>

        <!-- story penenun -->
        <div class="flex flex-col gap-6 md:flex-row pb-6">
          <label for="penenun-story" class="block mb-2 text-sm font-medium text-neutral_80 md:w-1/3"
            >Cerita Penenun*</label
          >
          <div class="md:w-2/3 flex flex-col gap-2">
            <!-- <Field name="story" as="TextArea"  rules="required" > -->
            <Field
              name="story"
              as="TextArea"
              v-model="story"
              type="text"
              id="penenun-story"
              rows="4"
              class="bg-neutral_10 border border-primary_border text-neutral_90 text-base rounded-lg focus:ring-primary_main focus:border-primary_main block w-full p-2.5"
              placeholder="Masukkan cerita yang ingin dibagikan penenun"
            ></Field>
            <!-- </Field> -->
            <ErrorMessage name="story" class="text-danger_main text-s" />
          </div>
        </div>
      </div>

      <div class="flex flex-row gap-6 justify-end mt-6">
        <button
          @click="backToPenenun"
          type="button"
          class="px-6 py-3 rounded-lg bg-neutral_20 text-center text-lg font-medium text-neutral_70"
        >
          Batal
        </button>
        <button
        id="btn-simpan"
          type="submit"
          class="px-4 py-3 rounded-lg bg-primary_main text-center text-lg font-medium text-neutral_10"
        >
          Simpan
        </button>
      </div>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import YearPicker from '../../../components/Admin/YearPicker/YearPicker.vue'
import axios from 'axios'

export default {
  components: {
    YearPicker,
    // eslint-disable-next-line vue/no-reserved-component-names
    Form,
    Field,
    ErrorMessage
  },
  props: {
    params: {
      required: true,
      type: Object
    }
  },
  data() {
    const schema = yup.object().shape({
      name: yup.string().required('Nama penenun harus diisi').max(100, 'Nama penenun tidak boleh lebih dari 100 karakter'),
      //birthYear: yup.string().required('Tahun lahir penenun harus diisi'),
      domicile: yup.string().required('Domisili penenun harus diisi').max(50, 'Domisili penenun tidak boleh lebih dari 50 karakter'),
      ethnic: yup.string().required('Suku penenun harus diisi'),
      theLoom: yup.string().required('Alat tenun penenun harus diisi'),
      story: yup.string().required('Cerita penenun harus diisi'),
      technique: yup.string().required('Teknik tenun penenun harus diisi')
    })

    return {
      schema,
      selectedTechnics: [],
      selectedTool: '',
      maxYear: new Date().getFullYear(),
      selectedYear: null,
      showDatepicker: false,
      domicile: '',
      name: '',
      birthYear: null,
      ethnic: '',
      theLoom: '',
      technique: '',
      story: '',
      image: null,
      selectedImage: null,
      showDelete: false
    }
  },
  watch: {
    name(newValue) {
      console.log(newValue)
    },
    birthYear(newValue) {
      console.log(newValue)
    },
    ethnic(newValue) {
      console.log(newValue)
    },
    domicile(newValue) {
      console.log(newValue)
    },
    theLoom(newValue) {
      console.log(newValue)
    },
    technique(newValue) {
      console.log(newValue)
    },
    story(newValue) {
      console.log(newValue)
    },
    image(newValue) {
      console.log(newValue)
    }
  },
  methods: {
    async submit() {
      const token = localStorage.getItem('token')

      const responseDataText = await axios.post(
        'http://company.ditenun.com/api/v1/ulospedia/weavers',
        {
          name: this.name,
          yearOfBirth: this.birthYear,
          ethnic: this.ethnic,
          domicile: this.domicile,
          theLoom: this.theLoom,
          technique: this.technique,
          story: this.story
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      console.log(responseDataText.data)

      const newWeaverId = responseDataText.data.data.weaver.id
      
      console.log(newWeaverId)
      console.log(`http://company.ditenun.com/api/v1/ulospedia/weavers/${newWeaverId}/image`)

      const formData = new FormData()
      formData.append('weaver-image', this.image)

      const responseDataImage = await axios.post(
        `http://company.ditenun.com/api/v1/ulospedia/weavers/${newWeaverId}/image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      console.log(responseDataImage)

      this.$router.push('/admin/penenun')
    },
    handleFileChange(event) {
      this.image = event.target.files[0]
      const image = event.target.files[0]
      if (image) {
        // Create a FileReader to read the file
        const reader = new FileReader()
        reader.onload = (e) => {
          // Set the selected image data to the component's data
          this.selectedImage = e.target.result
        }
        reader.readAsDataURL(image) // Read the file as a data URL
      }
    },
    updateBirthYear(year) {
      this.birthYear = year
    },
    backToPenenun() {
      this.$router.push('/admin/penenun')
    },
    disableFutureDates(date) {
      const today = new Date()
      return date > today
    },
    getCurrentDate() {
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    },
    toggleDatepicker() {
      this.showDatepicker = !this.showDatepicker
    },
    validateFile() {
      if (!this.selectedImage) {
        return 'Gambar penenun tidak boleh kosong'
      }

      const allowedExtensions = ['jpg', 'jpeg', 'png']
      const maxSizeInBytes = 5 * 1024 * 1024

      const fileExtension = this.selectedImage.name.split('.').pop().toLowerCase()
      const fileSize = this.selectedImage.size

      if (!allowedExtensions.includes(fileExtension)) {
        return 'Format gambar harus .jpg, .jpeg, atau .png'
      }

      if (fileSize > maxSizeInBytes) {
        return 'Ukuran gambar tidak boleh lebih dari 5 MB'
      }

      return true
    }
  }
  // setup() {
  //   const { value: selectedImage, errorMessage, handleBlur, handleInput } = useField(
  //     'image',
  //     (value) => {
  //       if (!value) {
  //         return 'Gambar penenun harus diisi';
  //       }
  //       const supportedFormats = ['image/png', 'image/jpg', 'image/jpeg'];
  //       if (!supportedFormats.includes(value.type)) {
  //         return 'Format gambar harus .jpg, .jpeg, .png';
  //       }
  //       const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  //       if (value.size > maxSize) {
  //         return 'Ukuran gambar harus kurang dari 5MB';
  //       }
  //       return true;
  //     }
  //   );
  //   const { validate } = useForm();

  //   const handleFileChange = (event) => {
  //     const image = event.target.files[0];
  //     if (image) {
  //       const reader = new FileReader();
  //       reader.onload = (e) => {
  //         selectedImage.value = e.target.result;
  //         validate('image'); // Trigger validation for the 'image' field
  //       };
  //       reader.readAsDataURL(image);
  //     }
  //   };

  //   return {
  //     selectedImage,
  //     handleFileChange,
  //     errorMessage,
  //     handleBlur,
  //     handleInput,
  //   };
  // },
}
</script>
<style scoped></style>