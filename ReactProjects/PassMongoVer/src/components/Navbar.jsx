import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className= "text-3xl font-serif font-bold bg-green-700 text-white h-[8vh] flex justify-around items-center">
            <div>
                <span className='text-gray-200'>&lt;</span>
                <span className='text-yellow-500'>Pass</span>
                <span className='text-gray-200'>Manager</span>
                <span className='text-gray-200'>/&gt;</span>
            </div>

            <div><button className='border text-2xl h-10 font-thin bg-gray-200 text-green-700 rounded-3xl p-1'><a href="https://github.com/" target='blank'> Github </a></button></div>
      </nav>
    </div>
  )
}

export default Navbar
