import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';

const Stars = ({stars, reviews}) => {
   const reatingStars = Array.from({length:5}, (_,index)=>{
    let number = index + 0.5;
    return (
     <span key={index}>
      { stars >= index + 1 ? <FaStar/> : stars >= number ? <FaStarHalfAlt/>: <AiOutlineStar/>}
     </span>
    )
   })
   return (
    <>
    <div className='flex gap-x-2 mt-1 text-yellow-600 items-center'>
     {reatingStars}
     <p className='text-gray-600'>( {reviews} customer reviews )</p>
     </div>
    </>
   )
}

export default Stars