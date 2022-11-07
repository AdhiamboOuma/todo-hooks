import React from 'react'

export default function Todo(props) {
  return (
    <div>
        {props.task}
        <button>edit</button>
        <button>x</button>
      </div>
  )
}
