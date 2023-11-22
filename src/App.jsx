import Home from "./component/Home"
import About from "./component/About"
import { Routes, Route } from "react-router-dom"
import Products from "./component/Products"
import Contact from "./component/Contact"
import SingleProduct from './component/SingleProduct';
import Cart from "./component/Cart"
import Error from './component/Error'
import Header from "./component2/Header"
import Footer from "./component2/Footer"
const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App