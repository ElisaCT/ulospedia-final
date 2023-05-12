<template>
    <Navbar/>
    <div class="mx-[180px]">
      <!-- search -->
      <div class="flex flex-row items-center gap-3">
      <div class="inline-flex flex-grow items-center bg-[#F5F5F5] rounded-lg py-2 px-4">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
          <path stroke="#C2C2C2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.583 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM18.333 18.333l-1.666-1.666"/>
        </svg>
        <input
        class=" w-full bg-[#F5F5F5] focus:outline-none pl-3"
        type="text"
        v-model="searchText"
        @input="handleSearch"
        placeholder="Cari ulos"
        />
      </div>

      <button
        class="ml-4 border border-[#E0E0E0] bg-white text-[#616161] font-normal py-2 px-2 rounded-lg flex flex-row gap-2 items-center"
        @click="handleFilter"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
        <path stroke="#616161" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.334 5.417h-5M5 5.417H1.667M8.333 8.333a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833ZM18.333 14.583H15M6.667 14.583h-5M11.667 17.5a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833Z"/>
      </svg>
        Filter
      </button>
    </div>

    <!-- card ulos -->
      <div class="grid grid-cols-4 gap-6 mt-8">
        <UlosCard v-for="(item, index) in items" :key="index" :props="item" />
      </div>
      
    </div>
    <Footer/>
  </template>
  
  <script>
  import UlosCard from '../../components/EndUser/UlosCard.vue';
  import Navbar from '../../components/EndUser/Navbar.vue'
  import Footer from '../../components/EndUser/Footer.vue';

  export default {
    name: "GaleriUlosView",
    components:{
      // eslint-disable-next-line vue/no-reserved-component-names
      UlosCard, Navbar, Footer
    },
    data() {
      return {
        searchText: '',
        items:[
          {
            ulosName: "Ulos Harungguan",
            ethnic: "Batak Toba"
          },
          {
            ulosName: "Ulos Sadum",
            ethnic: "Batak Toba"
          },
          {
            ulosName: "Ulos Sibolang",
            ethnic: "Batak Karo"
          }
        ]
      };
    },
    methods: {
      handleSearch() {
        // Do something with the search text
        console.log(this.searchText);
      },
      handleFilter() {
        // Do something to filter results
        console.log('Filtering results');
      },
    },
  };
  </script>
  