<template>
    <div class="flex min-h-screen flex-row">
      <div>
        <div
          class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
        >
          <div class="image h-96 w-72">
            <img
              class="h-full w-full object-cover transition-transform rounded-lg"
              src="../assets/images/harungguan.png"
              alt="{{ ulosName }}"
            />
            <ecommerceAvailable class="absolute top-6 right-6 z-10"/>
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
          ></div>
          <div class="absolute inset-0 flex translate-y-[80%] flex-col text-left pl-6">
            <h1 class="text-xl font-medium text-neutral_80">{{ ulosName }}</h1>
            <p class="text-neutral_80">{{ ethnic }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ecommerceAvailable from './ecommerceAvailable.vue';
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'UlosCard',
    components: {ecommerceAvailable},
    props:{
        ulosName: String, 
        ethnic: String
    },
  }
  </script>
  
  <style scoped>
    /* .inner-gradient {
        background-image: linear-gradient(0.96deg, rgba(0, 0, 0, 0.75) 0.79%, rgba(0, 0, 0, 0.2) 24.67%, rgba(0, 0, 0, 0.1) 43.11%, rgba(0, 0, 0, 0) 99.17%), #FFFFFF;
    } */
    img{
        background-image: linear-gradient(0.96deg, rgba(0, 0, 0, 0.75) 0.79%, rgba(0, 0, 0, 0.2) 24.67%, rgba(0, 0, 0, 0.1) 43.11%, rgba(0, 0, 0, 0) 99.17%);
    }
</style>
  