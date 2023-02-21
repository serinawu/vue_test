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

var bcounter_A = {
  template: '<h1>自定義</h1>'
}

const app = Vue.createApp({
  components: {
    'button-counter-a': bcounter_A
  }
})
 
app.mount('#app')