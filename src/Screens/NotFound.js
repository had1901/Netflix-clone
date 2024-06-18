import React from 'react'
import { BiHomeAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img
         src='/images/not-found.svg'
         alt='notfound'
         className='w-full h-96 object-contain rounded-md'
      />
      <h1 className='lg:text-4xl font-bold'>Page Not Found</h1>
      <p className='font-medium text-border leading-6'>The page you are lookting for does not exist</p>
      <Link to='/' className='bg-subMain flex flex-rows gap-2 items-center text-white font-medium py-3 px-4 rounded-md'>
        <BiHomeAlt className='text-lg'/> Back Home
      </Link>
    </div>
  )
}

export default NotFound