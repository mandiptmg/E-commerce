import { NavLink } from 'react-router-dom';
import FormatePrice from '../../component2/FormatePrice';

const ListView = ({products}) => {
  return (
    <>
    <div className='max-w-[60rem] mx-auto p-3'>
     {products.map(item =>{
      const {id,image,name,price, description} = item;
      return (
        <article
          key={id}
          className='grid md:grid-cols-2 shadow-md rounded-b mb-3'
        >
          <div className='grid place-items-center'>
            <img
              src={image}
              className='md:w-64 md:h-44 hover:opacity-50 transition-all duration-300 ease-in cursor-pointer '
              alt={name}
            />
          </div>
          <div className='text-gray-600 p-3 md:p-0 md:py-3'>
            <h2 className='text-2xl mb-3 capitalize text-black '>{name}</h2>
            <h5><FormatePrice price={price}/></h5>
            <p>{description.slice(0, 100)}...</p>
            <button className='capitalize border px-3 py-1 inline-block mt-3 border-indigo-500 bg-transparent transition-all duration-300 hover:bg-indigo-600 text-indigo-600 hover:text-white text-lg rounded-md '>
              <NavLink to={`/singleproduct/${id}`}> read more </NavLink>
            </button>
          </div>
        </article>
      )
     })}
    </div>
    </>
  )
}

export default ListView