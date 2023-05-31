import Navbar from '@/components/Navbar'

import LoginContainer from '@/components/LoginContainer'

export default function Home() {
  return (
    <>
     
      <div className='m-0 overflow-y-hidden'>
        <div className='flex justify-center items-center flex-wrap'>
          <div className='w-full sm:w-auto sm:pr-4'>
            <img
              className='h-auto w-auto mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl 2xl:w-lg'
              src='./Pictures/ipcrlogo.png'
              alt='Ipcr_Logo'
            />
          </div>
          <div className='w-full md:m-8 mb-12 sm:w-auto flex-grow-0 pl-4'>
            <LoginContainer />
          </div>
        </div>
      </div>
    </>
  );
}