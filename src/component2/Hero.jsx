import { NavLink } from "react-router-dom"
const Hero = ({data}) => {
 const {name, img} = data;
  return (
    <div className=' mt-14 md:mt-32'>
      <div className=' mx-auto md:max-w-[60rem] items-center grid gap-[2rem] md:grid-cols-2'>
        <div className=''>
          <p className='text-indigo-400 uppercase'>Welcome to</p>
          <h1
            className='
      text-4xl capitalize my-3 text-slate-900 '
          >
            {name}
          </h1>
          <p className='text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quo
            architecto voluptatum vero, repudiandae inventore explicabo atque
            ullam facilis? Earum quam praesentium nihil cumque aperiam dolorem
            et sequi, consectetur harum!
          </p>
          <button className='bg-indigo-500 px-3 py-1 rounded text-white inline-block mt-4'>
            <NavLink to='/products'>Shop Now</NavLink>
          </button>
        </div>
        <div className=''>
          <figure className='after:w-[50%] after:h-full after:left-0 after:top-[10%] after:bg-indigo-700 after:z-10'>
            <img
              src={img}
              alt='shop'
              className='w-full h-auto'
            />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Hero