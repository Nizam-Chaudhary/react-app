import { useState } from 'react';
import './styles.css';
import AddNewTodoForm from './components/AddNewTodoForm';
import TodoList from './components/TodoList';
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")

    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function removeItem(id) {
    setTodos(currentTodos => currentTodos.filter(currentTodo => currentTodo.id !== id))
  }

  function toggleTodo(id, isCompleted) {
    setTodos(currentTodos => currentTodos.map(currentTodo => currentTodo.id === id ? {...currentTodo, isCompleted} : currentTodo))
  }

  function addTodo(newItem) {
    setTodos(currentTodos => [...currentTodos, {
      id: crypto.randomUUID(),
      title: newItem,
      isCompleted: false
    }])
  }

  return (
    <>
      <AddNewTodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeItem={removeItem} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
