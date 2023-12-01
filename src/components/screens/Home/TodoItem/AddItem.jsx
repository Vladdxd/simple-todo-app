import { ErrorMessage } from '@hookform/error-message'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddItem = ({ addTodo }) => {
    const addItem = data => {
        addTodo(data.title)
        reset()
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    return (
        <div className="mb-16">
            <form className="flex justify-center items-center" onSubmit={handleSubmit(addItem)}>
                <input
                    className="text-black w-full p-3 rounded-lg mr-2"
                    {...register('title', {
                        required: 'This is required.',
                        maxLength: {
                            value: 50,
                            message: 'Max length is 50 characters.'
                        },
                        pattern: {
                            value: /^[A-Za-zА-Яа-я0-9іїґ ]+$/i,
                            message: 'Please enter only letters and numbers.'
                        }
                    })}
                    placeholder="Add a task"
                />
                <button className="flex-shrink-0 p-3 rounded-lg">Add task</button>
            </form>
            <ErrorMessage errors={errors} name="title" render={({ message }) => <p className="text-red-500 transition-all animate-bounce animate-appearance">{message}</p>} />
        </div>
    )
}

export default AddItem
