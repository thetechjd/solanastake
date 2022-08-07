<template>
  <nav class="py-6 bg-black flex flex-row justify-center border-b border-gray-200 align-middle">
    <NavButton v-for="i in menu" :key="i.name" :title="i.name" :url="i.url" :class="{ active: path === i.url }" />
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

    const menu = [
      { name: 'Home', url: '/' },
      { name: 'Mint', url: '/' },
      { name: 'Team', url: '/' },
      { name: 'FAQ', url: '/' },
      //{ name: 'FARM MANAGER', url: '/manager' },
      { name: 'Stake', url: '/stake' },
    ];

    return {
      menu,
      path,
    };
  },
});
</script>

<style scoped>
</style>
