import React from 'react';

const SupportFunctionTableForm = () => {
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
                            <h1>Support Function</h1>
                        </td>

                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) Accomplishment Report</td>
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

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>11.  Participate in the Flag Raising Ceremony</h1>
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) Attendance</td>
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

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>12.  Participate in the Flag lowering</h1>
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) Attendance</td>
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

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>13.  Participate in the health  and wellness  program</h1>
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) a) Attendance sheet/Program of activities/other document as proof</td>
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

                    <tr className='border-b border-black'>
                        <td colspan="10" className="border-b border-black p-2">
                            <h1>14.  Participate in school celebrations and other allied activities</h1>
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) Attendance sheet/Program of activities/other document as proof</td>
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

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>15.  Attend  trainings /conferences/seminars</h1>
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) Training/Seminar/Conference certificate of attendance/ participation</td>
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
                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>16.  Attend  Faculty Meeting</h1>
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) Attendance</td>
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

                    <tr className='border-b border-black'>
                        <td colspan="10" className="border-b border-black p-2">
                            <h1>17.  Involvement in accreditation/ISO and other related activities</h1>
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) Attendance</td>
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

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>18.  Participate in the spiritual activities</h1>
                        </td>
                    </tr>

                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a) Attendance sheet/Program of activities/other document as proof</td>
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

export default SupportFunctionTableForm;
