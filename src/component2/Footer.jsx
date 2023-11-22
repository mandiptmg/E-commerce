import { NavLink } from "react-router-dom"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='relative w-full mt-28'>
      <section
        className=' hidden 
          md:block max-w-[40rem] lg:max-w-[60rem] mx-auto '
      >
        <div className='grid absolute max-w-[40rem] lg:max-w-[60rem] w-full -top-14 place-items-center grid-cols-2 rounded-lg py-8  bg-gray-200 items-center '>
          <div className='text-gray-500'>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <button
              type='button'
              className='text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 capitalize text-center mr-2 mb-2'
            >
              <NavLink to='/contact'>get started</NavLink>
            </button>
          </div>
        </div>
      </section>
      <footer className=' mx-auto text-white pt-24 bg-blue-gray-900 w-full'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center gap-y-8 md:place-items-center ml-8 md:ml-0 mx-auto'>
          <div>
            <h1 className='uppercase mb-4'>contact</h1>
            <ul className='text-gray-500'>
              <li>Street: Basamadi-3</li>
              <li>City: Hetauda</li>
              <li>Zip Code: 441660</li>
              <li>Phone Number : +27(0)71 404 1414</li>
              <li>Email Address:yahoo@gmail.com</li>
            </ul>
          </div>
          <div>
            <h1 className='uppercase mb-4'>menu</h1>
            <ul className='text-gray-500'>
              <li>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/products'>Products</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='uppercase mb-4 lg:-mt-8'>Newsletter</h1>
            <div className='flex '>
              <input
                type='text'
                placeholder='Your email address'
                className='px-3 py-1 text-black rounded-tl rounded-bl '
              />
              <button className='bg-indigo-600 hover:bg-indigo-700 capitalize px-3 rounded-tr rounded-br focus:outline-indigo-900 font-sans'>
                sign up
              </button>
            </div>
            <ul className='flex gap-4 mt-4'>
              <li>
                <a href='https://www.facebook.com/'>
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href='https://www.twitter.com/'>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/'>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/'>
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='text-center py-8'>
          <h3 className='capitalize text-lg font-serif '> coaching</h3>
          <p className='font-thin font-serif'>
            &copy;2023 - All rights reserved. Designed by:{' '}
            <a href='#'>@Mandip</a>
          </p>
        </div>
      </footer>
    </footer>
  )
}

export default Footer