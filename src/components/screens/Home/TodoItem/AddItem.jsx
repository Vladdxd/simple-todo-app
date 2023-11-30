import { useState } from 'react'

const AddItem = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleClick = e => {
        e.preventDefault()
        addTodo(title)
    }

    
    return (
        <form className="flex justify-center items-center mb-6  ">
            <input className="text-black w-full p-3 rounded-lg mr-2" value={title} placeholder="Add a task" onChange={e => setTitle(e.target.value)} />
            <button className="flex-shrink-0 p-3 rounded-lg" onClick={e => handleClick(e)}>
                Add task
            </button>
        </form>
    )
}

export default AddItem
