import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);