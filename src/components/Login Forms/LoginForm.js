import { signIn } from 'next-auth/react'
import { HiUserCircle } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'



const LoginForm = ({ selectedPosition }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      // Redirect to dashboard if a valid token is present
      switch (selectedPosition) {
        case 'campusdirector':
          router.push('/campusdirector/dashboard')
          break;
        case 'faculty':
          router.push('/faculty/dashboard')
          break;
        case 'dean':
          router.push('/dean/dashboard')
          break;
        case 'eiuh':
          router.push('/eiuh/dashboard')
          break;
        case 'riuh':
          router.push('/riuh/dashboard')
          break;


        default:
          router.push('/')
          break;
      }
    }
  }, []);

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
        role: selectedPosition,

      })
      console.log(data)
    }

    catch (error) {
      console.log(error)
    }


  }


  return (
    <>
      <h1>{selectedPosition}</h1>
      <form onSubmit={handleSubmit} method='post'>
        <div className='m-0 mt-2 overflow-y-hidden'>
          <div className='flex flex-col justify-center'>
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
          {errorMessage && (
            <p className='text-red-500'>{errorMessage}</p>
          )}
        </div>
      </form>

    </>


  )
}

export default LoginForm