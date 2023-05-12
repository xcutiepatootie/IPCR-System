
import { HiUserCircle } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import React, { useState } from 'react'

const SuperAdminLoginForm = () => {
  return (
    <>

      <form action='/api/superadminlogin' method='post'>
        <div className='m-0 overflow-y-hidden'>

          <div className='flex flex-col justify-center'>
            <div className='flex justify-center'>
              <h1>superadmin </h1>
            </div>

            <div className='flex justify-center'>
              <h1 ><HiUserCircle size='2rem' color='blue' /></h1>
              <input type="text" name='email' placeholder="Enter Username here" className=" p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500::placeholder font-sans" />
            </div>

            <div className='pt-2 flex justify-center'>
              <h1 ><RiLockPasswordFill size='2rem' color='blue' /></h1>
              <input type="password" name='password' placeholder="Enter Password here" className=" p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500::placeholder font-sans" />
            </div>

            <div className='flex justify-center'>
              <button type='submit' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded">LOGIN</button>
            </div>

          </div>

        </div>
      </form>

    </>


  )
}

export default SuperAdminLoginForm