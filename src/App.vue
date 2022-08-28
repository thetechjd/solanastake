<template>
  <div class="relative bg-pattern bg-center h-full min-h-screen">
    <TheNavBar />




    <div class="p-10">
      <router-view />
    </div>

    <div class="pt-10"></div>


  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar';


export default {



  components: { TheNavBar },



}
</script>

<style>
* {
  font-family: 'Bebas Neue', cursive;
}

input[type='radio']:checked+span {
  @apply text-black;
}
</style>
