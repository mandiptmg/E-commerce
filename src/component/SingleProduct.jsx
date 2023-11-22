import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import PageNavigation from './PageNavigation'
import FormatePrice from '../component2/FormatePrice'
import { CiDeliveryTruck } from 'react-icons/ci'
import { TbReplace } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import MyImage from './MyImage'
import Stars from './Stars'
import AddToCard from './AddToCard'

const api = 'https://api.pujakaitem.com/api/products'

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useGlobalContext()
  const { id } = useParams();
  const {
    id:man,
    name,
    company,
    price,
    description,
    stock,
    stars,
    image,
    reviews,
  } = singleProduct;
  if (isSingleLoading) {
    <div className='text-center text-4xl capitalize '>
      <h1>loading...</h1>
    </div>
  }

  useEffect(() => {
    getSingleProduct(`${api}?id=${id}`)
  }, [])
  return (
    <>
      <PageNavigation title={name} />
      <div>
        <div className=' mx-auto md:max-w-[60rem] items-center text-gray-600 mt-7 gap-[2rem] leading-7 grid md:grid-cols-2 text-sm w-[90vw] '>
          {/* product image  */}
          <div className='grid md:grid-cols-[.2fr,1fr] w-full items-center gap-x-2'>
            <MyImage imgs={image} key={man}/>
          </div>

          {/* product data  */}

          <div className='product-data'>
            <h2 className='text-3xl'>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <p className='text-black uppercase'>
              MRP:
              <del>
                <FormatePrice price={price + 40000} />
              </del>
            </p>
            <p className='text-indigo-600 '>
              Deal of the day:
              <FormatePrice price={price} />
            </p>
            <p className='leading-[1.6] my-3'>{description}</p>
            <div className='flex w-full justify-between items-center my-4 border-b-2 border-gray-300 '>
              <div className='grid place-items-center'>
                <CiDeliveryTruck className='bg-gray-300 text-3xl rounded-full p-1  mb-3' />
                <p>free delivery</p>
              </div>
              <div className='grid place-items-center'>
                <TbReplace className='bg-gray-300 text-3xl rounded-full p-1 mb-3' />
                <p>30 days Replacement</p>
              </div>
              <div className='grid place-items-center'>
                <MdSecurity className='bg-gray-300 text-3xl rounded-full p-1 mb-3' />
                <p>2 years Warrenty</p>
              </div>
            </div>
            <div className='product-info'>
              <p>
                Available:
                <span className='font-bold'>
                  {stock > 0 ? 'In Stock' : 'Not Available'}
                </span>
              </p>
              <p>
                ID: <span className='font-bold'>{man}</span>
              </p>
              <p>
                Brand: <span className='font-bold'>{company}</span>
              </p>
            </div>
            <hr className='my-3' />
            {stock > 0 && <AddToCard product={singleProduct} />}
           </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
