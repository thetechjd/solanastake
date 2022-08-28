<template>
  <nav class="py-6 mx-6 flex space-x-4 px-12 justify-end bg-transparent flex flex-row">

    <img class='' src="../assets/twitter.svg" />
    <img class='' src="../assets/discord.svg" />
    <img class='' src="../assets/magiceden.svg" />
    <router-link to="stake">
      <button class="bg-white text-3xl text-black p-4">Connect Wallet</button>
    </router-link>

  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import NavButton from '@/components/NavButton.vue';

export default defineComponent({
  components: { NavButton },
  setup() {
    const route = useRoute();
    const path = computed(() => route.path);

    //const menu = [
    //{ name: 'Home', url: '/' },
    //{ name: 'Mint', url: '/' },
    //{ name: 'Team', url: '/' },
    //{ name: 'FAQ', url: '/' },
    //{ name: 'FARM MANAGER', url: '/manager' },
    //{ name: 'Stake', url: '/stake' },
    // ];

    return {
      // menu,
      path,
    };
  },
});
</script>

<style scoped>
</style>
