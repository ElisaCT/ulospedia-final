<template>
  <div class="year-picker">
    <div class="md:w-full relative inline-block max-h-40 overflow-y-auto">
      <select
        id="dropdown-pilih-tahun-lahir-penenun"
        v-model="selectedYear"
        @change="emitYear"
        class="block appearance-none w-full bg-neutral_10 border border-primary_border text-primary_pressed text-base rounded-lg focus:ring-primary_main focus:border-primary_main p-2.5"
        required
      >
        <option value="" disabled selected hidden>Pilih Tahun Lahir Penenun</option>
        <option id="tahun-lahir" v-for="year in years" :key="year" :value="year">
          {{ year }}
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
</template>
<script>
export default {
  data() {
    return {
      selectedYear: new Date().getFullYear(),
      years: []
    }
  },
  created() {
    this.populateYears()
  },
  methods: {
    populateYears() {
      this.years = []
      const currentYear = new Date().getFullYear()
      for (let year = currentYear; year >= 1950; year--) {
        this.years.push(year)
      }
    },
    emitYear() {
      this.$emit('updateYear', this.selectedYear)
    }
  }
}
</script>
<style lang=""></style>
