// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
        
//     createApp({
//         data() {
//             return {
//                 message: 'Hello Vue!'
//             }
//         }
//     }).mount('.demo')

//     createApp({
//         data() {
//             return {
//                 message: 'Hello 123123'
//             }
//         }
//     }).mount('.demo2')

const app = {
  data() {
    return {
      message: 'RUNOOB!!'
    }
  },
  computed: {
    reverseMessage: function() {
      return this.message.split('').reverse().join('')
    }
  }
}

const app2 = {
  data() {
    return {
      message: 'RUNOOB!!'
    }
  }
}

Vue.createApp(app).mount('#app')
Vue.createApp(app).mount('#app2')