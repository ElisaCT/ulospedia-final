<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div
        class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-neutral_30"
      >
        <div class="h-96 w-72">
          <img
            class="h-full w-full object-cover transition-transform rounded-lg"
            src="../assets/asti-panjaitan.png"
            alt=""
          />
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral_100 group-hover:from_neutral_80 group-hover:via-neutral_60 group-hover:to-neutral_80"
        ></div>
        <div class="absolute inset-0 flex translate-y-[80%] flex-col text-left pl-6">
          <h1 class="text-xl font-medium text-neutral_10">Asti Panjaitan</h1>
          <p class="text-neutral_10">32 Tahun</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'PenenunGedogan'
}
</script>

<style></style>
