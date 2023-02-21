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

const app = Vue.createApp({})
 
// 定义一个名为 runoob 的新全局组件
app.component('button-counter', {
    data() {
      return {
        count: 0
      }
    },
    template: `
    <button @click="count++">
    點了 {{ count }} 次!
    </button>`
})
 
app.mount('#app')