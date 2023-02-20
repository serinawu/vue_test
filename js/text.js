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


    const test = {
        data() {
            return {
                numbers: [ 1, 2, 3, 4, 5]
            }
        },
        computed: {
            evenNumbers() {
                return this.numbers.filter(number => number % 2 === 0)
            }
        }
    }
    Vue.createApp(test).mount('#app')