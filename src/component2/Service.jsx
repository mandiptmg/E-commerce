
import {FaTruck} from 'react-icons/fa'
import {MdSecurity} from 'react-icons/md'
import { GiReceiveMoney } from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'

const Service = () => {
  return (
    <>
      <div className='max-w-[60rem] mx-auto my-24'>
        <div className=' items-center grid md:grid-cols-3 gap-6'>
          <div className='shadow-md p-8 bg-gray-300 rounded-md'>
            <div className='grid place-items-center'>
              <FaTruck className='text-center text-indigo-600 text-3xl  bg-white p-1 rounded-full' />
              <h3 className=' mt-8 text-sm font-medium text-gray-500'>
                Super Fast and free Delivery
              </h3>
            </div>
          </div>
          <div className='flex flex-col '>
            <div className=' mb-4 bg-gray-300  items-center gap-x-3 rounded-md flex justify-center py-4 px-4'>
              <MdSecurity className='text-indigo-600 text-3xl text-center bg-white p-1 rounded-full' />
              <h1 className='text-sm font-medium text-gray-500'>
                Non-contact Shipping
              </h1>
            </div>
            <div className='bg-gray-300 items-center gap-x-3 justify-center rounded-md flex py-4 px-4'>
              <GiReceiveMoney className='text-indigo-600 bg-white p-1 rounded-full text-3xl text-center flex gap-x-4' />
              <h1 className='text-sm font-medium text-gray-500'>
                {' '}
                Money-back Guaranteed
              </h1>
            </div>
          </div>
          <div className='shadow-md p-8 bg-gray-300 rounded-md'>
            <div className='grid place-items-center'>
              <RiSecurePaymentLine className='text-center bg-white p-1 rounded-full text-indigo-600 text-3xl ' />
              <h3 className='capitalize text-sm font-medium text-gray-500 mt-8'>
                super secure payment system
              </h3>
            </div>
          </div>

          {/* <div>
            <div>
              <RiSecurePaymentLine/>
              <h3 className='capitalize'></h3>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Service