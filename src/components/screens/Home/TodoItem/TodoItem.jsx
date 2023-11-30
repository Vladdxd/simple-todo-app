import Check from './Check'
import classNames from 'classnames'
import { BsFillTrashFill } from 'react-icons/bs'

const TodoItem = ({ item, changeTodo, removeTodo }) => {
    return (
        <div className="flex items-center justify-between mb-3 w-full bg-gray-700 max-w-md p-3 rounded-2xl">
            <div onClick={() => changeTodo(item.id)} className="flex items-center flex-grow cursor-pointer">
                <Check isComplete={item.isComplete} />
                <p className={classNames({ 'line-through': item.isComplete })}>{item.title}</p>
            </div>
            <BsFillTrashFill onClick={() => removeTodo(item.id)} size={24} className="text-gray-500 flex-shrink-0 hover:text-white transition-all cursor-pointer" />
        </div>
    )
}

export default TodoItem
