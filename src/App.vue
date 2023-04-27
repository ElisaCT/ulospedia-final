<template>
      <nav class="bg-white shadow-md rounded-full px-12 ml-40 mr-40">
        <div class="container flex items-center justify-between">
          <a href="https://flowbite.com/" class="items-center">
            <img src="./assets/ditenun-logo.png" class="h-12" alt="Ditenun Logo" />
          </a>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <div class="flex md:flex-row md:space-x-16 md:border-0">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/sejarah-ulos">Sejarah Ulos</router-link>
              <router-link to="/penenun">Penenun</router-link>
              <router-link to="/penenun-gedogan">Penenun Gedogan</router-link>
            </div>
          </div>
        </div>
      </nav>
  <router-view />
</template>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: 400;
  color: #0A0A0A;
  }

nav a.router-link-exact-active {
  color: #3355B5;
  text-decoration: underline;
  }
</style>
