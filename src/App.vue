<template>
  <div class="relative bg-purple-400 h-full min-h-screen">
    <TheNavBar />
    <div class="pt-10 px-10 flex justify-center align-middle">
      <p class="mt-10 text-4xl pt-3 px-1 mt-1 text-white">STAKE YOUR NFT</p>



    </div>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img class="sli" src="./assets/1.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/2.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/3.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/4.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/5.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/6.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/7.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/8.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/9.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/1.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/2.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/3.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/4.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/5.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/6.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/7.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/8.png" />
        </div>
        <div class="slide">
          <img class="sli" src="./assets/9.png" />
        </div>

      </div>

    </div>


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
};
</script>

<style>
* {
  font-family: 'Mochiy Pop One', sans-serif;
}

input[type='radio']:checked+span {
  @apply text-black;
}
</style>
