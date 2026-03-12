// app/todos/page.tsx
'use client'
import { useState } from 'react'
import useTodoStore from '@/store/useTodoStore'

export default function TodoPage() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore()
  const [input, setInput] = useState('')

  const handleAdd = () => {
    if (!input.trim()) return
    addTodo(input.trim())
    setInput('')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-indigo-600 mb-6">My Todos</h1>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            placeholder="Enter a new todo..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleAdd}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        {todos.length === 0 ? (
          <p className="text-gray-400 text-center">no todos available</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {todos.map((todo) => (
              <li key={todo.id} className="flex items-center justify-between gap-3">
                <span
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}