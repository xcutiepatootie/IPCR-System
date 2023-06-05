import { signIn } from 'next-auth/react'
import { HiUserCircle } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'




const LoginForm = ({ selectedPosition }) => {
  const [errorMessage, setErrorMessage] = useState('')
 

 

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get('email')
    const password = formData.get('password')
    const role = selectedPosition

    //const newFormData = { email: email, password: password, role: selectedPosition }
    //console.log(newFormData)

    let urls
    switch (role) {
      case 'superadmin':
        urls = '/campusdirector/dashboard';
        break;
      case 'campusdirector':
        urls = '/campusdirector/dashboard';
        break;
      case 'faculty':
        urls = '/faculty/dashboard';
        break;
      case 'dean':
        urls = '/dean/dashboard';
        break;
      case 'riuh':
        urls = '/riuh/dashboard';
        break;
      case 'eiuh':
        urls = '/eiuh/dashboard';
        break;
      default:
        throw new Error('Invalid role');
    }

    try {
      const data = await signIn('credentials', {
        callbackUrl: urls,
        email,
        password,
        role

      })
      console.log(data)
    }

    catch (error) {
      console.log(error)
    }


  }


  return (
    <>
    <div
              style={{
                backgroundColor: '#5A8A68',
                padding: '2rem 2rem', // Adjust the padding to control the width of the container
                margin: 'auto',
                borderRadius: '50px',
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
                marginLeft: 200,
                marginTop: 210
              }}
            >
      <h1>{selectedPosition}</h1>
      <form onSubmit={handleSubmit} method='post'>
        <div className='m-0 mt-2'>
          <div className='flex flex-col justify-center'>
            <div className='flex justify-center'>
              <h1 ><HiUserCircle size='40' color='#1F2344'/></h1>
              <input type="text" name='email' placeholder="Enter Username" className=" p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950 placeholder-gray-500::placeholder font-sans" />
            </div>
            <div className='pt-2 flex justify-center'>
              <h1 ><RiLockPasswordFill size='40' color='#1F2344' /></h1>
              <input type="password" name='password' placeholder="Enter Password" className=" p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-950 focus:border-blue-950 placeholder-gray-500::placeholder font-sans" />
            </div>
            <div className='flex justify-center'>
              <button type='submit' className="mt-4 ml-5 bg-blue-950 hover:bg-blue-950 text-white font-bold py-2 px-16 rounded">Login</button>
            </div>

          </div>
          {errorMessage && (
            <p className='text-red-500'>{errorMessage}</p>
          )}
        </div>
      </form>
      </div>
    </>


  )
}

export default LoginForm