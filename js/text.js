// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const { VueElement } = require("vue")

// const { VueElement } = require("vue")

        
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

//方法一: 全域
// const app = Vue.createApp({})
// // 註冊一個全局自訂義指令 'v-focus'
// app.directive('focus', {
//   //當被綁定的元素掛載到DOM時....
//   mounted(el) {
//     //聚焦元素
//     el.focus()
//   }
// })

// app.mount('#app')

//方法二: 局部指令
const app = {
  data() {
     return {
     }
  },
  directives: {
     focus: {
        // 指令的定义
        mounted(el) {
           el.focus()
        }
     }
  }
}

Vue.createApp(app).mount('#app')