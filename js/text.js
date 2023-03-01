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

const app = {
  data() {
    return {
      checked: false,
      checkedNames: [],
      picked : 'Runoob',
      selected: '',
      chossed: '',
      select: 'https://facebook.com',
      options: [
        {text: 'facebook', value: 'https://facebook.com'},
        {text: 'instagram', value: 'https://instagram.com'},
        {text: 'twitter', value: 'https://twitter.com'}
      ]
    }
  }
}




Vue.createApp(app).mount('#app')