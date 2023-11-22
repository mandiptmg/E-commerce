import { FaPlus, FaMinus } from 'react-icons/fa';
const CardAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <>
      <div className='flex items-center mt-4'>
        <button onClick={() => setDecrease()}><FaMinus/></button>
        <div className='text-xl text-indigo-600 mx-6'>
         {amount}
        </div>
        <button onClick={() => setIncrease()}><FaPlus/></button>
      </div>
    </>
  )
}

export default CardAmountToggle;