import { NavLink } from 'react-router-dom'
import logo from '../asset/1696417883944.jpg/'
import { FaCartShopping, FaBars } from 'react-icons/fa6'
import {FaTimes } from 'react-icons/fa'
import { useState } from 'react';
import { useCartContext } from '../Context/cartContext';

const Header = () => {
  const [active, setActive] = useState(false);
  const { total_item } = useCartContext();
  const navlink = [
    { title: 'home', to: '/', id: '1' },
    { title: 'about', to: '/about' ,id: '2' },
    { title: 'products', to: '/products', id: '3'},
    { title: 'contact', to: '/contact',id: '4' },
  ]
  return (
    <>
      <div className='h-[5rem] grid sticky backdrop-blur-md  top-0 z-10  '>
        <div className='flex w-[90vw] mx-auto items-center justify-between'>
          <div className=' gap-x-2  items-center'>
            <NavLink to='/'>
              <img src={logo} alt='logo' className='w-9  h-9 rounded-full' />
            </NavLink>
          </div>
          <div className='flex items-center gap-5 lg:gap-10'>
            {navlink.map((item) => {
              const { title, to ,id} = item
              return (
                <ul
                  key={id}
                  className='text-lg hidden sm:block capitalize text-gray-600 hover:text-indigo-800'
                >
                  <li>
                    <NavLink to={to}>
                      {title}
                    </NavLink>
                  </li>
                </ul>
              )
            })}
          </div>
          <div>
            <button className='mr-5 relative md:mr-0'>
              <NavLink to='/cart'>
                <FaCartShopping className='text-lg' />
                <span className='absolute -top-3 -right-2 font-thin text-sm  bg-indigo-600 text-white rounded-full w-5 h-5 grid place-items-center'>
                  {total_item}
                </span>
              </NavLink>
            </button>

            <button
              onClick={() => setActive(!active)}
              className='sm:hidden   text-xl hover:text-indigo-900  text-indigo-700 '
            >
              <FaBars className='hover:rotate-90 transition-all duration-300 ' />
            </button>
          </div>
        </div>
      </div>

      {/* //close and Header menu */}

      <div
        className={
          active
            ? 'w-full visible z-10   bg-white fixed top-0 left-0 h-screen grid place-items-center  duration-300 transition-all scale-1'
            : 'w-full invisible    bg-white fixed top-0 left-0 h-screen grid place-items-center  duration-300 transition-all scale-0'
        }
      >
        <div>
          <button className='fixed top-8 right-3'>
            <FaTimes
              onClick={() => setActive(!active)}
              className='text-2xl text-red-600 duration-300 transition-all hover:scale-105 hover:text-red-800 '
            />
          </button>
          <div className='flex flex-col gap-y-10 items-center justify-center '>
            {navlink.map((item) => {
              const { title, to, id } = item
              return (
                <ul key={id}  className='text-4xl capitalize text-gray-600  hover:text-indigo-800'>
                  <li>
                    <NavLink to={to} onClick={() => setActive(false)}>
                      {title}
                    </NavLink>
                  </li>
                </ul>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
