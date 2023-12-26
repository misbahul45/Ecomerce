
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './pages/Home'
import { AuthState, Navbar } from './components/Navbar'
import { Login } from './auth/Login'
import Footer from './components/Footer'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import { SignUp } from './auth/SignUp'
import Cart from './pages/Cart'
import { useAuth } from './Store/store'
import Checkout from './pages/Checkout'


const App = () => {
  const user=useAuth((state)=>state.data) as AuthState
  return (
    <Router>
      {user.user&&<Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {user.user&&<Footer />}
    </Router>
  )
}

export default App
