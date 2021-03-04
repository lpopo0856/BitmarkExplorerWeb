import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.config.productionTip = false
Vue.use(Antd)

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:3030'),
  vuex: {
    store,
    actionPrefix: "SOCKET_"
  }
})
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
