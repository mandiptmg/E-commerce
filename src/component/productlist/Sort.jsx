import { BsFillGridFill, BsList } from 'react-icons/bs'
import { useFilterContext } from '../../Context/filterContext'


const Sort = () => {
 const { gridView, filterProducts, setGridView, setListView,sorting} =
   useFilterContext()
  return (
    <>
      <div className='flex w-full mx-auto justify-between items-center m-[5rem]'>
        <div className='flex gap-x-3 text-md'>
          <button
            className={
              gridView
                ? 'bg-black p-1 rounded text-white'
                : 'bg-gray-200 text-black p-1 rounded'
            }
            onClick={setGridView}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={setListView}
            className={
              !gridView
                ? 'bg-black p-1 rounded text-white'
                : 'bg-gray-200 text-black p-1 rounded'
            }
          >
            <BsList />
          </button>
        </div>
        <div>
          <p className='text-md font-normal text-gray-700 font-sans capitalize'>
            {`${filterProducts.length} product available`}
          </p>
        </div>
        <div>
          <form action='#'>
            <label htmlFor='sort'></label>
            <select onClick={sorting} name='sort' id='sort' className='border border-slate-950 text-gray-700 p-1 rounded'>
              <option value='lowest'>Price (lowest)</option>
              <option value='highest'>Price (highest)</option>
              <option value='a-z'>Price (a-z)</option>
              <option value='z-a'>Price (z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </>
  )
}

export default Sort