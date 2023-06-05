import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const PerformanceIndicatorRow = ({ indicator, index, onUpdateValue, instructionType, data }) => {
    const [targetValue, setTargetValue] = useState('');
    const [accomplishedValue, setAccomplishedValue] = useState('');
    const [submissionDateValue, setSubmissionDateValue] = useState('');
    const [submittedDateValue, setSubmittedDateValue] = useState('');


    useEffect(() => {
        if (data.target !== undefined) {
            setTargetValue(data.target);
            onUpdateValue(index, 'target', data.target, instructionType); // Call onUpdateValue with initial target value
        }

        if (data.accomplished !== undefined) {
            setAccomplishedValue(data.accomplished);
            onUpdateValue(index, 'accomplished', data.accomplished, instructionType); // Call onUpdateValue with initial accomplished value
        }

        if (data.submissionDate !== undefined) {
            setSubmissionDateValue(data.submissionDate);
            onUpdateValue(index, 'submissionDate', data.submissionDate, instructionType); // Call onUpdateValue with initial submissionDate value
        }

        if (data.submittedDate !== undefined) {
            setSubmittedDateValue(data.submittedDate);
            onUpdateValue(index, 'submittedDate', data.submittedDate, instructionType); // Call onUpdateValue with initial submittedDate value
        }
    }, [data.target, data.accomplished, data.submissionDate, data.submittedDate]);


    const handleTargetChange = (e) => {
        const value = e.target.value;
        setTargetValue(value);
        onUpdateValue(index, 'target', value, instructionType);
    };

    const handleAccomplishedChange = (e) => {
        const value = e.target.value;
        setAccomplishedValue(value);
        onUpdateValue(index, 'accomplished', value, instructionType);
    };

    const handleSubmissionDateChange = (e) => {
        const value = e.target.value;
        setSubmissionDateValue(value);
        onUpdateValue(index, 'submissionDate', value, instructionType);
    };

    const handleSubmittedDateChange = (e) => {
        const value = e.target.value;
        setSubmittedDateValue(value);
        onUpdateValue(index, 'submittedDate', value, instructionType);
    };

    return (
        <>
            <tr className="border-gray-800">
                <td className="py-2 px-4 border-b border border-gray-800">{indicator.label}</td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`target${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={targetValue}
                        onChange={handleTargetChange}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`accomplished${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={accomplishedValue}
                        onChange={handleAccomplishedChange}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="date"
                        name={`submission${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={submissionDateValue}
                        onChange={handleSubmissionDateChange}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="date"
                        name={`submitted${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={submittedDateValue}
                        onChange={handleSubmittedDateChange}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`target${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={targetValue}
                        onChange={handleTargetChange}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`accomplished${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={accomplishedValue}
                        onChange={handleAccomplishedChange}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`target${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={targetValue}
                        onChange={handleTargetChange}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`accomplished${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={accomplishedValue}
                        onChange={handleAccomplishedChange}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="text"
                        name={`accomplished${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={accomplishedValue}
                        onChange={handleAccomplishedChange}
                    />
                </td>
            </tr>
        </>
    );
};

const AdministrativeFunctionsTableForm = () => {


    //testing
    const [administrativefunctions1Data, setAdministrativefunctions1Data] = useState([]);

    const [formData, setFormData] = useState([]);
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

                console.log(userData.administrativefunctionsProperty)

                // Initialize the form data state with the retrieved user data

                setAdministrativefunctions1Data(userData.adminProperty || []);


            } catch (error) {
                console.error("Error:", error);
            }
        };

        // Fetch user data when the component mounts
        fetchData();
    }, [session]);

    console.log("Administrativefunctions", administrativefunctions1Data)

    useEffect(() => {
        const initialData = Array(administrativefunctions1Indicators.length).fill({});
        setFormData(initialData);
    }, []);

    const handleUpdateValue = (index, field, value, instructionType) => {
        setFormData((prevData) => {
            const updatedData = [...prevData];
            const existingData = updatedData[index] || {}; // Use the index parameter directly
            const newData = { ...existingData, [field]: value, instructionType };
            updatedData[index] = newData;
            delete updatedData[index]._id;
            return updatedData;
        });
    };

    const renderIndicatorRows = (indicatorArray, instructionType, administrativefunctionsData) => {
        return indicatorArray.map((indicator, index) => {
            const data = administrativefunctionsData[index] || {}; // Get the data for the current index or an empty object if not available

            console.log("Data::", data);

            return (
                <PerformanceIndicatorRow
                    key={indicator.id}
                    indicator={indicator}
                    index={index}
                    onUpdateValue={handleUpdateValue}
                    instructionType={instructionType}
                    data={data}
                />
            );
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("/api/faculty-up/administrativefunctionsUpForm", {
                userData: formData, // Pass instructionData instead of finalData
                loggedInUserId: session.user.id,
            });

            console.log(response.data);
            e.target.reset();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="h-screen flex overflow-auto">
            <div className="m-4">
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
                            <tr className="border-gray-800">
                                <td colspan="1" className="py-2 px-4 text-center border-gray-800"></td>
                                <td colspan="1" className="py-2 px-4 text-center border-gray-800"></td>
                                <td colspan="1" className="py-2 px-4 text-center border-gray-800"></td>
                                <td colspan="1" className="py-2 px-4 text-center border-gray-800"></td>
                                <td colspan="1" className="py-2 px-4 border-r text-center border-gray-800"></td>
                                <td colspan="1" className="py-2 px-4 border-t border-r text-center border-gray-800">QTY</td>
                                <td colspan="1" className="py-2 px-4 border-t border-r text-center border-gray-800">QL/E
                                </td>
                                <td colspan="1" className="py-2 px-4 border-t border-r text-center border-gray-800">T</td>
                                <td colspan="1" className="py-2 px-4 border-t border-r text-center border-gray-800">A</td>
                                <td colspan="1" className="py-2 px-4 border-r text-center border-gray-800"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-black'>
                                <td colspan="10" className="border-b border-t border-black p-2">
                                    <h1>Administrative Functions</h1>
                                </td>
                            </tr>

                            <tr className='border-b border-black'>
                                <td colspan="10" className="border-b border-black p-2">
                                    <h1>19. Perform Administrative Designation Functions.</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(administrativefunctions1Indicators, "administrativefunctions1", administrativefunctions1Data)}

                        </tbody>
                    </table>
                    <button
                        type="submit"
                        className="mt-4 mb-4 px-10 py-2 bg-blue-950 text-white rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdministrativeFunctionsTableForm;

const administrativefunctions1Indicators = [
    { id: "indicator1", label: 'a. Prepare….' },
    { id: "indicator2", label: 'b. Submit…' },
    { id: "indicator3", label: 'c. Increase…' },
    { id: "indicator4", label: 'd….' },
    { id: "indicator5", label: 'e….' }
];
