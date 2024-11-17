import TodoItem from "./TodoItem"

export default function TodoList({setTodos, todos, removeItem, toggleTodo}) {

  return (
    <>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return <TodoItem key={todo.id} {...todo} removeItem={removeItem} toggleTodo={toggleTodo} />
        })}
      </ul>
    </>
  )
}
