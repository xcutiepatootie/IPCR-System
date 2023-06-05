import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import LoginForm from './Login Forms/LoginForm';
import Router, { useRouter } from 'next/router';
import { BsFillPersonFill } from 'react-icons/bs';



const LoginContainer = () => {
    const [selectedPosition, setSelectedPosition] = useState('');
    const [showAllbuttons, setShowAllbuttons] = useState(true);
    const router = useRouter()


    const handleButtonClick = (position) => {
        setSelectedPosition(position);
        setShowAllbuttons(false)
    };

    const handleShowAllButton = () => {
        setShowAllbuttons(true);
        setSelectedPosition(null);
    }

    let loginForm = null;
    switch (selectedPosition) {
        case 'campusdirector':
        case 'faculty':
        case 'dean':
        case 'eiuh':
        case 'riuh':
            loginForm = <LoginForm selectedPosition={selectedPosition} />;
            break;
        default:
            break;
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center w-full'>
                <div className='grid grid-cols-5 gap-4 -mt-40 ml-10'>
                    {showAllbuttons ? (
                        <>
                            <div>
                                <button className=" border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]" onClick={() => handleButtonClick('campusdirector')}> <BsFillPersonFill className='h-12 w-12 ml-8 pb-1' /> CAMPUS DIRECTOR</button>
                            </div>
                            <div>
                                <button className=" border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]" onClick={() => handleButtonClick('faculty')}> <BsFillPersonFill className='h-12 w-12 mt-2 ml-8 pb-1' />FACULTY</button>
                            </div>
                            <div>
                                <button className=" border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]" onClick={() => handleButtonClick('dean')}> <BsFillPersonFill className='h-12 w-12 mt-2 ml-8 pb-1' />DEAN</button>
                            </div>
                            <div>
                                <button className=" border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]" onClick={() => handleButtonClick('eiuh')}> <BsFillPersonFill className='h-12 w-12 mt-2 ml-8 pb-1' />EIUH</button>
                            </div>
                            <div>
                                <button className=" border-solid border-blue-950 border-2 text-blue-950 hover:bg-blue-950 hover:text-white font-bold h-28 w-28 rounded-[12px]" onClick={() => handleButtonClick('riuh')}> <BsFillPersonFill className='h-12 w-12 mt-2 ml-8 pb-1' />RIUH</button>
                            </div>

                            {/* <div>
                                <footer>
                                <p className="text-black text-center">Laguna State Polytechnic University © Copyright 2023. All Rights Reserved.</p>
                            </footer>
                            </div>
                             */}
                        </>

                    ) : (
                        <div>
                            <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded w-full' onClick={() => handleShowAllButton()}>Show All Buttons</button>
                        </div>
                    )}
                    {loginForm}
                </div>
            </div>
        </div>
    );
};

export default LoginContainer;