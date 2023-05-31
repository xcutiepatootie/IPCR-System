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

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) Extension proposal submitted/activity conducted</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="text"
                                name="text"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">b) Persons trained/provided with technical advise</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="text"
                                name="text"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">c) Persons who avail the service who rated the service as good or better</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="text"
                                name="text"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">d) Persons given training or advisory who rated the timeliness of service delivery as good or better</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="text"
                                name="text"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">e) Technical advice responded within 3 days upon request</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="text"
                                name="text"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="age"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
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
