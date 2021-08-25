<template>
  <div>
    <h1>Griptape.js Workshop</h1>

    <p>The token info is:</p>

    <p>{{ tokenInfo }}</p>

    <div>
      <p>Your count is: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </div>
</template>

<script>
import { griptape } from '@stakeordie/griptape.js';
import { stkd } from './contracts';
import { secretCounter } from './contracts/secret-counter';

export default {
  data() {
    return {
      tokenInfo: undefined,
      count: undefined
    }
  },

  mounted() {
    // Here
    griptape.onConnect(() => {
        this.fetchTokenInfo();
        this.getCount();
    });
  },

  methods: {
    async fetchTokenInfo() {
      const res = await stkd.getTokenInfo()
      this.tokenInfo = res.token_info
    },

    async increment() {
      await secretCounter.doIncrement();
      await this.getCount();
    },

    async getCount() {
      const res = await secretCounter.getCount();
      this.count = res.count;
    }
  }
}
</script>
