import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

export default function TodoList() {
    const [todos,setTodos] = useState([])

    const create = todo => {
        setTodos([...todos, todo])
    }
    const todosData = todos.map(todo => {
        return <Todo task={todo.task} />
    })
  return (
    <div>
      <div>
        <TodoForm createTodo={create} />
        {todosData}
      </div>
    </div>
  )
}
