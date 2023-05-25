<template>
    <div class="flex flex-col items-center">
        <img src="../../assets/images/Admin/No Files.png" alt="">
        <p class="text-lg font-semibold text-center text-neutral_100">Data {{ name }} belum ada</p>
        <p class="text-sm font-normal text-center text-neutral_90">Tambahkan data {{ name }} untuk menampilkan informasi disini</p>
    </div>
</template>
<script>
export default {
    props: {
    name: {
      type: String,
      required: true
    }
  }
    
}
</script>
<style lang="">
    
</style>