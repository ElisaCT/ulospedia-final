<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header
  }
}
</script>
