import React from 'react';

const ExtensionTableForm = () => {
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
                            <h1>Extension</h1>
                        </td>

                    </tr>

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>9.  Extension projects.</h1>
                        </td>
                    </tr>


                    <tr className=''>
                        <td className="border border-black">
                            <h1>A)  Extension proposal submitted/activity conducted</h1>
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
                            <h1>B)  Persons trained/provided with technical advise</h1>
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
                            <h1>C) Persons who avail the service who rated the service as good or better</h1>
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
                            <h1>D) Persons given training or advisory who rated the timeliness of service delivery as good or better</h1>
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
                            <h1>E) Technical advice responded within 3 days upon request</h1>
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

export default ExtensionTableForm;
