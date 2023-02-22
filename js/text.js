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
  computed: { //是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值
    reverseMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: { //在重新渲染的时候，函数总会重新调用执行。
    reverseMessage2: function () {
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