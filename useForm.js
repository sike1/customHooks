import { useState } from "react"

export const useForm = (inicialForm = {}) => {

    const [formState, setFormState] = useState(inicialForm)


    const inputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })

    }

    const onResetForm = () => {
        setFormState(inicialForm)
    }

    return {
        ...formState,
        formState,
        inputChange,
        onResetForm
    }

}
