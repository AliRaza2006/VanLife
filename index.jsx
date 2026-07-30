import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from './pages/Vans.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  "./server.js"
import Van from './pages/Van.jsx';
import Layout from './components/Layout.jsx';

function App() {
  Van(1)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/vans" element={<Vans/>}/>
            <Route path='/van/:id' element={<Van/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);