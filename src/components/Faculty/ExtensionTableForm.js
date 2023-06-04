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
                                type="number"
                                name="target1"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="accomplished1"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submissiondate1"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submitteddate1"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">b) Persons trained/provided with technical advise</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="target2"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="accomplished2"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submissiondate2"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submitteddate2"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">c) Persons who avail the service who rated the service as good or better</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="target3"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="accomplished3"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submissiondate3"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submitteddate3"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">d) Persons given training or advisory who rated the timeliness of service delivery as good or better</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="target4"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="accomplished4"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submissiondate4"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submitteddate4"
                                className="w-full p-2 border border-black rounded"
                            /></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">e) Technical advice responded within 3 days upon request</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="target5"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="accomplished5"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submissiondate5"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submitteddate5"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>




                    { }
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

const extension1Indicators = [
    { id: "indicator1", label: 'a) Extension proposal submitted/activity conducted' },
    { id: "indicator2", label: 'b) Persons trained/provided with technical advise' },
    { id: "indicator3", label: 'c) Persons who avail the service who rated the service as good or better' },
    { id: "indicator4", label: 'd) Persons given training or advisory who rated the timeliness of service delivery as good or better' },
    { id: "indicator5", label: 'e) Technical advice responded within 3 days upon request' }
];
