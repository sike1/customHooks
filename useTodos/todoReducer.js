

export const todoReducer = (iniciaState, accion) => {
    switch (accion.type) {

        case "add Todo":
            return [...iniciaState, accion.payload]
        case "remove Todo":
            return iniciaState.filter(todo => todo.id != accion.payload)
        case "toggle Todo":
            return iniciaState.map(todo => {
                if (todo.id === accion.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        default:
            return iniciaState
    }
}