import FilterSection from './productlist/FilterSection'
import Sort from './productlist/Sort'
import ProductList from './productlist/ProductList'

const Products = () => {

  return (
    <>
      <div className='grid w-[90vw]  mx-auto md:grid-cols-[.2fr,1fr]'>
        <div className='w-full'>
          <FilterSection />
        </div>
        <section className='w-full'>
          <div className="sort-filter">
            <Sort/>
          </div>
          <div className="main-product">
            <ProductList/>
          </div>
        </section>
      </div>
    </>
  )
}

export default Products


