import React from 'react';

const AdministrativeFunctionsTableForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                            <h1>Administrative Functions</h1>
                        </td>

                    </tr>

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>19. Perform Administrative Designation Functions</h1>
                        </td>
                    </tr>

                    <tr className=''>
                        <td className="border border-black">
                            <h1>A. Prepare….</h1>
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
                            <h1>B. Submit…</h1>
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
                            <h1>C. Increase…</h1>
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
                            <h1>D….</h1>
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
                            <h1>E….</h1>
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



                    {}
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

export default AdministrativeFunctionsTableForm;
