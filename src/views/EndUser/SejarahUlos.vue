<template>
  <Navbar/>
  <div class="flex place-content-center pb-10 pt-10">
    <div
      class="flex bg-primary_surface hover:bg-primary_surface rounded-[16px] transition dark:bg-primary_main dark:hover:bg-primary_hover"
    >
      <nav class="flex space-x-2 p-1.5" aria-label="Tabs" role="tablist">
        <button
          data-test-id="btn-sejarahUlos"
          type="button"
          test-data-id="tab-btn-sejarah-ulos"
          class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white active"
          id="segment-item-1"
          data-hs-tab="#segment-1"
          aria-controls="segment-1"
          role="tab"
        >
          Sejarah Ulos
        </button>
        <button
        data-test-id="btn-artiUlos"
          type="button"
          test-data-id="tab-btn-arti-ulos"
          class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
          id="segment-item-2"
          data-hs-tab="#segment-2"
          aria-controls="segment-2"
          role="tab"
        >
          Arti Ulos
        </button>
        <button
        data-test-id="btn-ulosModern"
          type="button"
          test-data-id="tab-btn-ulos-zaman-modern"
          class="hs-tab-active:bg-primary_main hs-tab-active:text-neutral_10 hs-tab-active:dark:bg-gray-800 hs-tab-active:dark:text-gray-400 dark:hs-tab-active:bg-gray-800 py-3 px-6 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-primary_main font-medium rounded-[12px] hover:hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:text-gray-300"
          id="segment-item-3"
          data-hs-tab="#segment-3"
          aria-controls="segment-3"
          role="tab"
        >
          Ulos di zaman modern
        </button>
      </nav>
    </div>
  </div>

  <div class="mt-3">
    <!-- Tab Sejarah Ulos -->
    <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
      <!-- Hero -->
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Grid -->
        <div class="grid lg:grid-cols-10 lg:gap-x-8 xl:gap-x-12">
          <div class="lg:col-span-4 mt-10 lg:mt-0">
            <img
              id="gambar-sejarah-ulos"
              class="w-full rounded-xl"
              src="../../assets/sejarah-ulos.png"
              alt="Image Description"
            />
          </div>
          <!-- End Col -->
          <div id="text-sejarahUlos" class="lg:col-span-6 lg:mt-0">
            <h1 class="font-bold lg:text-4xl text-neutral_100 text-justify">Sejarah Ulos</h1>
            <p class="mt-3 text-md text-neutral_80 dark:text-gray-400 text-justify pt-2">
              Dikutip dari penelitian Hasibuan dan Rochmat yang berjudul Ulos sebagai Kearifan
              Budaya Batak Menuju Warisan Dunia (World Heritage), sejarah ulos bermula dari nenek
              moyang suku Batak yang tinggal di pegunungan. Para nenek moyang harus berperang
              melawan cuaca dingin di dataran tinggi. Untuk menghangatkan tubuh, mereka biasa
              menggunakan matahari dan api. Namun, kedua hal ini belum cukup menangkis dinginnya
              udara, maka lahirlah ulos dibuat untuk menghangatkan badan.
            </p>
            <p class="mt-3 text-md text-neutral_80 dark:text-gray-400 text-justify pt-4">
              Dikutip dari penelitian Hasibuan dan Rochmat yang berjudul Ulos sebagai Kearifan
              Budaya Batak Menuju Warisan Dunia (World Heritage), sejarah ulos bermula dari nenek
              moyang suku Batak yang tinggal di pegunungan. Para nenek moyang harus berperang
              melawan cuaca dingin di dataran tinggi. Untuk menghangatkan tubuh, mereka biasa
              menggunakan matahari dan api. Namun, kedua hal ini belum cukup menangkis dinginnya
              udara, maka lahirlah ulos dibuat untuk menghangatkan badan.
            </p>
            <p class="mt-3 text-md text-neutral_80 dark:text-gray-400 text-justify pt-4">
              Dikutip dari penelitian Hasibuan dan Rochmat yang berjudul Ulos sebagai Kearifan
              Budaya Batak Menuju Warisan Dunia (World Heritage), sejarah ulos bermula dari nenek
              moyang suku Batak yang tinggal di pegunungan. Para nenek moyang harus berperang
              melawan cuaca dingin di dataran tinggi. Untuk menghangatkan tubuh, mereka biasa
              menggunakan matahari dan api. Namun, kedua hal ini belum cukup menangkis dinginnya
              udara, maka lahirlah ulos dibuat untuk menghangatkan badan.
            </p>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Hero -->
    </div>
    <!-- End Tab Sejarah Ulos -->

    <!-- Tab Arti Ulos -->
    <div id="segment-2" class="hidden" role="tabpanel" aria-labelledby="segment-item-2">
      <!-- Hero -->
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Grid -->
        <div class="grid lg:grid-cols-10 lg:gap-x-8 xl:gap-x-12">
          <div class="lg:col-span-4 mt-10 lg:mt-0">
            <img id="gambar-arti-ulos" class="w-full rounded-xl" src="../../assets/arti-ulos.png" alt="Image Description" />
          </div>
          <!-- End Col -->
          <div id="text-artiUlos" class="lg:col-span-6 lg:mt-0">
            <h1 class="font-bold lg:text-4xl text-neutral_100 text-justify">Arti Ulos</h1>
            <p class="mt-3 text-md text-neutral_80 dark:text-gray-400 text-justify pt-2">
              Ulos merupakan kain tenun tradisional khas dari suku Batak. Ulos awalnya bermakna
              kehangatan dan berfungsi sebagai selimut, kemudian berubah menjadi simbol adat batak
              yang disakralkan.
            </p>
            <p class="mt-3 text-md text-neutral_80 dark:text-gray-400 text-justify pt-4">
              Bagi masyarakat Batak Toba, ulos adalah bagian dari kehidupan. Bukan sekadar aksesori
              atau pelengkap pakaian adat, ulos merupakan identitas budaya setiap suku di tanah
              Batak yang memiliki sejarah kelahiran panjang.
            </p>
            <p class="mt-3 text-md text-neutral_80 dark:text-gray-400 text-justify pt-4">
              Ulos memiliki nilai simbolis yang sangat penting bagi masyarakat Batak, karena
              dianggap sebagai simbol kekuatan spiritual dan keberuntungan. Setiap motif yang ada
              pada ulos memiliki makna dan filosofi tersendiri; seperti melambangkan kesuburan,
              kejayaan, kebahagiaan, dan perlindungan dari kejahatan. Ulos sering dipakai pada acara
              adat, seperti pernikahan, upacara keagamaan, dan acara adat lainnya sebagai lambang
              penghormatan terhadap leluhur dan peninggalan budaya yang harus dilestarikan. Selain
              itu, ulos juga dijadikan sebagai simbol persatuan dan kerukunan antara suku Batak.
            </p>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Hero -->
    </div>
    <!-- End Tab Arti Ulos -->

    <!-- Tab Ulos di zaman modern -->
    <div id="segment-3" class="hidden" role="tabpanel" aria-labelledby="segment-item-3">
      <!-- Hero -->
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Grid -->
        <div id="section-arti-ulos" class="grid lg:grid-cols-10 lg:gap-x-8 xl:gap-x-12">
          <div class="lg:col-span-4 mt-10 lg:mt-0">
            <img
              id="gambar-ulos-modern"
              class="w-full rounded-xl"
              src="../../assets/ulos-modern.png"
              alt="Image Description"
            />
          </div>
          <!-- End Col -->
          <div id="text-ulosModern" class="lg:col-span-6 lg:mt-0">
            <h1 class="font-bold lg:text-4xl text-neutral_100 text-justify">
              Ulos di zaman modern
            </h1>
            <p class="mt-3 text-md text-neutral_80 dark:text-gray-400 text-justify pt-2">
              Ulos sendiri diproduksi dengan cara tradisional, yaitu dengan menenun menggunakan alat
              tenun sederhana dan bahan-bahan alami seperti kapas dan serat pinang. Proses pembuatan
              ulos memakan waktu yang cukup lama dan membutuhkan keahlian khusus dalam menenun. Oleh
              karena itu, ulos juga dihargai sebagai karya seni yang memiliki nilai ekonomi dan
              budaya yang tinggi. Saat ini, ulos sudah dikenal di seluruh Indonesia, bahkan hingga
              mancanegara, dan menjadi salah satu ikon budaya Indonesia yang membanggakan.
            </p>
            <p class="mt-3 text-md text-neutral_80 dark:text-gray-400 text-justify pt-4">
              Di zaman sekarang, ulos masih terus dikembangkan dan diproduksi oleh masyarakat Batak.
              Saat ini, ulos diproduksi dengan menggunakan teknologi yang lebih modern dan efisien,
              seperti alat tenun mesin (ATM) yang dapat membuat ulos dengan waktu singkat. Selain
              itu, desain dan motif ulos juga terus berkembang sesuai dengan perkembangan zaman dan
              permintaan pasar. Seperti yang telah dikembangkan oleh DiTenun, yaitu menghasilkan
              beragam motif ulos dengan bantuan machine learning. Kini, ulos tidak hanya digunakan
              sebagai pakaian adat atau perlengkapan upacara, tetapi juga sebagai bahan dekorasi dan
              aksesori.
            </p>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Hero -->
    </div>
    <!-- End Tab Ulos di zaman modern -->
  </div>
  <Footer/>
</template>

<script>
import Navbar from '../../components/EndUser/Navbar.vue'
import Footer from '../../components/EndUser/Footer.vue';
export default {
    // eslint-disable-next-line vue/no-reserved-component-names
    components:{Navbar, Footer}
}
</script>
