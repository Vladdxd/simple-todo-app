import { useTodos } from '../../../hooks/useTodos'
import AddItem from './TodoItem/AddItem'
import TodoItem from './TodoItem/TodoItem'

const data = [
    {
        id: 1,
        title: 'Read the book',
        isComplete: false
    },
    {
        id: 2,
        title: 'Go shopping',
        isComplete: false
    },
    {
        id: 3,
        title: 'get the parcel',
        isComplete: false
    }
]

const Home = () => {
    const [todos, changeTodo, removeTodo, addTodo] = useTodos(data)

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Simple todo list </h1>
            <AddItem  addTodo={addTodo}/>
            {todos.map(item => (
                <TodoItem key={item.id} item={item} changeTodo={changeTodo} removeTodo={removeTodo} />
            ))}
        </div>
    )
}

export default Home
