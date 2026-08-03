import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from './pages/Vans.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import  "./server.js"
import Van from './pages/Van.jsx';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Host/Dashboard.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import HostLayout from './components/HostLayout.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import HostVan from './pages/Host/HostVanInfo.jsx';
import HostVanLayout from './components/HostVanLayout.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
function App() {
  Van(1)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="vans" element={<Vans/>}/>
            <Route path='vans/:id' element={<Van/>}/>
            <Route path="host" element={<HostLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="vans" element={<HostVans/>}/>
              <Route path="income" element={<Income/>}/>
              <Route path="reviews" element={<Reviews/>}/>
              <Route path='vans/:id' element={<HostVanLayout/>}>
                <Route index element={<HostVanInfo/>}/>
                <Route path='pricing' element={<HostVanPricing/>}/>
                <Route path='photos' element={<HostVanPhotos/>}/>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);