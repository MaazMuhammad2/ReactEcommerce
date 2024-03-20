import { useState } from 'react'
// import './App.css'
import { Button } from '@material-tailwind/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NoPage from './pages/noPage/NoPage'
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from './context/MyState'
import {Toaster} from 'react-hot-toast'

function App() {
  // const [count, setCount] = useState(0)

  // const addNum = () => {
  //   setCount(count + 1)
  // }

  return (
    <>
      {/* <h1 onClick={addNum} className='text-lg text-white bg-red-700'>Devin {count}</h1> */}
      <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/*' element={<NoPage />} />
            <Route path="/ProductInfo" element={<ProductInfo />} />
            <Route path="/ProductInfo" element={<ProductInfo />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/allProduct" element={<AllProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/addproduct" element={<AddProductPage />} />
            <Route path="/updateproduct" element={<UpdateProductPage />} />
          </Routes>
            <Toaster />
        </Router>
      </MyState>
    </>
  )
}

export default App
