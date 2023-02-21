// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const { appendFile } = require("fs")

        
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

const app = Vue.createApp({
    data() {
      return {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: '看电影'
          },
          {
            id: 2,
            title: '吃饭'
          },
          {
            id: 3,
            title: '上 RUNOOB 学习'
          }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      addNewTodo() {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
  
  app.component('todo-item', {
    template: `
      <li>
        {{ title }}
        <button @click="$emit('remove')">删除</button>
      </li>
    `,
    props: ['title'],
    emits: ['remove']
  })
  
  app.mount('#todo-list-example')