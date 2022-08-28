<template>
  <div class="w-full flex items-center justify-center">
    <div
      class="w-1/2 flex flex-col bg-black justify-center items-center border-white border-b-4 border-t-4 border-l-4 border-r-4">
      <div class="w-4/5 mb-10 pt-10 px-10 bg-black border-b-4 border-white flex justify-center align-middle">
        <p class="mt-10 whitespace-nowrap text-4xl md:text-6xl pt-3 pb-2 px-1 mt-1 uppercase text-white">Stake
          Portal
        </p>

      </div>




      <div class=" w-3/4 flex flex-col justify-center py-4 items-center mb-10">
        <div class="w-full flex flex-row justify-between mb-5">
          <div class="w-1/2 flex flex-col text-left text-xl px-2 md:px-8 py-4 border-r">
            <p class='pb-3 text-lg text-2xl text-white'>Total Staked:</p>
            <p class="text-white text-2xl">0/<span class="text-gray-400">2382</span></p>
          </div>

          <div class="w-1/2 flex flex-col text-right text-xl px-2 md:px-8 py-4">
            <p class="pb-3 text-white text-2xl">Value staked:</p>
            <p class="text-2xl text-white"> $0</p>
          </div>

        </div>
        <button class="rainbow w-full p-3 md:px-10 md:py-6 text-2xl md:text-5xl"
          v-on:click="isHidden = !isHidden">Connect Wallet
        </button>
        <div v-if="!isHidden" class="justify-center items-center nes-select is-dark">
          <select required id="wallet" v-model="chosenWallet">
            <option class="text-gray-500" :value="null">Choose wallet..</option>
            <option :value="WalletName.Phantom">Phantom</option>
            <option :value="WalletName.Sollet">Sollet</option>
            <option :value="WalletName.SolletExtension">Sollet Extension</option>
            <option :value="WalletName.Solflare">Solflare</option>
            <option :value="WalletName.SolflareWeb">Solflare Web</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { WalletName } from '@solana/wallet-adapter-wallets';
import useCluster, { Cluster } from '@/composables/cluster';
import useWallet from '@/composables/wallet';


export default defineComponent({

  data() {
    return {
      isHidden: true
    };
  },
  setup(props) {
    const { wallet, getWallet } = useWallet();


    // cluster
    const { cluster, setCluster, getClusterURL } = useCluster();

    const newVal = 'mainnet';

    // wallet
    const { getWalletName, setWallet } = useWallet();
    const chosenWallet = computed({
      get() {
        return getWalletName();
      },
      set(newVal: WalletName | null) {
        setWallet(newVal, getClusterURL());
      },
    });














    return {
      Cluster,


      WalletName,
      chosenWallet



    };
  },
});
</script>

<style scoped>
</style>
