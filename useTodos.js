import { useEffect, useReducer } from "react"

import { todoReducer } from '../08-useReducer/todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem("todos") || [])
}

export const useTodos = () => {


    const [todos, dispatchTodo] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])



    const handleNewTodo = (todo) => {
        const accion = {
            type: "add Todo",
            payload: todo
        }

        dispatchTodo(accion)
    }

    const handleRemoveTodo = (id) => {
        dispatchTodo({
            type: "remove Todo",
            payload: id
        })

    }

    const onToggleTodo = (id) => {
        dispatchTodo({
            type: "toggle Todo",
            payload: id
        })
    }






    return {
        handleNewTodo,
        handleRemoveTodo,
        onToggleTodo,
        todos,
        counterTodos: todos.length,
        pendingTodos: todos.filter(todo => (!todo.done)).length,
    }

}
