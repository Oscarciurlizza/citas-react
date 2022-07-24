import React from 'react'

const Header = () => {
  return (
    <header className='container mx-auto'>
      <nav className='flex justify-center md:gap-12 gap-6 font-semibold py-10 relative z-10'>
        <a className=' text-sm hover:text-gray-500 transition-colors cursor-pointer' href="#">Home</a>
        <a className=' text-sm hover:text-gray-500 transition-colors cursor-pointer' href="#">Lets Started</a>
        <a className=' text-sm hover:text-gray-500 transition-colors cursor-pointer' href="https://www.instagram.com/oscarciurlizza/">Contact</a>
        <a className=' text-sm hover:text-gray-500 transition-colors cursor-pointer' href="https://github.com/Oscarciurlizza?tab=repositories">Repository</a>
      </nav>
      <div className='header flex flex-col justify-center items-center absolute top-0 right-0 left-0'>
        <h1 className='font-extrabold text-center md:text-9xl text-7xl md:w-1/2'>#safePet {""}
            {/* <span className='text-blue-400'>Come on!</span> */}
        </h1>
        <span className='mt-5 mb-16 font-normal'>Improve the life of your pet 👋</span>
        <p className='xl:w-1/4 md:w-2/4 w-2/3 mx-auto text-center font-semibold leading-8'>Discover, know and report what your pet may be suffering from, your best friend will be eternally grateful <span className='block text-blue-700'>Lets start 🐶 !</span></p>
        <button className='mt-14 py-2 px-10 bg-white font-semibold border-2 border-black hover:bg-blue-100 transition-colors'>I want to take care of my pet !</button>
      </div>
    </header>
    
  )

}

export default Header;