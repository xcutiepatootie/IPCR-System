import React from 'react';

const InstructionTableForm = () => {
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
                        <th className="border border-black p-2" colspan={4}>Ratings</th>
                        <th className="border border-black p-2">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>Instruction</h1>
                        </td>

                    </tr>

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>1. Plan and Prepare Instructional Materials to Enhance Instruction</h1>
                        </td>
                    </tr>


                    <tr className=''>
                        <td className="border border-black">
                            <h1>A) No. of Syllabus Prepared</h1>
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
                            <h1>B) No. of Course Guide</h1>
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
                            <h1>C) No. of SLM</h1>
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
                            <h1>D) No. of Subject Areas with Community Immersion/Involvement Component</h1>
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

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>2. Organizes Classroom Instruction</h1>
                        </td>
                    </tr>


                    <tr className=''>
                        <td className="border border-black">
                            <h1>A) Attendance Sheet</h1>
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
                            <h1>B) Class Records</h1>
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

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>3. Teaching Effectiveness</h1>
                        </td>
                    </tr>


                    <tr className=''>
                        <td className="border border-black">
                            <h1>A) Evaluation of Teaching Effectiveness(CQA-SF-012)</h1>
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
                            <h1>B) Classroom Observation(CQA-SF-012)</h1>
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

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>4. Prepare and Check Summative/Evaluative/Formative Tests</h1>
                        </td>
                    </tr>


                    <tr className=''>
                        <td className="border border-black">
                            <h1>A.1) TOS/ Rubrics(Midterm)</h1>
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
                            <h1>A.2) TOS/ Rubrics(Final Term)</h1>
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
                            <h1>B.1) Test Questions (term exams) / Performance's based activities (Midterm)</h1>
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
                            <h1>B.2) Test Questions (term exams) / Performance's based activities (Final Term)</h1>
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
                            <h1>C.1) Answer Keys (Midterm)</h1>
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
                            <h1>C.2) Answer Keys (Final Term)</h1>
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

export default InstructionTableForm;
