import { useState } from "react";
import ManageUser from "./ManageUser"

const ManageUserContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select User")
    const [selectedCollection, setSelectedCollection] = useState(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setSelectedCollection(option)
        console.log(option)
    };

    return (
        <div>

            <div className="flex m-4">
                <div>
                    <h1>Show Users Here</h1>
                    <div className="flex-auto">
                       

                        <button
                            className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"

                        >
                            Update User
                        </button>
                        <button
                            className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"

                        >
                            Delete User
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-4">

                <div className="relative">
                    <button
                        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                        onClick={toggleMenu}
                    >
                        <span>{selectedOption}</span>
                        <svg
                            className={`w-4 h-4 ml-2 transition-transform duration-200 transform ${isOpen ? 'rotate-180' : ''
                                }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6 8l4 4 4-4H6z"
                            />
                        </svg>
                    </button>
                    {isOpen && (
                        <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                            <li className="py-1">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    onClick={() => selectOption('Campus Director')}>
                                    Campus Director
                                </a>
                            </li>
                            <li className="py-1">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    onClick={() => selectOption('Dean')}>
                                    Dean</a>
                            </li>
                            <li className="py-1">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    onClick={() => selectOption('Faculty')}>
                                    Faculty</a>
                            </li>
                            <li className="py-1">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    onClick={() => selectOption('EIUH')}>
                                    Extension Implementing Unit Head</a>
                            </li>
                            <li className="py-1">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                    onClick={() => selectOption('RIUH')}>
                                    Research Implementing Unit Head</a>
                            </li>
                        </ul>
                    )}
                </div>

            </div>

            <ManageUser selectedCollection={selectedCollection} />






        </div>

    );
};

export default ManageUserContainer;