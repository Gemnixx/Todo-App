import React from 'react'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'
import EditTodo from './Components/EditTodo'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100'>
      <AddTodo/>
      <Todo/>
      <EditTodo />
    </div>
  )
}

export default App
