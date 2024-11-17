import { useState } from "react"

export default function AddNewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("")

  function addNewItem(e) {
    e.preventDefault()

    if (newItem === "") return

    addTodo(newItem)

    setNewItem("")
  }

  return (
    <>
      <form onSubmit={addNewItem} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='form-row'>New Item</label>
          <input value={newItem} onChange={e => setNewItem(e?.target?.value)} type="text" id="item" placeholder='Enter item'/>
        </div>
        <button className='btn'>Add</button>
      </form>
    </>
  )
}
