import FormatePrice from "../component2/FormatePrice" 
import {FaTrash} from 'react-icons/fa6'
import CardAmountToggle from "./CardAmountToggle"
import { useCartContext } from "../Context/cartContext"
const CartItem = ({id,name,colour,amount, image, price, max}) => {
  const {removeItem, setIncrease,setDecrease} = useCartContext();
  // const setDecrease = () => {
  //   // amount > 1 ? setAmount(amount - 1) : setAmount(1)
  // }
  // const setIncrease = () => {
  //   // amount > stock ? setAmount(amount + 1) : setAmount(stock)
  // }
  return (
    <div className='grid text-sm text-center items-center mt-7 grid-cols-3 mx-auto lg:grid-cols-5'>
      <div className='flex gap-x-3'>
        <figure>
          <img src={image} className='w-20 h-12' alt={id} />
        </figure>
        <div className='capitalize text-gray-800'>
          <p>{name}</p>
          <p className='flex items-center'>
            color:
            <div
              className='w-4 ml-1 h-4 rounded-full'
              style={{ backgroundColor: colour }}
            ></div>
          </p>
        </div>
      </div>
      <div className='hidden lg:block'>
        <FormatePrice price={price} />
      </div>
      <div className='mx-auto -mt-5'>
        <CardAmountToggle
          amount={amount}
          setDecrease={() =>setDecrease(id)}
          setIncrease={()=>setIncrease(id)}
        />
      </div>
      <div className='hidden lg:block'>
        <FormatePrice price={price * amount} />
      </div>
      <div className='mx-auto'>
        <button className=''>
          <FaTrash className='text-red-600 hover:text-red-900' onClick={()=>removeItem(id)} />
        </button>
      </div>
    </div>
  )
}

export default CartItem