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
            </tr>
        </>
    );
};

const ExtensionTableForm = () => {


    //testing
    const [extension1Data, setExtension1Data] = useState([]);

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

                console.log(userData.extensionProperty)

                // Initialize the form data state with the retrieved user data

                setExtension1Data(userData.extensionProperty || []);


            } catch (error) {
                console.error("Error:", error);
            }
        };

        // Fetch user data when the component mounts
        fetchData();
    }, [session]);

    console.log("Extension", extension1Data)

    useEffect(() => {
        const initialData = Array(extension1Indicators.length).fill({});
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

    const renderIndicatorRows = (indicatorArray, instructionType, extensionData) => {
        return indicatorArray.map((indicator, index) => {
            const data = extensionData[index] || {}; // Get the data for the current index or an empty object if not available

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
            const response = await axios.post("/api/faculty-up/extensionUpForm", {
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

                    {renderIndicatorRows(extension1Indicators, "extension1", extension1Data)}

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
