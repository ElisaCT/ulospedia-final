<template>
  <Navbar />
  <div v-if="penenunDetails">
    <div v-for="penenunDetail in penenunDetails" :key="penenunDetail.id">
      <div class="flex flex-col gap-12 items-center px-44 p-12">
        <div class="flex gap-6 items-center">
          <div class="flex flex-col items-center gap-2">
            <h3 class="font-semibold text-lg">{{ penenunDetail.name }}</h3>
            <div class="flex flex-row gap-2">
              <span
                class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
              >
                <span class="text-sm font-normal text-gray-800 text-primary_main"
                  >Penenun {{ penenunDetail.theLoom }}</span
                >
              </span>
              <span
                class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
              >
                <span class="text-sm font-normal text-gray-800 text-primary_main">{{
                  penenunDetail.ethnic
                }}</span>
              </span>
              <span
                class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
              >
                <span class="text-sm font-normal text-gray-800 text-primary_main"
                  >Usia {{ penenunDetail.age }}</span
                >
              </span>
              <span
                class="inline-flex items-center rounded-3xl border border-primary_border py-2 px-3 mr-2"
              >
                <span class="text-sm font-normal text-gray-800 text-primary_main"
                  >Asal {{ penenunDetail.domicile }}</span
                >
              </span>
            </div>
          </div>
        </div>

        <!-- image -->
        <div>
          <div class="w-full flex justify-center h-72">
            <img :src="penenunDetail.imageUrl" class="mx-auto w-8/12 rounded-lg object-cover" />
          </div>
        </div>

        <!-- story -->
        <div class="flex flex-col col-span-12">
          <div class="flex flex-col gap-3">
            <p class="font-normal text-sm text-neutral_90 text-left">
              {{ penenunDetail.story }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import axios from 'axios'
import Navbar from '../../components/EndUser/Navbar.vue'
import Footer from '../../components/EndUser/Footer.vue'

export default {
  name: 'penenun-detail',
  data: function () {
    return {
      penenunDetails: null
    }
  },
  mounted() {
    axios
      .get('http://company.ditenun.com/api/v1/ulospedia/client/weavers/' + this.$route.params.id)
      .then((response) => {
        this.penenunDetails = response.data.data
        console.log(this.penenunDetails)
      })
  },
  methods() {},
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Navbar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer
  }
}
</script>
<style lang=""></style>
