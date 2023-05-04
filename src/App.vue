<!-- <template>
  <nav class="bg-neutral_10 shadow-md rounded-full px-12 ml-40 mr-40 mb-8 sticky top-6 z-10">
    <div class="container flex items-center justify-between">
      <a href="https://flowbite.com/" class="items-center">
        <img src="./assets/ditenun-logo.png" class="h-12" alt="Ditenun Logo" />
      </a>
      <div class="md:block md:w-auto" id="navbar-default">
        <div class="flex md:flex-row md:space-x-16 md:border-0">
          <router-link to="/">Home</router-link>
          <router-link to="/sejarah-ulos">Sejarah Ulos</router-link>
          <router-link to="/galeri-ulos">Galeri Ulos</router-link>
          <router-link to="/penenun">Penenun</router-link>
          <router-link to="/penenun-gedogan">Penenun Gedogan</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />

  <footer class="pb-5">   
        <hr class="my-6 border-gray-200 sm:mx-auto border-neutral_40 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between mx-[180px]">
            <div class="flex flex-wrap items-left mr-4">
                <span class="font-normal text-md text-neutral_70 sm:text-center dark:text-gray-400">© 2023 <a href=# class="hover:underline">DiTenun Ulospedia</a>
                </span>
                <ul class="flex flex-wrap items-left mt-3 ml-16 text-md font-normal text-neutral_70 dark:text-gray-400 md:flex-row sm:mt-0 sm:flex-col">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">WebApp</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Product</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Swadesain</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Tentang Kami</a>
                    </li>
                </ul>
            </div>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 ">
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#757575" d="M17.5 3.603v12.794a1.103 1.103 0 0 1-1.103 1.103H3.603A1.103 1.103 0 0 1 2.5 16.397V3.603A1.103 1.103 0 0 1 3.603 2.5h12.794A1.103 1.103 0 0 1 17.5 3.603ZM6.912 8.235H4.706v7.06h2.206v-7.06ZM7.11 5.81a1.27 1.27 0 0 0-1.261-1.28h-.04a1.28 1.28 0 0 0 0 2.56 1.27 1.27 0 0 0 1.301-1.24v-.04Zm8.184 5.197c0-2.122-1.35-2.947-2.691-2.947a2.515 2.515 0 0 0-2.232 1.138h-.062v-.962H8.235v7.06h2.206V11.54a1.465 1.465 0 0 1 1.324-1.58h.083c.702 0 1.223.441 1.223 1.553v3.781h2.206l.017-4.288Z"/></svg>
                    <span class="sr-only">LinkedIn Page</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#757575" d="M18.333 10.05c0-4.63-3.73-8.383-8.333-8.383S1.667 5.42 1.667 10.05c0 4.186 3.046 7.654 7.03 8.283v-5.859H6.583V10.05h2.116V8.203c0-2.1 1.243-3.262 3.147-3.262.912 0 1.866.164 1.866.164v2.063h-1.052c-1.035 0-1.357.647-1.357 1.31v1.572h2.311l-.37 2.424h-1.94v5.86c3.983-.63 7.03-4.098 7.03-8.284Z"/></svg>
                    <span class="sr-only">Facebook page</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#757575" fill-rule="evenodd" d="M10 2.5c-2.037 0-2.292.009-3.092.045-.799.037-1.344.163-1.821.349-.5.188-.954.483-1.328.865a3.679 3.679 0 0 0-.865 1.328c-.185.477-.313 1.023-.349 1.822C2.509 7.708 2.5 7.963 2.5 10s.009 2.292.045 3.092c.037.798.163 1.344.349 1.821.188.5.483.954.865 1.328.375.382.828.677 1.328.866.477.184 1.022.312 1.821.348.8.037 1.055.045 3.092.045s2.292-.009 3.092-.045c.798-.036 1.344-.163 1.821-.349.5-.188.954-.483 1.328-.865.382-.375.677-.828.866-1.328.184-.477.312-1.023.348-1.821.037-.8.045-1.055.045-3.092s-.009-2.292-.045-3.092c-.036-.799-.163-1.344-.349-1.821a3.677 3.677 0 0 0-.865-1.328 3.679 3.679 0 0 0-1.328-.865c-.477-.185-1.023-.313-1.822-.349C12.293 2.509 12.038 2.5 10 2.5Zm0 1.352c2.002 0 2.24.007 3.031.043.731.034 1.128.155 1.393.259.35.135.6.298.862.56.263.262.425.512.56.862.104.265.226.662.259 1.393.036.791.043 1.028.043 3.031 0 2.002-.007 2.24-.043 3.031-.034.731-.155 1.128-.258 1.393-.12.325-.312.62-.561.862-.242.249-.537.44-.862.56-.265.104-.662.226-1.393.259-.791.036-1.028.043-3.031.043s-2.24-.007-3.031-.043c-.731-.034-1.128-.155-1.393-.258a2.323 2.323 0 0 1-.862-.561 2.323 2.323 0 0 1-.56-.862c-.103-.265-.225-.662-.259-1.393-.036-.791-.043-1.029-.043-3.031 0-2.003.007-2.24.043-3.031.034-.731.155-1.128.259-1.393.135-.35.298-.6.56-.862.242-.249.537-.44.862-.56.265-.103.662-.225 1.393-.259.791-.036 1.028-.043 3.031-.043Z" clip-rule="evenodd"/><path fill="#757575" fill-rule="evenodd" d="M10 12.502a2.504 2.504 0 1 1 0-5.007 2.504 2.504 0 0 1 0 5.007Zm0-6.357a3.855 3.855 0 1 0 0 7.71 3.855 3.855 0 0 0 0-7.71Zm4.976-.07a.911.911 0 1 1-1.822 0 .911.911 0 0 1 1.822 0Z" clip-rule="evenodd"/></svg>
                    <span class="sr-only">Instagram page</span>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#757575" d="M16.627 6.6c.01.147.01.294.01.442 0 4.518-3.44 9.73-9.73 9.73v-.003a9.68 9.68 0 0 1-5.24-1.533 6.866 6.866 0 0 0 5.06-1.417 3.424 3.424 0 0 1-3.194-2.375c.512.099 1.04.079 1.543-.059a3.42 3.42 0 0 1-2.743-3.352V7.99a3.398 3.398 0 0 0 1.552.428 3.424 3.424 0 0 1-1.058-4.566 9.705 9.705 0 0 0 7.047 3.573 3.421 3.421 0 0 1 5.827-3.119 6.86 6.86 0 0 0 2.172-.83 3.432 3.432 0 0 1-1.503 1.891 6.8 6.8 0 0 0 1.963-.538A6.947 6.947 0 0 1 16.627 6.6Z"/></svg>
                    <span class="sr-only">Twitter page</span>
                </a>
            </div>
        </div>
    </footer>
</template>

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
</style> -->


<template>
  <nav class="bg-neutral_10 shadow-md rounded-full px-12 mb-8 sticky top-6 z-10">
    <div class="container flex items-center justify-between">
      <a href="https://flowbite.com/" class="items-center">
        <img src="./assets/ditenun-logo.png" class="h-12" alt="Ditenun Logo" />
      </a>
      <button class="md:hidden" @click="toggleMenu">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path v-show="!showMenu" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-show="showMenu" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div class="md:flex md:w-auto md:items-center" :class="{'block': showMenu, 'hidden': !showMenu}">
        <div class="md:flex md:flex-row md:space-x-16 md:border-0">
          <router-link to="/" @click="closeMenu">Home</router-link>
          <router-link to="/sejarah-ulos" @click="closeMenu">Sejarah Ulos</router-link>
          <router-link to="/galeri-ulos" @click="closeMenu">Galeri Ulos</router-link>
          <router-link to="/penenun" @click="closeMenu">Penenun</router-link>
          <router-link to="/penenun-gedogan" @click="closeMenu">Penenun Gedogan</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    }
  }
};
</script>

<style scoped>
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

@media (max-width: 768px) {
  nav {
    padding: 10px;
  }
  nav a {
    display: block;
    padding: 10px 0;
  }
  nav button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-left: auto;
  }
  .block {
    display: block;
  }
  .hidden {
    display: none;
  }
}
</style>
