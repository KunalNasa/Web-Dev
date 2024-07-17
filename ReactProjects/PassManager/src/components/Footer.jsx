import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-green-700 h-auto font-serif font-bold flex flex-col text-white items-center h-[8vh] justify-center' >
     <div className='text-3xl'>
                <span className='text-gray-200'>&lt;</span>
                <span className='text-yellow-500'>Pass</span>
                <span className='text-gray-200'>Manager</span>
                <span className='text-gray-200'>/&gt;</span>
      </div>
      <div className='text-xl text-gray-200'>Made using react</div>
    </footer>
  )
}

export default Footer
