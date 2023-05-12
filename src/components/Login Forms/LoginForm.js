
import { HiUserCircle } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'


const LoginForm = ({ selectedPosition }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const emailForm = formData.get('email')
    const passwordForm = formData.get('password')
    const newFormData = { email: emailForm, password: passwordForm, role: selectedPosition }
    console.log(newFormData)


    try {

      const response = await axios.post('/api/login', newFormData)
      // Handle the response here
      if (response.status === 200)
        router.push('/dashboard/dashboard')


    } catch (error) {
      console.error(error)
      setErrorMessage('Invalid credentials')

    }
  }

  const handleSubmits = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get('email')
    console.log(formData)
  }

  return (
    <>
      <h1>{selectedPosition}</h1>
      <form onSubmit={handleSubmit} method='post'>
        <div className='m-0 overflow-y-hidden'>
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