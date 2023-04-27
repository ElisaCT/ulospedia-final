<template>
  <nav class="bg-white shadow-md rounded-full px-12 ml-40 mr-40">
    <div class="container flex items-center justify-between">
      <a href="https://flowbite.com/" class="items-center">
        <img src="../assets/ditenun-logo.png" class="h-12" alt="Ditenun Logo" />
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      ></button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex md:flex-row md:space-x-16 md:border-0">
          <li>
            <a href="#" class="font-normal md:text-primary_main" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="font-normal md:hover:text-primary_hover">Sejarah Ulos</a>
          </li>
          <li>
            <a href="#" class="font-normal md:hover:text-primary_hover">Galeri Ulos</a>
          </li>
          <li>
            <a href="#" class="font-normal md:hover:text-primary_hover">Penenun</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'Header'
}
</script>
