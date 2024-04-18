import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Menggunakan "Routes" sebagai pengganti "Switch"
import Home from "./pages/Home"
import DetailProyek from './pages/Detail_proyek';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      


      
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<DetailProyek />} />

        </Routes>
        
    </>
  )
}

export default App
