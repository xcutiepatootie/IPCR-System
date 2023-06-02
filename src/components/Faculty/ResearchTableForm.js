import React from 'react';

const ResearchTableForm = () => {
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
                            <h1>Research</h1>
                        </td>
                    </tr>

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>8.   Research program/projects/studies.</h1>
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) Research Proposal submitted/ Activity Conducted</td>
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
                        <td className="py-2 px-4 border-b border border-gray-800">b) Research Implemented and/or Completed within the Timeframe</td>
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
                        <td className="py-2 px-4 border-b border border-gray-800">c) Research Presented in Regional/National/International Conferences</td>
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
                        <td className="py-2 px-4 border-b border border-gray-800">d) Research Published in Peer-reviewed Journals</td>
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
                            />
                        </td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">e) Filed/Published/Approved Intellectual Property Rights</td>
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
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">f) Research Utilized/Deployed through Commercialization/Extension/Policy</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="target6"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="accomplished6"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submissiondate6"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submitteddate6"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">g) Number of citations in journals/books</td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="target7"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="number"
                                name="accomplished7"
                                className="w-full p-2 border border-black rounded"
                                min={0}
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submissiondate7"
                                className="w-full p-2 border border-black rounded"
                            />
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800">
                            <input
                                type="date"
                                name="submitteddate7"
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

export default ResearchTableForm;


