import { NavLink } from "react-router-dom"
import FormatePrice from "./FormatePrice"
const ProductCard = (products) => {
  const {id,name,image,price, category}= products;

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className='hover:shadow-xl transition-all duration-300 ease-linear hover:scale-105  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <figure className='relative'>
          <img className='rounded-t-lg h-48 w-full' src={image} alt={name} />
          <figcaption className='absolute bg-white rounded-xl px-3 py-1 capitalize text-lg font-thin right-2 top-3'>
            {category}
          </figcaption>
        </figure>
        <div className='flex justify-between px-2 py-3'>
          <h3 className='capitalize font-semibold text-gray-500'>{name}</h3>
          <p className='text-gray-500'>
            <FormatePrice price={price} />
          </p>
        </div>
      </div>
    </NavLink>
  )
}

export default ProductCard