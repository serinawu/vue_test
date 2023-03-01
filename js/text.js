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
      info: null
    }
  },
  mounted () {
    axios
     .post('https://www.runoob.com/try/ajax/demo_axios_post.php')
     .then(response => (this.info = response))
     .catch(function (error){
      console.log(error);
     })
  }
}

Vue.createApp(app).mount('#app')