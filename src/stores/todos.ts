import { defineStore } from 'pinia'

interface Todo {
  id: string
  text: string
  done: boolean
}

interface State {
  todos: Todo[]
}

export const useTodosStore = defineStore('todos', {
  state: (): State => {
    return {
      todos: []
    }
  },
  actions: {
    addTodo(text: string) {
      const id = crypto.randomUUID()
      this.todos.push({
        id,
        text,
        done: false
      })
    },
    deleteTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id != id)
    }
  }
})
