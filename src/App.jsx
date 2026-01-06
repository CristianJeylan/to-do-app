import {Routes, Route} from "react-router-dom"
import './App.css'
import Login from './components/Login'
import { ToDo } from './components/contents/ToDo'

function App() {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-300'>
      <Routes>
        <Route path="/" element={<ToDo/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
