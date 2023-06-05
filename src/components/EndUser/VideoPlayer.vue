<template>
  <div class="video-player">
    <iframe
      width="560"
      height="315"
      :src="embedUrl"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    }
  },
  computed: {
    embedUrl() {
      return `https://www.youtube.com/embed/ywWLIckWVtk}`
    }
  }
}
</script>

<style scoped>
.video-player {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
</style>
