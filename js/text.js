// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

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

const app = Vue.createApp({})
app.directive('runoob', (el, binding, vnode) => {
  console.log(binding.value.name)
  console.log(binding.value.url) 
  var s = JSON.stringify
  el.innerHTML = s(binding.value)
})
app.mount('#app')
