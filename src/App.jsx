import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import './App.css'


function App() {
  

  return (
    <div className='bg-gray-500 h-screen rounded-2xl'>
      <h1 className='font-bold text-3xl p-5'>Todo List</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
