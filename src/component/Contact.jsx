
const Contact = () => {
  return (
    <div>
      <h1 className='text-center text-3xl capitalize my-8 font-thin font-serif text-indigo-500 '>
        contact page
      </h1>
      <div className='  grid md:grid-cols-2 mx-auto w-[90vw]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226658.63896012583!2d84.8732817222318!3d27.42123843204317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb497ced46c917%3A0xafb8902c7a4532ab!2sHetauda!5e0!3m2!1sen!2snp!4v1696691229638!5m2!1sen!2snp'
          className='w-full mt-8 rounded-lg h-[466px]  border-0'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
        <div>
          <div className='my-8'>
            <form
              action='https://formspree.io/f/xleyoklo'
              method='POST'
              className='outline-indigo-600 shadow-2xl rounded-lg p-8 flex flex-col gap-4  mx-auto max-w-[30rem]'
            >
              <label
                htmlFor='username-success'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your name
              </label>
              <input
                type='text'
                id='username-success'
                autoCapitalize='off'
                required
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Username'
              />

              <label
                htmlFor='email-address-icon'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your Email
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 16'
                  >
                    <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
                    <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
                  </svg>
                </div>
                <input
                  type='email'
                  id='email-address-icon'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  autoCapitalize='off'
                  required
                  placeholder='name@email.com'
                />
              </div>

              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your message
              </label>
              <textarea
                id='message'
                rows='4'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                autoCapitalize='off'
                required
                placeholder='Leave a comment...'
              ></textarea>

              <input
                type='submit'
                className='bg-indigo-500 rounded-md hover:bg-indigo-700 uppercase cursor-pointer outline-indigo-600 py-1.5 text-white'
                value='send'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact