<template>

  <div class="flex flex-row">
    <div class="nes-container with-title flex-1 mr-5">
      <p class="title">Mint NFT</p>
      <p class="mb-5">
        Choose this if you'd like to mint more NFTs!
      </p>
      <router-link to="/">
        <button class="nes-btn is-primary">Mint NFT</button>
      </router-link>
    </div>
    <div class="nes-container with-title flex-1 ml-5">
      <p class="title">Stake your NFTs</p>
      <p class="mb-5">
        Choose this if you'd like to stake your NFTs.
      </p>
      <router-link to="stake">
        <button class="nes-btn is-primary">Stake NFTs</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GEM_FARM_PROG_ID } from '@gemworks/gem-farm-ts';
export default defineComponent({
  setup() {
    return {
      GEM_FARM_PROG_ID,
    };
  },
});
</script>
<style scoped>
</style>
