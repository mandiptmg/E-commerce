import { useFilterContext } from '../../Context/filterContext'
import { FaCheck } from 'react-icons/fa6'
import FormatePrice from '../../component2/FormatePrice'

const FilterSection = () => {
  const {
    updateFilterValue,
    filter: { text, colors, price, maxPrice, minPrice, category },
    allProducts,
    filterClear,
  } = useFilterContext()

  const getUniqueData = (data, property) => {
    let newVal = data.map((item) => {
      return item[property]
    })

    if (property === 'colors') {
      newVal = newVal.flat()
    }
    return (newVal = ['all', ...new Set(newVal)])
  }

  const categoryOnlyData = getUniqueData(allProducts, 'category')
  const companyOnlyData = getUniqueData(allProducts, 'company')
  const colorOnlyData = getUniqueData(allProducts, 'colors')

  return (
    <>
      <div className=' m-[5rem]'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 pl-2 py-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search branch name...'
            name='text'
            value={text}
            onChange={updateFilterValue}
          />
        </form>
        <div className='mt-8'>
          <h3 className='text-md font-semibold text-blue-gray-800'>Category</h3>
          <div>
            {categoryOnlyData.map((item, index) => {
              return (
                <button
                  className={
                    category === item
                      ? 'block text-gray-700 capitalize underline hover:underline hover:text-gray-800 transition-all duration-300 ease-in mt-1'
                      : 'block text-gray-700 capitalize hover:underline hover:text-gray-800 transition-all duration-300 ease-in mt-1'
                  }
                  type='button'
                  name='category'
                  key={index}
                  onClick={updateFilterValue}
                  value={item}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
        <div className='mt-8'>
          <h3 className='text-md font-semibold text-blue-gray-800 capitalize'>
            company
          </h3>
          <form action='#'>
            <select
              className='border border-slate-950 capitalize text-gray-700 mt-1 py-1 rounded'
              onClick={updateFilterValue}
              name='company'
              id='company'
            >
              {companyOnlyData.map((item, index) => {
                return (
                  <option name='company' key={index} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          </form>
        </div>
        <div className='mt-8'>
          <h3 className='text-md font-semibold text-blue-gray-800 capitalize'>
            colors
          </h3>
          <div className='flex gap-x-1 flex-wrap'>
            {colorOnlyData.map((color, index) => {
              if (color === 'all') {
                return (
                  <button
                    key={index}
                    className='capitalize text-gray-700'
                    name='colors'
                    value={color}
                    onClick={updateFilterValue}
                  >
                    all
                  </button>
                )
              }
              return (
                <button
                  key={index}
                  style={{ backgroundColor: color }}
                  name='colors'
                  value={color}
                  className={
                    colors === color
                      ? 'w-5 ml-1 border-gray-700 border h-5 grid place-items-center text-white rounded-full opacity-[1] '
                      : 'w-5 h-5 border-gray-700 border ml-1 rounded-full hover:opacity-100 opacity-[0.5]'
                  }
                  onClick={updateFilterValue}
                >
                  {colors === color ? (
                    <FaCheck className='w-2 grid place-items-center' />
                  ) : null}
                </button>
              )
            })}
          </div>
        </div>
        <div className='mt-8'>
          <h3 className='text-md font-semibold text-blue-gray-800 capitalize'>
            colors
          </h3>
          <p>
            <FormatePrice price={price} />
          </p>
          <input
            type='range'
            name='price'
            max={maxPrice}
            onChange={updateFilterValue}
            min={minPrice}
            value={price}
          />
        </div>
        <div>
          <button type='button' className='text-white px-3 py-1 capitalize bg-indigo-600 rounded-md hover:bg-indigo-700' onClick={filterClear}>
            clear filters
          </button>
        </div>
      </div>
    </>
  )
}

export default FilterSection
