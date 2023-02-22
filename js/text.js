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
      kilometers: 0,
      meters: 0
    }
  },
  watch : {
    kilometers: function(newValue, oldValue) {
      //判断是否是当前输入框
      if (this.currentlyActiveField === 'kilometers') {
        this.kilometers = newValue;
        this.meters = newValue * 1000;
      }
    },
    meters: function(newValue, oldValue) {
      //判断是否是当前输入框
      if (this.currentlyActiveField === 'meters') {
        this.kilometers = newValue/ 1000;
        this.meters = newValue;
      }
    }
  }
}

const vm = Vue.createApp(app).mount('#app')
vm.$watch('kilometers', function(newValue, oldValue) {
  // 这个回调将在 vm.kilometers 改变后调用
  document.getElementById ("info").innerHTML = "修改前值為: " + oldValue + "，修改後值為:" + newValue; 
})