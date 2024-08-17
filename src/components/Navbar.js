import React from 'react'

const Navbar = () => {
  return (
    <>
      <header>
        <nav className=" flex px-4 h-[3.25rem]">
          <div className='flex relative items-center p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" overflow-hidden size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div className='relative items-center p-3'>
            <ul className='flex '>
              <li><a className='mr-2 pl-2 pb-1' href="/">Pokedex</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar