<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="app">
        <Sidebar/>
    <div class="ml-80 pt-10 gap-6 mr-8">
        <div class="flex flex-row justify-between items-center">
            <h3 class="font-medium text-3xl text-left pb-6">Daftar Ulos</h3>
            <router-link to="add-ulos">
                <button class="flex flex-row bg-primary_main items-center px-4 py-2 gap-2 rounded-lg text-lg font-medium text-neutral_10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 18.333c4.583 0 8.333-3.75 8.333-8.333S14.583 1.667 10 1.667 1.667 5.417 1.667 10s3.75 8.333 8.333 8.333ZM6.667 10h6.666M10 13.333V6.667"/></svg>
                Tambah Ulos
            </button>
            </router-link>
        </div>
        <!-- Tabel -->
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-4 bg-neutral_10">
            <div class="flex justify-between mb-6 py">
                <div class="font-medium text-xl">Tabel Data Ulos</div>
                <!-- Search -->
                <div class="">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1 gap-3">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#C2C2C2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.583 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM18.333 18.333l-1.666-1.666"/></svg>
                        </div>
                    <input type="text" id="table-search" class="block p-2 pl-10 text-base font-normal text-neutral_30 rounded-lg w-80 bg-neutral_20 focus:ring-neutral_50 focus:border-neutral_80" placeholder="Cari berdasarkan nama ulos">
                    </div>
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-neutral_70 font-bold bg-[#F8F7FA] uppercase w-full rounded">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            <button class="flex flex-row items-center gap-3">
                                    Nama Ulos
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="none"><path stroke="#757575" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16.3 10.27-2.717-2.716a.827.827 0 0 0-1.166 0L9.7 10.271M16.3 17.73l-2.717 2.716a.827.827 0 0 1-1.166 0L9.7 17.729"/></svg>
                            </button>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <button class="flex flex-row items-center gap-3">
                                    Suku
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="none"><path stroke="#757575" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16.3 10.27-2.717-2.716a.827.827 0 0 0-1.166 0L9.7 10.271M16.3 17.73l-2.717 2.716a.827.827 0 0 1-1.166 0L9.7 17.729"/></svg>
                            </button>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <button class="flex flex-row items-center gap-3">
                                    Ukuran
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="none"><path stroke="#757575" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16.3 10.27-2.717-2.716a.827.827 0 0 0-1.166 0L9.7 10.271M16.3 17.73l-2.717 2.716a.827.827 0 0 1-1.166 0L9.7 17.729"/></svg>
                            </button>
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <button class="flex flex-row items-center gap-3">
                                    Teknik Tenun
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" fill="none"><path stroke="#757575" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m16.3 10.27-2.717-2.716a.827.827 0 0 0-1.166 0L9.7 10.271M16.3 17.73l-2.717 2.716a.827.827 0 0 1-1.166 0L9.7 17.729"/></svg>
                            </button>
                        </th>
                        
                        <th scope="col" class="px-6 py-3">
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-neutral_30 text-neutral_90">
                    <tr class="">
                        <td class="px-6 py-4">
                            Ragi Hotang
                        </td>
                        <td class="px-6 py-4">
                            Batak Toba
                        </td>
                        <td class="px-6 py-4">
                            25x26 cm
                        </td>
                        <td class="px-6 py-4">
                            Lungsi
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex gap-4">
                                <router-link to="/">
                                    <button class="p-[10px] bg-secondary_surface rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" ><path stroke="#ECB11F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.333 1.333H6C2.667 1.333 1.333 2.667 1.333 6v4c0 3.333 1.334 4.667 4.667 4.667h4c3.333 0 4.667-1.334 4.667-4.667V8.667"/><path stroke="#ECB11F" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10.693 2.013 5.44 7.267c-.2.2-.4.593-.44.88l-.287 2.006c-.106.727.407 1.234 1.134 1.134L7.853 11c.28-.04.674-.24.88-.44l5.254-5.253c.906-.907 1.333-1.96 0-3.294-1.334-1.333-2.387-.906-3.294 0Z"/><path stroke="#ECB11F" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.94 2.767a4.763 4.763 0 0 0 3.293 3.293"/></svg>
                                    </button>
                                </router-link>
                                <router-link to="/">
                                    <button class="p-[10px] bg-danger_surface rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#CB3A31" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 3.987a67.801 67.801 0 0 0-6.68-.334c-1.32 0-2.64.067-3.96.2L2 3.987M5.667 3.313l.146-.873C5.92 1.807 6 1.333 7.127 1.333h1.746c1.127 0 1.214.5 1.314 1.114l.146.866M12.567 6.093l-.434 6.714c-.073 1.046-.133 1.86-1.993 1.86H5.86c-1.86 0-1.92-.814-1.993-1.86l-.434-6.714M6.887 11h2.22M6.333 8.333h3.334"/></svg>
                                    </button>
                                </router-link>        
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- pagination -->
            <div class="flex flex-row justify-between items-center w-full pt-3">
                    <p class="font-normal text-sm text-neutral_60">Menampilkan {{1}} sampai {{10}} dari {{50}} data</p>
                    <div class="flex flex-row gap-4 items-center">
                        <button class="p-1 bg-neutral_20 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#C2C2C2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 13.28 5.653 8.933a1.324 1.324 0 0 1 0-1.866L10 2.72"/></svg>
                        </button>
                        <div class="p-1 bg-primary_surface text-sm text-center text-primary_hover rounded">
                            <span class="p-1 w-5 h-5">{{1}}</span>
                        </div>
                        <button class="p-1 bg-neutral_30 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#616161" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m5.94 13.28 4.347-4.347a1.324 1.324 0 0 0 0-1.866L5.94 2.72"/></svg>
                        </button>
                    </div>
                </div>
        </div>
    </div>
    </div>

</template>
<script>
import Sidebar from '../../../components/Admin/Sidebar.vue';
export default {
    components:{
        Sidebar
    }
}
</script>
<style scoped>
    #app{
        background-color: #FCFBFD;
    }
</style>