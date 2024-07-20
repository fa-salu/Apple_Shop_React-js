import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Navbar from './Component/Navbar/Navbar'
import ShopStore from './Pages/Shop/ShopStore'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/store' element={<ShopStore />} /> 
    </Routes>
    </> 
  )
}

export default App
