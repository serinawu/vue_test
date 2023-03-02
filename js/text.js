const initialTodos = [ // 初始資料
  { id: 1, contents: "Go for a jog", completed: false },
  { id: 2, contents: "Buy bread", completed: false },
  { id: 3, contents: "Read JavaScript codelab", completed: true } //已完成
];

Vue.createApp({
  data() { //數據返回值
    return {
      todos: initialTodos, //帶入初始資料
      newTodoText: "" //新增的代辦值
    };
  },
  computed: { //計算方法
    remaining() { //計算未完成的函數的數量
      return this.todos.filter((todo) => !todo.completed).length;
    }
  },
  methods: { //方法
    addTodo() { //新增代辦事項函數
      if (!this.newTodoText) { //當 新增的代辦值 有值回傳時
        return;
      }
      this.todos.push({ //這個todos的資料庫新增(推播)
        id: Date.now(),
        contents: this.newTodoText, //內容= 新增的代辦值
        completed: false //狀態= 顯示未完成
      });
     this.newTodoText = ""; //完成上面操作input值會為空
    },
    removeTodo ({ id }) { //刪除代辦事項函數
      this.todos = this.todos.filter((todo) => todo.id !== id); //這個todos的資料庫過濾掉點擊的代辦且移除
    }
  }
}).mount("#app");