import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const AboutPage = () => {
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
                  textAlign: 'center-justify',
                  marginBottom: '1rem',
                  color: '#172554',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                }}
              >
                At Laguna State Polytechnic University - San Pablo City Campus, we are committed to providing our employees
                with the tools and resources they need to succeed in their roles. That is why we have implemented a new
                Individual Performance Commitment and Review System (IPCR) to better track and evaluate employee performance.
                Our new IPCR system is designed to streamline the performance evaluation process, making it easier for managers and employees to set, track, and evaluate performance goals. <br></br> <br></br>Our automated IPCR system eliminates the need for
                paper-based forms and spreadsheets, reducing errors and saving time. With our new system, employees can easily
                set and track their performance goals, and managers can provide timely feedback to help employees improve their
                performance.<br></br><br></br>At Laguna State Polytechnic University - San Pablo City Campus, we believe that our employees are
                our greatest asset, and we are committed to providing them with the support they need to achieve their goals.
                Our new IPCR system is just one of the ways we are investing in our employees and our university future success.
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

export default AboutPage;
