import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';


const PerformanceIndicatorRow = ({ indicator, index }) => {
    return (
        <tr className="border-gray-800">
            <td className="py-2 px-4 border-b border border-gray-800">{indicator.label}</td>
            <td className="py-2 px-4 border-b border border-gray-800">
                <input
                    type="number"
                    name={`target${index}`}
                    className="w-full p-2 border border-black rounded"
                    min={0}
                />
            </td>
            <td className="py-2 px-4 border-b border border-gray-800">
                <input
                    type="number"
                    name={`accomplished${index}`}
                    className="w-full p-2 border border-black rounded"
                    min={0}
                />
            </td>
            <td className="py-2 px-4 border-b border border-gray-800">
                <div className="flex items-center">
                    <input
                        type="date"
                        name={`submissiondate${index}`}
                        className="w-full p-2 border border-black rounded"
                    />
                </div>
            </td>
            <td className="py-2 px-4 border-b border border-gray-800">
                <div className="flex items-center">
                    <input
                        type="date"
                        name={`submitteddate${index}`}
                        className="w-full p-2 border border-black rounded"
                    />
                </div>
            </td>
        </tr>
    );
};

const instruction1Indicators = [
    { label: 'a) No. of Syllabus prepared' },
    { label: 'b) No. of Course Guide' },
    { label: 'c) No. of SLM' },
    { label: 'd) No. of Subject Areas with Community Immersion/ Involvement Component' },
]

const instruction2Indicators = [
    { label: 'a) Attendance Sheet' },
    { label: 'b) Class Records' },
]

const instruction3Indicators = [
    { label: 'a) Evaluation of Teaching Effectivess (CQA-SF-012)' },
    { label: 'b) Classroom Observation (CQA-SF-012)' },
]

const instruction4Indicators = [
    { label: 'a) 1) TOS/ Rubrics (Midterm)	' },
    { label: 'a) 2) TOS/ Rubrics (Final Term)' },
    { label: 'b)  1) Test Questions (term exams) / Performance\'s based activities (Midterm)' },
    { label: 'b) 2) Test Questions (term exams) / Performance\'s based activities (Final Term)' },
    { label: 'c) 1) Answer Keys (Midterm)' },
    { label: 'c) 2) Answer Keys (Final Term)' },
]

const instruction5Indicators = [
    { label: 'a) No. of grading sheets submitted & encoded' },
]

const instruction6Indicators = [
    { label: 'a) No. of faculty & students seek advises (LSPU-ACAD-SF-011)' },
]

const instruction7Indicators = [
    { label: 'Accomplishment Report	' },
]




const InstructionTableForm = () => {
    const [datas, setDatas] = useState([]);
    const { data: session, status } = useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const cleanedData = datas.filter(
                (row) =>
                    !(
                        isNaN(row.target) &&
                        isNaN(row.accomplished) &&
                        row.submissionDate.trim() === '' &&
                        row.submittedDate.trim() === ''
                    )
            );

            const response = await axios.post('/api/faculty-up/mergeUserData', {
                userData: cleanedData,
                loggedInUserId: session.user.id,
            });

            console.log(response.data); // Handle the API response as needed

            setDatas([]); // Reset the datas state

            e.target.reset(); // Reset the form fields
        } catch (error) {
            console.error(error);
        }
    };

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

                            {instruction1Indicators.map((indicator, index) => (
                                <PerformanceIndicatorRow key={index} indicator={indicator} index={index + 1} />
                            ))}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>2. Organizes Classroom Instruction</h1>
                                </td>
                            </tr>

                            {instruction2Indicators.map((indicator, index) => (
                                <PerformanceIndicatorRow key={index} indicator={indicator} index={index + 1} />
                            ))}

                            <tr className='border-b border-black'>
                                <td className="border-b border-black p-2">
                                    <h1>3. Teaching Effectiveness</h1>
                                </td>
                            </tr>

                            {instruction3Indicators.map((indicator, index) => (
                                <PerformanceIndicatorRow key={index} indicator={indicator} index={index + 1} />
                            ))}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>4. Prepare and Check Summative/Evaluative/Formative Tests</h1>
                                </td>
                            </tr>

                            {instruction4Indicators.map((indicator, index) => (
                                <PerformanceIndicatorRow key={index} indicator={indicator} index={index + 1} />
                            ))}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>5.  Compute & Evaluate  Grades.</h1>
                                </td>
                            </tr>

                            {instruction5Indicators.map((indicator, index) => (
                                <PerformanceIndicatorRow key={index} indicator={indicator} index={index + 1} />
                            ))}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>6.  Consultation services to faculty and  students.</h1>
                                </td>
                            </tr>
                            {instruction6Indicators.map((indicator, index) => (
                                <PerformanceIndicatorRow key={index} indicator={indicator} index={index + 1} />
                            ))}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>7.   Prepare accomplishment report.</h1>
                                </td>
                            </tr>

                            {instruction7Indicators.map((indicator, index) => (
                                <PerformanceIndicatorRow key={index} indicator={indicator} index={index + 1} />
                            ))}

                        </tbody>
                    </table>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default InstructionTableForm;