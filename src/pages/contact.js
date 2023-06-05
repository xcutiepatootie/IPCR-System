import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsTelephone  } from "react-icons/bs";
import { MdOutlineEmail  } from "react-icons/md";
import { GrLocation  } from "react-icons/gr";
import { AiTwotoneContacts  } from "react-icons/ai";







const ContactPage = () => {
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the body element
    return () => {
      document.body.style.overflow = 'unset'; // Restore default scrolling on component unmount
    };
  }, []);


  return (
    <div>
      <div onClick={handleNavbar} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-800 bg-test ease-in-out duration-700 ' : 'fixed left-[-100%] '}>
        <h1 className='w-full text-2xl font-bold mb-0'>
          <Link href="/">Laguna State Polytechnic University</Link>
        </h1>
        <ul className='pt-12 uppercase'>
          <li className='p-4 text-lg font-semibold border-b border-gray-800 hover:bg-fuchsia-500 transition-all'>
            <Link href='/about'>About</Link>
          </li>
          <li className='p-4 text-lg font-semibold border-b border-gray-800 hover:bg-fuchsia-500 transition-all'>
            <Link href='/'>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="background-image-container" style={{ backgroundAttachment: 'fixed' }}>
        <img src="/Pictures/lspu.jpg" alt="Background" className="background-image" />
        <div className="text-container">
          <div className="center-content">
            <div
              style={{
                backgroundColor: 'rgba(165, 197, 174, .8)',
                padding: '1rem 1rem', // Adjust the padding to control the width of the container
                marginRight: '-20rem',
                borderRadius: '50px',
                textAlign: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
              }}
            >
              <h1
                style={{
                  textAlign: 'center',
                  marginBottom: '1rem',
                  color: '#172554',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  
                }}
              >
                Contact Information:<br></br>
                Location: Brgy, Del Remedio San Pablo City Laguna, San Pablo City, Philippines<br></br>
                Telephone Number:(049) 554 9910  
                Email: icts_spc@lspu.edu.ph<br></br>
                Link: lspu.edu.ph/campus/home/spc
                
              </h1>
            </div>
          </div>
        </div>
      </div>

      <footer
        style={{
          backgroundColor: '#ffffff',
          textAlign: 'center',
          padding: 0,
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <p style={{ fontSize: 15 }}>Laguna State Polytechnic University © 2023. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
