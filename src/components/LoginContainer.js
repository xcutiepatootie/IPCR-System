import { useState } from 'react';
import LoginForm from './Login Forms/LoginForm';


const LoginContainer = () => {
    const [selectedPosition, setSelectedPosition] = useState('');
    const [showAllbuttons, setShowAllbuttons] = useState(true);

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
                {showAllbuttons ? (
                    <>
                        <div>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded w-full" onClick={() => handleButtonClick('campusdirector')}>Campus Director</button>
                        </div>
                        <div>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded w-full" onClick={() => handleButtonClick('faculty')}>Faculty</button>
                        </div>
                        <div>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded w-full" onClick={() => handleButtonClick('dean')}>Dean</button>
                        </div>
                        <div>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded w-full" onClick={() => handleButtonClick('eiuh')}>EIUH</button>
                        </div>
                        <div>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded w-full" onClick={() => handleButtonClick('riuh')}>RIUH</button>
                        </div>

                    </>
                ) : (
                    <div>
                        <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded w-full' onClick={() => handleShowAllButton()}>Show All Buttons</button>
                    </div>
                )}
                {loginForm}
            </div>
        </div>
    );
};

export default LoginContainer;