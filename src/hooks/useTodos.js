import { useState } from 'react'

export const useTodos = initialValue => {
    const [todos, setTodos] = useState(initialValue)

    const changeTodo = id => {
        const copy = [...todos]
        const currentTodo = copy.find(todo => todo.id === id)
        currentTodo.isComplete = !currentTodo.isComplete
        setTodos(copy)
    }

    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const addTodo = title => {
        setTodos(prev => [
            {
                id: prev.length + new Date(),
                title,
                isComplete: false
            },
            ...prev
        ])
    }

    return [todos, changeTodo, removeTodo, addTodo]
}
