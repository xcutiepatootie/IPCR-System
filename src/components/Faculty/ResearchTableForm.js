import React from 'react';

const TableForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <table className="w-full border border-black">
                <thead>
                    <tr>
                        <th className="border border-black p-2">Performance Indicator</th>
                        <th className="border border-black p-2">Target</th>
                        <th className="border border-black p-2">Accomplished</th>
                        <th className="border border-black p-2">Date Of Submission/Completion(Deadline)</th>
                        <th className="border border-black p-2">Date Submitted/Completed</th>
                    </tr>
                </thead>
                <tbody>
                    

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>Research</h1>
                        </td>
                    </tr>

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>8.   Research program/projects/studies.</h1>
                        </td>
                    </tr>

                    <tr className=''>
                        <td className="border border-black">
                            <h1>A) Research Proposal submitted/ Activity Conducted</h1>
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>

                    <tr className=''>
                        <td className="border border-black">
                            <h1>B) Research Implemented and/or Completed within the Timeframe</h1>
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>

                    <tr className=''>
                        <td className="border border-black">
                            <h1>C) Research Presented in Regional/National/International Conferences</h1>
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>

                    <tr className=''>
                        <td className="border border-black">
                            <h1>D) Research Published in Peer-reviewed Journals</h1>
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>

                    <tr className=''>
                        <td className="border border-black">
                            <h1>E) Filed/Published/Approved Intellectual Property Rights</h1>
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>

                    <tr className=''>
                        <td className="border border-black">
                            <h1>F) Research Utilized/Deployed through Commercialization/Extension/Policy</h1>
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr><tr className=''>
                        <td className="border border-black">
                            <h1>G) Number of citations in journals/books</h1>
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="border-b border-black p-2">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>

                    {/* Add more rows as needed */}
                </tbody>
            </table>
            <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default TableForm;
