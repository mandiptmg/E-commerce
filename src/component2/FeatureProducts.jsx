import {useGlobalContext} from "../Context"
import ProductCard from "./ProductCard";

const FeatureProducts = () => {
 const {isLoading, featureProducts} = useGlobalContext();
 if(isLoading){
  return <div> Loading...</div>
 }
  return (
    <div className=' mx-auto md:max-w-[60rem] items-center grid  gap-[2rem]'>
     <h2 className="capitalize text-center text-xl text-gray-600 ">our feature services</h2>
     <div className="grid mx-auto gap-4 lg:grid-cols-3 md:grid-cols-2 ">
     {featureProducts.map((product) =>{
      return  <ProductCard key={product.id} {...product}/> 
     })}
     </div>
    </div>
      )
}

export default FeatureProducts