import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import axios from 'axios';

const GenerationPDF = () => {

    const [data, setData] = useState([])
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {

                // Make the API request to retrieve user data
                const response = await axios.get("/api/faculty-up/fetchUserData", {
                    params: {
                        userId: session.user.id, // Pass the user ID as a parameter
                    },
                });

                // Extract the user data from the response
                const userData = response.data.userData;


                setData(userData)




            } catch (error) {
                console.error("Error:", error);
            }
        };

        // Fetch user data when the component mounts
        fetchData();
    }, [session]);

    console.log()


    return (
        <div>
            <table className='w-full bg-white  border-gray-800 border-collapse'>
                <thead>
                    <tr>
                        <td colSpan="10" className="whitespace-nowrap px-4 text-right italic">
                            SPMS Form 02
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="10"
                            className="whitespace-nowrap px-4 text-right italic">
                            Date: September 2021</td>
                    </tr>
                    <tr>
                        <td colSpan="10"
                            className="whitespace-nowrap px-4 text-right italic">
                            Revised: 03
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="whitespace-nowrap px-4 py-2 text-center">
                            INDIVIDUAL PERFORMANCE COMMITMENT and REVIEW (IPCR)
                        </th>
                    </tr>

                    <tr>
                        <td colSpan={10} className="whitespace-nowrap px-4 text-left">
                            I, <span className="underline">NAME</span>,- <span className="underline">Academic Rank</span> of the Laguna State Polytechnic University, commit to deliver and agree to be rated on the attainment of the following in accordance with
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={10} className="whitespace-nowrap px-4 py-2 text-left">
                            the indicated measures for the _____ Semester of Academic Year ______________.
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="10"
                            className="whitespace-nowrap px-4 py-5 text-left">
                        </td>
                    </tr>
                    <tr className="border-gray-800">
                        <th colSpan="3"
                            className=" px-4 border-t border-r text-left border-gray-800">Conforme:</th>
                        <th colSpan="2"
                            className=" px-4 border-t border-r text-left border-gray-800">Reviewed
                            by:</th>
                        <th colSpan="6"
                            className=" px-4 border-t border-r text-left border-gray-800">Approved
                            by:</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td colSpan="3"
                            className=" py-5 px-4 border-r border-gray-800"></td>
                        <td colSpan="2"
                            className=" py-5 px-4 border-r border-gray-800"></td>
                        <td colSpan="6"
                            className=" py-5 px-4 border-r border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <th colSpan="3"
                            className=" px-4 border-r text-center border-gray-800">Name</th>
                        <th colSpan="2"
                            className=" px-4 border-r text-center border-gray-800">Name</th>
                        <th colSpan="6"
                            className=" px-4 border-r text-center border-gray-800">Name</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td colSpan="3"
                            className="py-2 px-4 border-b border text-center border-gray-800">Ratee</td>
                        <td colSpan="2"
                            className="py-2 px-4 border-b border text-center border-gray-800">Dean/
                            Assoc. Dean</td>
                        <td colSpan="6"
                            className="py-2 px-4 border-b border text-center border-gray-800">Campus
                            Director</td>
                    </tr>
                    <tr className="border-gray-800">
                        <th
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800">Performance
                            Indicator</th>
                        <th
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800">Target</th>
                        <th
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800">Accomplished</th>
                        <th
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800">Date
                            of
                            Submission/Completion(Deadline)</th>
                        <th
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800">Date
                            Submitted/Completed</th>
                        <th colSpan="4"
                            className="py-2 px-4  border text-center bg-gray-300 border-gray-800">Rating</th>
                        <th
                            className="py-2 px-4  border-r text-center bg-gray-300 border-gray-800">Remarks</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td colSpan="1"
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800"></td>
                        <td colSpan="1"
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800"></td>
                        <td colSpan="1"
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800"></td>
                        <td colSpan="1"
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800"></td>
                        <td colSpan="1"
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800"></td>
                        <td colSpan="1"
                            className="py-2 px-4 border-t border-r text-center bg-gray-300 border-gray-800">QTY</td>
                        <td colSpan="1"
                            className="py-2 px-4 border-t border-r text-center bg-gray-300 border-gray-800">QL/E
                        </td>
                        <td colSpan="1"
                            className="py-2 px-4 border-t border-r text-center bg-gray-300 border-gray-800">T</td>
                        <td colSpan="1"
                            className="py-2 px-4 border-t border-r text-center bg-gray-300 border-gray-800">A</td>
                        <td colSpan="1"
                            className="py-2 px-4 border-r text-center bg-gray-300 border-gray-800"></td>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left bg-yellow-50">
                            Instruction</th>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">1.
                            Plan and prepare
                            instructional materials to enhance insctruction</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            No. of Syllabus prepared</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[0].target}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[0].accomplished}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[0].submissionDate}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[0].submittedDate}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[0].QTY}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[0].QLE}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[0].T}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[0].A}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[0].remarks}</td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">b)
                            No. of Course Guide</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[1].target}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[1].accomplished}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[1].submissionDate}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[1].submittedDate}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[1].QTY}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[1].QLE}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[1].T}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[1].A}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[1].remarks}</td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">c)
                            No. of SLM</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].target}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].accomplished}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].submissionDate}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].submittedDate}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].QTY}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].QLE}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].T}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].A}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].remarks}</td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">d)
                            Number of subject areas with community
                            immersion/involvement component</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].remarks}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].remarks}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].remarks}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].remarks}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].remarks}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].remarks}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].remarks}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].remarks}</td>
                        <td className="py-2 px-4 border-b border border-gray-800">{data.instructionProperty.instruction1[2].remarks}</td>
                    </tr>
                    <tr className="border-gray-800">
                        <th colSpan="10"
                            className="py-2 px-4 border-b border text-left border-gray-800">2.
                            Organizes classroom
                            instruction.</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            Attendance Sheet</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">b)
                            Class records</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">3.
                            Teaching
                            effectiveness</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            Evaluation of Teaching Effectivess
                            (CQA-SF-012)</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">b)
                            Classroom Observation (CQA-SF-012)</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">4.
                            Prepare and check
                            Summative/Evaluative/ Formative Tests.</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a.1)
                            TOS/ Rubrics (Midterm)</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a.2)
                            TOS/ Rubrics (Final Term)</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">b.1)
                            Test Questions (term exams) /
                            Performance's based activities (Midterm)</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">b.2)
                            Test Questions (term exams) /
                            Performance's based activities (Final Term)</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">c.1)
                            Answer Keys (Midterm)</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">c.2)
                            Answer Keys (Final Term)</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">5.
                            Compute & Evaluate
                            Grades.</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            No. of grading sheets submitted & encoded
                        </td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">6.
                            Consultation
                            services to faculty and students.</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            No. of faculty & students seek advises
                            (LSPU-ACAD-SF-011) </td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">7.
                            Prepare
                            accomplishment report.</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            Accomplishment Report</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left bg-yellow-50">Research
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">8.
                            Research
                            program/projects/studies.</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            Research Proposal submitted/ Activity
                            Conducted</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">b)
                            Research Implemented and/or Completed
                            within the Timeframe</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">c)
                            Research Presented in
                            Regional/National/International Conferences</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">d)
                            Research Published in Peer-reviewed
                            Journals</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">e)
                            Filed/Published/Approved Intellectual
                            Property Rights</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">f)
                            Research Utilized/Deployed through
                            Commercialization/Extension/Policy</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">g)
                            Number of citations in journals/books</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left bg-yellow-50">Extension
                        </th>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">9.
                            Extension projects.
                        </th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            Extension proposal submitted/activity
                            conducted</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">b)
                            Persons trained/provided with technical
                            advise</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">c)
                            Persons who avail the service who rated the
                            service as good or better</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">d)
                            Persons given training or advisory who
                            rated the timeliness of service delivery as good or
                            better</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">e)
                            Technical advice responded within 3 days
                            upon requeste) Technical advice responded within 3
                            days upon request</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left bg-yellow-50">Support
                            Function</th>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">10.
                            Perform
                            Officially-Deligated Assignment</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            Accomplishment Report</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">11.
                            Participate in the
                            Flag Raising Ceremony</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            Attendance</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">12.
                            Participate in the
                            Flag lowering</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            Attendance</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">13.
                            Participate in the
                            health and wellness program</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            Attendance sheet/Program of
                            activities/other document as proof</td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">14.
                            Participate in
                            school celebrations and other allied activities</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td className="py-2 px-4 border-b border border-gray-800">a)
                            Attendance sheet/Program of
                            activities/other document as proof
                        </td>


                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                        <td className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>

                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">15.
                            Attend trainings
                            /conferences/seminars</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-2 px-4 border-b border border-gray-800">a)
                            Training/Seminar/Conference certificate of
                            attendance/ participation</td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">16.
                            Attend Faculty
                            Meeting</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-2 px-4 border-b border border-gray-800">a)
                            Attendance</td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">17.
                            Involvement in
                            accreditation/ISO and other related activities</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-2 px-4 border-b border border-gray-800">a)
                            Attendance</td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>

                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">18.
                            Participate in the
                            spiritual activities</th>
                    </tr>

                    <tr className="border-gray-800">
                        <td
                            className="py-2 px-4 border-b border border-gray-800">a)
                            Attendance sheet/Program of
                            activities/other document as proof</td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left bg-yellow-50">
                            Administrative
                            Functions</th>
                    </tr>
                    <tr>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-left">19.
                            Perform
                            Administrative Designation Functions</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-2 px-4 border-b border border-gray-800">a.
                            Prepare….</td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-2 px-4 border-b border border-gray-800">b.
                            Submit…</td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-2 px-4 border-b border border-gray-800">c.
                            Increase…</td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-2 px-4 border-b border border-gray-800">d….</td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-2 px-4 border-b border border-gray-800">e….</td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-2 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                        <td
                            className="py-4 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr>
                        <th colSpan="5"
                            className="py-2 px-4 text-left border-gray-800">Comments
                            and Recommendation for
                            Development Purposes
                        </th>
                        <th colSpan="3"
                            className="py-2 px-4 border-l border-gray-800 text-center">Rating
                            Scale
                        </th>
                        <th colSpan="1"
                            className="py-2 px-4 border-b border border-gray-800 text-center">Numerical
                            Rating:
                        </th>
                        <th colSpan="10"
                            className="py-2 px-4 border-b border border-gray-800 text-center">Adjectival
                            Rating:
                        </th>
                    </tr>

                    <tr>
                        <td colSpan={5}></td>
                        <td colSpan={3} className="border-l border-gray-800 text-center">
                            5 - Outstanding <br />
                            4 - Very Satisfactory <br />
                            3 - Satisfactory <br />
                            2 - Unsatisfactory <br />
                            1 - Poor
                        </td>
                        <td className="py-10 px-4 border-b border border-gray-800"></td>
                        <td colSpan={10} className="py-10 px-4 border-b border border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <th colSpan="2"
                            className=" px-4 border-t border-r text-left border-gray-800">Discussed
                            with:</th>
                        <th colSpan="2"
                            className=" px-4 border-t border-r text-left border-gray-800">Assessed
                            by:</th>
                        <th colSpan="3"
                            className=" px-4 border-t border-r text-left border-gray-800">Checked
                            by: </th>
                        <th colSpan="3"
                            className=" px-4 border-t border-r text-left border-gray-800">Final
                            Rating: </th>
                    </tr>
                    <tr className="border-gray-800">
                        <td colSpan="2"
                            className=" py-10 px-4 border-r border-gray-800"></td>
                        <td colSpan="2"
                            className=" py-10 px-4 border-r border-gray-800"></td>
                        <td colSpan="3"
                            className=" py-10 px-4 border-r border-gray-800"></td>
                        <td colSpan="3"
                            className=" py-10 px-4 border-r border-gray-800"></td>
                    </tr>
                    <tr className="border-gray-800">
                        <th colSpan="2"
                            className=" px-4 border-r border-gray-800 text-center">Name</th>
                        <th colSpan="2"
                            className=" px-4 border-r border-gray-800 text-center">Name</th>
                        <th colSpan="3"
                            className=" px-4 border-r border-gray-800 text-center">Name</th>
                        <th colSpan="3"
                            className=" px-4 border-r border-gray-800 text-center">Name</th>
                    </tr>
                    <tr className="border-gray-800">
                        <td colSpan="2"
                            className="border-b border border-gray-800 text-center italic">Ratee</td>
                        <td colSpan="2"
                            className="border-b border border-gray-800 text-center italic">Dean/Assoc.
                            Dean</td>
                        <td colSpan="3"
                            className="border-b border border-gray-800 text-center italic">HRMO</td>
                        <td colSpan="3"
                            className="border-b border border-gray-800 text-center italic">Campus
                            Director</td>
                    </tr>
                    <tr className="border-gray-800">
                        <td colSpan="2"
                            className="border-b border border-gray-800">Date:</td>
                        <td colSpan="2"
                            className="border-b border border-gray-800">Date:</td>
                        <td colSpan="3"
                            className="border-b border border-gray-800">Date:</td>
                        <td colSpan="3"
                            className="border-b border border-gray-800">Date:</td>
                    </tr>





                </tbody>
            </table>
        </div >
    )
}

export default GenerationPDF