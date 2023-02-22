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
      counter: 1
    }
  }
}

const vm = Vue.createApp(app).mount('#app')
vm.$watch('counter', function(nval, oval) {
  alert('計數器值的變化:' + oval + '變為' + nval + '!');
});