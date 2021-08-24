import Vue from 'vue'
import App from './App.vue'
import { gripApp, getKeplrAccountProvider } from '@stakeordie/griptape.js'

Vue.config.productionTip = false

const restUrl = 'https://api.holodeck.stakeordie.com'
const provider = getKeplrAccountProvider()

gripApp(restUrl, provider, () => {

  new Vue({
    render: h => h(App),
  }).$mount('#app')

})