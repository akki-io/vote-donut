import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import '@/assets/css/tailwind.css'
Amplify.configure(awsconfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
