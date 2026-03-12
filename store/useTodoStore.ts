// store/useTodoStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Todo = {
  id: string
  text: string
  completed: boolean
}

type TodoStore = {
  todos: Todo[]
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],

      addTodo: (text) => set((state) => ({
        todos: [...state.todos, {
          id: Date.now().toString(),
          text,
          completed: false
        }]
      })),

      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      })),

      deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
      })),
    }),
    { name: 'todo-storage' }
  )
)

export default useTodoStore
