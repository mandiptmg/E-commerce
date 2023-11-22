import { useState } from 'react'

const MyImage = ({imgs= [{ url:''}]}) => {
  const [mainItem, setMainItem] = useState(imgs[0])
  return (
    <>
      <div className='flex md:flex-col items-center w-full md:gap-y-1 gap-x-1 mb-1 md:mb-0 '>
        {imgs.map((item, index) => {
          return (
            <figure key={index}>
              <img
                key={item.id}
                onClick={() => setMainItem(item)}
                src={item.url}
                alt={item.filename}
                className='w-48 h-20 object-cover cursor-pointer rounded '
              />
            </figure>
          )
        })}
      </div>
      <div>
        <img src={mainItem.url} alt={mainItem.filename} className='rounded  w-full object-cover h-[214px]' />
      </div>
    </>
  )
}

export default MyImage
