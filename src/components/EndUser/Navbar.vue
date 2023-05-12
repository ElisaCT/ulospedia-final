<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="bg-neutral_10 shadow-md rounded-full px-12 ml-40 mr-40 mb-8 sticky top-6 z-10">
    <div class="container flex items-center justify-between">
      <a href="/" class="items-center">
        <img src="../../assets/ditenun-logo.png" class="h-12" alt="Ditenun Logo" />
      </a>
      <div class="md:block md:w-auto" id="navbar-default">
        <div class="flex md:flex-row md:space-x-16 md:border-0">
          <router-link to="/">Home</router-link>
          <router-link to="/sejarah-ulos">Sejarah Ulos</router-link>
          <router-link to="/galeri-ulos">Galeri Ulos</router-link>
          <router-link to="/penenun">Penenun</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin-top: 24px;
  padding: 15px 50px;
  box-shadow: 0px 2px 6px rgba(112, 144, 176, 0.2);
}

nav a {
  font-weight: 400;
  color: #0a0a0a;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 2px;
}

nav a.router-link-exact-active {
  color: #3355b5;
  border-bottom-color:#3355b5;
}
</style>
