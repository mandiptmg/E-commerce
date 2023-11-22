const data = [
  {
    img: 'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
  },
  {
    img: 'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-telestream-press-kit-12.png',
  },
  {
    img: 'https://www.freepnglogos.com/uploads/company-logo-png/file-mobile-apps-development-company-logo-25.png',
  },
  {
    img: 'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-brand-apple-ios-logo-png-transparent-apple-ios-logo-images-26.png',
  },
  {
    img: 'https://www.freepnglogos.com/uploads/company-logo-png/hyundai-motor-company-logo-png-transparent-0.png',
  },
  {
    img: 'https://www.freepnglogos.com/uploads/company-logo-png/brand-tibco-logo-palo-alto-company-png-34.png',
  },
]
const Trusted = () => {
  return (
    <>
    
      <div className="max-w-[60rem] bg-gray-300 rounded-md py-7 my-11 mx-auto">
        <h3 className='capitalize text-center my-4 text-gray-500'>Trusted by 1000+ companies</h3>
        {/* <aside className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 items-center my-11 mx-auto gap-2'> */}
        <aside className="grid lg:grid-cols-6 mx-auto items-center place-items-center md:grid-cols-4 grid-cols-2">
          {data.map((company, index) => {
            return (
              <article key={index}>
                <img className="h-12 aspect-[3/2] object-contain" src={company.img} alt='company' />
              </article>
            )
          })}
        </aside>
      </div>
    </>
  )
}

export default Trusted