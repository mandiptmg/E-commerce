import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import CardAmountToggle from './CardAmountToggle'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'

const AddToCard = ({ product }) => {
  const { addToCard } = useCartContext()
  const { id, colors, stock } = product
  const [colour, setColour] = useState(colors[0])
  const [amount, setAmount] = useState(1)
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock)
  }
  return (
    <>
      <div>
        <p className='flex items-center'>
          colors :
          {colors.map((color) => {
            return (
              <button
                key={id}
                style={{ backgroundColor: color }}
                className={
                  colour === color
                    ? 'w-8 ml-3 h-8 grid place-items-center text-white rounded-full  opacity-[1] '
                    : 'w-8 h-8 ml-4 rounded-full hover:opacity-100 opacity-[0.5]'
                }
                onClick={() => setColour(color)}
              >
                {colour === color ? <FaCheck /> : null}
              </button>
            )
          })}
        </p>
      </div>
      {/* //cardamound togglr */}
      <CardAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to='/cart'>
        <button
          className='capitalize px-3 py-1 bg-indigo-600 text-md  text-white mt-4 rounded'
          onClick={() => addToCard(id,colour, amount, product)}
        >
          add to cart
        </button>
      </NavLink>
    </>
  )
}

export default AddToCard
