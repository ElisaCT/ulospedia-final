<template>
    <div>
        <h1 class="text-[#141414] font-bold text-4xl">Temukan Kekayaan Warisan Ulos</h1>
        <div class="w-full h-96 bg-black">
            <video class="w-full h-full object-cover" controls>
                <source src="path/to/video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  </template>
  
<script>
  export default {
    mounted() {
      this.$refs.player.addEventListener('play', () => {
        console.log('Video started playing')
      })
  
      this.$refs.player.addEventListener('ended', () => {
        console.log('Video ended')
      })
    }
  }
</script>
  
<style scoped>

</style>
