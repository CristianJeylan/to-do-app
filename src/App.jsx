import {Routes, Route} from "react-router-dom"
import Autentication from './components/Autentication'
import { ToDo } from './components/contents/ToDo'

function App() {

  return (
    <div className='h-screen flex justify-center items-center bg-gray-300'>
      <Routes>
        <Route path="/" element={<ToDo/>}/>
        <Route path="/auth" element={<Autentication/>}/>
      </Routes>
    </div>
  )
}

export default App
