import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link'
import { useRouter } from 'next/router';


const Navbar = () => {

    const [nav, setNav] = useState(false)



    const handleNavbar = () => {
        setNav(!nav);
    }

    return (
        <nav className='bg-white mx'>
            <div className='flex flex-row justify-between items-center h-16 max-w-none px-4 md:h-20'>
                <a>
                    <img className='h-16 md:h-20 w-auto p-2' src='../Logos/logo.png' alt='haha'></img>
                </a>
                <h1 className='w-full font-custom1 text-xl font-semibold md:text-2xl lg:text-4xl block'>Laguna State Polytechnic University
                    <span className="text-sm font-sans hidden md:text-sm md:block lg:text-2xl  text-gray-600">
                        San Pablo City Campus
                    </span>
                </h1>

                <ul className="hidden md:flex">
                    <li className="flex justify-end p-4 text-xl font-semibold hover:bg-indigo-700 hover:text-slate-100 rounded-lg transition-all">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="flex justify-end p-4 text-xl font-semibold hover:bg-indigo-700 hover:text-slate-100 rounded-lg transition-all">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>


                <div onClick={handleNavbar} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-800 bg-test ease-in-out duration-700 ' : 'fixed left-[-100%] '}>
                    <h1 className='w-full text-2xl font-bold mb-0'>IPCR</h1>
                    <ul className='pt-12 uppercase'>

                        <li className='p-4 text-lg font-semibold border-b border-gray-800 hover:bg-fuchsia-500 transition-all'>
                            <Link href='/about'>About</Link></li>
                        <li className='p-4 text-lg font-semibold border-b border-gray-800 hover:bg-fuchsia-500 transition-all'>
                            <Link href='/'>Contact</Link></li>



                    </ul>
                </div>


            </div>
        </nav>
    )
}

export default Navbar