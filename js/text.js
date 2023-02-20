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

    var app123  = new Vue ({
        el: '#app',
        data: {
            message: '<a href="#">Hello Vue</a>',
        }
    });

    Vue.createApp(app123).mount("#app");