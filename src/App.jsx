import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CustomeNavbar from './components/customenavbar/CustomeNavbar'
import Footer from './components/footer/Footer'
import Resturent from './components/resturent/Resturent'
import Products from './components/products/Products'
import PageNotFound from './components/pagenotfound/PageNotFound';
import Home from './components/home/Home'

function App() {
  return (
    <>
      
      <BrowserRouter>
        <CustomeNavbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/resturent' element={<Resturent/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
