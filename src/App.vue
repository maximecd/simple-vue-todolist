<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { ref } from 'vue'
import { Trash2, Plus } from 'lucide-vue-next'

const store = useTodosStore()

const newTodoText = ref('')

function handleSubmit(e: Event) {
  e.preventDefault()
  store.addTodo(newTodoText.value)
  newTodoText.value = ''
}
</script>

<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-neutral-900 text-neutral-100 accent-emerald-300"
  >
    <div class="flex h-full w-full max-w-lg flex-1 flex-col items-center justify-center gap-4">
      <h1 class="mb-8 text-2xl font-bold">
        <span class="text-emerald-300">Vue 3</span> + Pinia simple Todo App
      </h1>
      <div class="w-full rounded-2xl bg-neutral-800 p-6">
        <form action="" @submit="handleSubmit" class="flex justify-between">
          <input
            type="text"
            v-model="newTodoText"
            class="block flex-1 resize-none overflow-auto border-none bg-transparent outline-none placeholder:text-neutral-400"
            placeholder="Write a new task"
          />
          <button
            type="submit"
            class="transition-colors"
            :class="newTodoText ? 'text-emerald-300' : 'text-neutral-400'"
          >
            <Plus />
          </button>
        </form>
      </div>
      <hr v-if="store.todos.length > 0" class="my-6 w-1/2 border-emerald-200" />
      <div class="flex w-full flex-col space-y-4">
        <div
          v-for="todo in store.todos"
          :key="todo.id"
          class="group flex w-full max-w-lg items-center gap-4 rounded-2xl bg-neutral-800 p-6"
        >
          <input type="checkbox" v-model="todo.done" />
          <input
            type="text"
            class="flex-1 bg-inherit focus:outline-none"
            :class="todo.done ? 'text-neutral-400 line-through' : ''"
            v-model="todo.text"
            placeholder="Edit task name"
          />
          <button
            class="invisible ml-auto focus:visible group-hover:visible group-has-[:focus]:visible"
            @click="store.deleteTodo(todo.id)"
          >
            <Trash2 class="text-red-300" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
