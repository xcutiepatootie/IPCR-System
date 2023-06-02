import React, { useState, useEffect } from 'react';


const InstructionTableForm = () => {
    const [datas, setDatas] = useState([]);




    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = [];

        // Iterate over each row of input fields
        for (let i = 1; i <= 4; i++) {
            const targetValue = parseInt(form.elements[`target${i}`].value);
            const accomplishedValue = parseInt(form.elements[`accomplished${i}`].value);
            const submissionDateValue = form.elements[`submissiondate${i}`].value;
            const submittedDateValue = form.elements[`submitteddate${i}`].value;

            const rowData = {
                target: targetValue,
                accomplished: accomplishedValue,
                submissionDate: submissionDateValue,
                submittedDate: submittedDateValue,
            };

            data.push(rowData);
        }

        setDatas((prevDatas) => [...prevDatas, ...data]);

        // Reset the form fields
        form.reset();

    };
    useEffect(() => {
        console.log(datas);
    }, [datas]);


    return (
        <div className='h-screen flex overflow-auto'>
            <div className='m-4'>
                <form onSubmit={handleSubmit}>
                    <table className="w-full border border-black">
                        <thead>
                            <tr>
                                <th className="border border-black p-2">Performance Indicator</th>
                                <th className="border border-black p-2">Target</th>
                                <th className="border border-black p-2">Accomplished</th>
                                <th className="border border-black p-2">Date Of Submission/ Completion(Deadline)</th>
                                <th className="border border-black p-2">Date Submitted/Completed</th>

                            </tr>
                            <tr className="border-gray-800">
                                <td colSpan="1" className="py-2 px-4 text-center border-gray-800"></td>
                                <td colSpan="1" className="py-2 px-4 text-center border-gray-800"></td>
                                <td colSpan="1" className="py-2 px-4 text-center border-gray-800"></td>
                                <td colSpan="1" className="py-2 px-4 text-center border-gray-800"></td>
                                <td colSpan="1" className="py-2 px-4 border-r text-center border-gray-800"></td>

                            </tr>
                        </thead>
                        <tbody>

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>Instruction</h1>
                                </td>
                            </tr>
                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>1. Plan and Prepare Instructional Materials to Enhance Instruction</h1>
                                </td>
                            </tr>

                            <tr className="border-gray-800">
                                <td className="py-2 px-4 border-b border border-gray-800">a) No. of Syllabus prepared</td>
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
                                    <div className="flex items-center">
                                        <input
                                            type="date"
                                            name="submissiondate1"
                                            className="w-full p-2 border border-black rounded"

                                        />

                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b border border-gray-800">
                                    <div className="flex items-center">
                                        <input
                                            type="date"
                                            name="submitteddate1"
                                            className="w-full p-2 border border-black rounded"

                                        />
                                    </div>
                                </td>

                            </tr>
                            <tr className="border-gray-800">
                                <td className="py-2 px-4 border-b border border-gray-800">b) No. of Course Guide</td>
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
                                    <div className="flex items-center">
                                        <input
                                            type="date"
                                            name="submissiondate2"
                                            className="w-full p-2 border border-black rounded"

                                        />

                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b border border-gray-800">
                                    <div className="flex items-center">
                                        <input
                                            type="date"
                                            name="submitteddate2"
                                            className="w-full p-2 border border-black rounded"

                                        />
                                    </div>
                                </td>

                            </tr>

                            <tr className="border-gray-800">
                                <td className="py-2 px-4 border-b border border-gray-800">c) No. of SLM</td>
                                <td className="py-2 px-4 border-b border border-gray-800">
                                    <input
                                        type="number"
                                        name="target3"
                                        className="w-full p-2 border border-black rounded"
                                    />
                                </td>
                                <td className="py-2 px-4 border-b border border-gray-800">
                                    <input
                                        type="number"
                                        name="accomplished3"
                                        className="w-full p-2 border border-black rounded"
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
                                <td className="py-2 px-4 border-b border border-gray-800">d) No. of Subject Areas with Community Immersion/ Involvement Component</td>
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
                                    <h1>2. Organizes Classroom Instruction</h1>
                                </td>
                            </tr>
                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>1. Plan and Prepare Instructional Materials to Enhance Instruction</h1>
                                </td>
                            </tr>

                            <tr className="border-gray-800">
                                <td className="py-2 px-4 border-b border border-gray-800">a) Attendance Sheet</td>
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
                                <td className="py-2 px-4 border-b border border-gray-800">b) Class Records</td>
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
                                    <h1>3. Teaching Effectiveness</h1>
                                </td>
                            </tr>

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>1. Plan and Prepare Instructional Materials to Enhance Instruction</h1>
                                </td>
                            </tr>

                            <tr className="border-gray-800">
                                <td className="py-2 px-4 border-b border border-gray-800">a) Evaluation of Teaching Effectivess (CQA-SF-012)</td>
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
                                <td className="py-2 px-4 border-b border border-gray-800">b) Classroom Observation (CQA-SF-012)</td>
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
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>4. Prepare and Check Summative/Evaluative/Formative Tests</h1>
                                </td>
                            </tr>
                            <tr className="border-gray-800">
                                <td className="py-2 px-4 border-b border border-gray-800">a. 1) TOS/ Rubrics (Midterm)</td>
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
                                <td className="py-2 px-4 border-b border border-gray-800">a. 2) TOS/ Rubrics (Final Term)</td>
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
                                <td className="py-2 px-4 border-b border border-gray-800">b. 1) Test Questions (term exams) / Performance's based activities (Midterm)</td>
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
                                <td className="py-2 px-4 border-b border border-gray-800">b. 2) Test Questions (term exams) / Performance's based activities (Final Term)</td>
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
                                <td className="py-2 px-4 border-b border border-gray-800">c. 1) Answer Keys (Midterm)</td>
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
                                <td className="py-2 px-4 border-b border border-gray-800">c. 2) Answer Keys (Final Term)</td>
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
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>5.  Compute & Evaluate  Grades.</h1>
                                </td>
                            </tr>
                            <tr className="border-gray-800">
                                <td className="py-2 px-4 border-b border border-gray-800">a) No. of grading sheets submitted & encoded</td>
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
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>6.  Consultation services to faculty and  students.</h1>
                                </td>
                            </tr>

                            <tr className="border-gray-800">
                                <td className="py-2 px-4 border-b border border-gray-800">a) No. of faculty & students seek advises (LSPU-ACAD-SF-011)</td>
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
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>7.   Prepare accomplishment report.</h1>
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


                            { }
                        </tbody >
                    </table >
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form >
            </div>
        </div>
    );
};

export default InstructionTableForm;
