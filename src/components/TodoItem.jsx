export default function TodoItem({ id, title, isCompleted, removeItem, toggleTodo }) {
  return (
    <>
      <li key={id}>
      <label>
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={e => toggleTodo(id, e?.target?.checked)}
        />
        {isCompleted ? <strike> {title} </strike> : title}
        <button
          className='btn btn-danger'
          onClick={() => removeItem(id)}
        >
            Delete
        </button>
      </label>
    </li>
    </>
  )
}
