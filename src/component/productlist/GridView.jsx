import ProductCard from '../../component2/ProductCard'

const GridView = ({products}) => {
  return (
    <>
    <div className='grid max-w-[50rem] mx-auto gap-3 md:grid-cols-2 lg:grid-cols-3'>
     { products.map((item)=>{
       return <ProductCard key={item.id} {...item}/>
      })
     }
    </div>
    </>
  )
}

export default GridView