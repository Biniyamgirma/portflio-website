import React from 'react'

function Navbar() {
  return (
    <nav className='w-full h-full bg-gray-200  px-6 '>
        <div className="hidden h-full md:flex justify-between items-center">
        <div className='text-2xl leading-tight text-gray-700 font-bold uppercase flex flex-col space-y-3'>
            <div className='mb-0 p-0'>Biniyam</div>
            <div className='-mt-3 '>girma alemu</div>
        </div>
            <ul className='flex justify-center items-center gap-16 font-semibold '>
                <li><span>[</span><a href="">Home</a><span>]</span></li>
                <li><span>[</span><a href="">About</a><span>]</span></li>
                <li><span>[</span><a href="">Project</a><span>]</span></li>
            </ul>
        <div>
            <button className='bg-gray-700 py-2 px-4 rounded-lg text-white font-semibold hover:bg-gray-600 transition-all duration-300 ease-in-out'>Contact 
                <span></span>
            </button>
        </div>
        </div>

        {/* mobile navbar */}
     <div className="h-full flex justify-between items-center md:hidden">
        <div className='text-sm leading-tight text-gray-700 font-bold uppercase flex flex-col space-y-3'>
            <div className='mb-0 p-0'>Biniyam</div>
            <div className='-mt-1 '>girma alemu</div>
        </div>
        <div>
            <svg className='size-14' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18H10" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 12L16 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
    </div>
        <ul className='md:hidden flex flex-col items-center space-y-12 font-semibold '>
                <li><span>[</span><a href="">Home</a><span>]</span></li>
                <li><span>[</span><a href="">About</a><span>]</span></li>
                <li><span>[</span><a href="">Project</a><span>]</span></li>
        </ul>    
            <button className='md:hidden w-full my-4 bg-gray-700 py-2 px-4 rounded-lg text-white font-semibold hover:bg-gray-600 transition-all duration-300 ease-in-out'>Contact 
                <span></span>
            </button>
    </nav>

  )
}

export default Navbar;