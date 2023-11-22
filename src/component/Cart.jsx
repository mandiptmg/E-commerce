import { useCartContext } from "../Context/cartContext"
import CartItem from "./CartItem"
import FormatePrice from "../component2/FormatePrice"
import { NavLink } from "react-router-dom"

const Cart = () => {
  const { cart, clearCart, shipping_fee, total_price } = useCartContext()

  if(cart.length === 0) {
    return <div className="grid place-items-center h-[50vh]">
      <h1 className="uppercase text-gray-600 text-2xl">no cart in item</h1>
    </div>
  }
  
  return (
    <div className='max-w-[60rem] mt-[5rem]   w-[90vw] mx-auto'>
      <div className='grid place-items-center  lg:grid-cols-5 grid-cols-3 mx-auto text-gray-600 capitalize '>
        <p>item</p>
        <p className='hidden lg:block'>price</p>
        <p>quantity</p>
        <p className='hidden lg:block'>subtotal</p>
        <p>remove</p>
      </div>
      <hr className='mt-3' />
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <hr className='my-3' />
      <div className='flex justify-between items-center'>
        <NavLink to='/products'>
          <button className='capitalize  hover:bg-indigo-800 bg-indigo-600 rounded text-white px-3 py-1'>
            continue shopping
          </button>
        </NavLink>
        <button
          onClick={clearCart}
          className='bg-red-600 text-white capitalize rounded px-3 py-1'
        >
          clear filter
        </button>
      </div>
      <div className='grid  justify-end mt-20'>
        <div className='flex items-center justify-between  gap-x-7'>
          <p className='capitalize  text-gray-700'>subtotal:</p>
          <p className='text-black font-medium'>
            <FormatePrice price={total_price} />
          </p>
        </div>
        <div className='flex justify-between items-center gap-x-7'>
          <p className='capitalize  text-gray-700'>shipping fee:</p>
          <p className='text-black font-medium'>
            <FormatePrice price={shipping_fee} />
          </p>
        </div>
        <hr className=' mt-2  mb-3' />
        <div className='flex justify-between  items-center gap-x-7'>
          <p className='capitalize  text-gray-700'>order total:</p>
          <p className='text-black font-medium'>
            <FormatePrice price={shipping_fee + total_price} />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cart