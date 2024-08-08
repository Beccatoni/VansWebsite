import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='flex flex-col px-7 gap-8 w-full h-full pt-56 '>
        <h1 className='font-bold text-5xl'>Sorry, the page you were looking for was not found</h1>
        
        <Link to="/" className='bg-black text-white rounded-lg w-full h-[4rem] text-2xl font-bold flex items-center justify-center'>Return to home</Link >
    </section>
  )
}

export default NotFound