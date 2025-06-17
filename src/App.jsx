import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddForm from './AddForm'
import TodoList from './TodoList'
import ClearBtn from './ClearBtn'

function App() {

  return (
    <>
      <AddForm/>
      <TodoList/>
      <ClearBtn/>
    </>
  )
}

export default App
