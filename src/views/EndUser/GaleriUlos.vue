<template>
  <Navbar></Navbar>
  <h1>test</h1>
  <Footer/>
</template>

<script>
import Navbar from '../../components/EndUser/Navbar.vue'
import Footer from '../../components/EndUser/Footer.vue';

export default {
  name: 'GaleriUlos',

  components:{
    Navbar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer
  }
}
</script>

<style></style>
