import React, {useState} from 'react'

export default function TodoForm(props) {
    const [task, setTask] = useState({task: ''})

    const handleTask = (event) => {
        setTask({[event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createTodo(task)
        setTask({task: ''})
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="task">New-Todo</label>
        <input type="text" placeholder='newtodo' id='task' name='task' value={task.task} onChange={handleTask} />
        <button>add-todo</button>
      </form>
    )
}

