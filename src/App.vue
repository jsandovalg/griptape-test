<template>
  <div>
    <h1>Griptape.js Workshop</h1>

    <p>The token info is:</p>

    <p>{{ tokenInfo }}</p>
  </div>
</template>

<script>
import { stkd } from './contracts'

export default {
  data() {
    return {
      tokenInfo: undefined
    }
  },

  mounted() {
    this.fetchTokenInfo()
  },

  methods: {
    async fetchTokenInfo() {
      const res = await stkd.getTokenInfo()
      this.tokenInfo = res.token_info
    }
  }
}
</script>