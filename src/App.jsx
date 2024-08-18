import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import  Home from './pages/Home'
import  Videocall  from './pages/Videocall'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/call" element={< Videocall />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
