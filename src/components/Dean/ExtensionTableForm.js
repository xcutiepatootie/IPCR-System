import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Dropdown from "./ListUsers/Dropdown";

const PerformanceIndicatorRow = ({ indicator, index, onUpdateValue, instructionType, data }) => {
    const [targetValue, setTargetValue] = useState('');
    const [accomplishedValue, setAccomplishedValue] = useState('');
    const [submissionDateValue, setSubmissionDateValue] = useState('');
    const [submittedDateValue, setSubmittedDateValue] = useState('');
    const [ratingQTY, setRatingQTY] = useState('');
    const [ratingQLE, setRatingQLE] = useState('');
    const [ratingT_, setRatingT_] = useState('');
    const [ratingA_, setRatingA_] = useState('');
    const [remarksValue, setRemarksValue] = useState('');

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
            onUpdateValue(index, 'QTY', data.submittedDate, instructionType); // Call onUpdateValue with initial submittedDate value
        }

        if (data.QTY !== undefined) {
            setRatingQTY(data.QTY);
            onUpdateValue(index, 'QTY', data.QTY, instructionType); // Call onUpdateValue with initial target value
        }

        if (data.QLE !== undefined) {
            setRatingQLE(data.QLE);
            onUpdateValue(index, 'QLE', data.QLE, instructionType); // Call onUpdateValue with initial accomplished value
        }

        if (data.T !== undefined) {
            setRatingT_(data.T);
            onUpdateValue(index, 'T', data.T, instructionType); // Call onUpdateValue with initial submissionDate value
        }

        if (data.A !== undefined) {
            setRatingA_(data.A);
            onUpdateValue(index, 'A', data.A, instructionType); // Call onUpdateValue with initial submittedDate value
        }

        if (data.remarks !== undefined) {
            setRemarksValue(data.remarks);
            onUpdateValue(index, 'remarks', data.remarks, instructionType); // Call onUpdateValue with initial submittedDate value
        }
    }, [data.target, data.accomplished, data.submissionDate, data.submittedDate, data.QTY, data.QLE, data.T, data.A, data.remarks]);


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

    const handleQTYChange = (e) => {
        const value = e.target.value;
        setRatingQTY(value);
        onUpdateValue(index, 'QTY', value, instructionType);
    };

    const handleQLEChange = (e) => {
        const value = e.target.value;
        setRatingQLE(value);
        onUpdateValue(index, 'QLE', value, instructionType);
    };

    const handleT_Change = (e) => {
        const value = e.target.value;
        setRatingT_(value);
        onUpdateValue(index, 'T', value, instructionType);
    };

    const handleA_Change = (e) => {
        const value = e.target.value;
        setRatingA_(value);
        onUpdateValue(index, 'A', value, instructionType);
    };

    const handleRemarksChange = (e) => {
        const value = e.target.value;
        setRemarksValue(value);
        onUpdateValue(index, 'remarks', value, instructionType);
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
                        readOnly
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`accomplished${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={accomplishedValue}
                        onChange={handleAccomplishedChange}
                        readOnly
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="date"
                        name={`submission${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={submissionDateValue}
                        onChange={handleSubmissionDateChange}
                        readOnly
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="date"
                        name={`submitted${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={submittedDateValue}
                        onChange={handleSubmittedDateChange}
                        readOnly
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`QTY${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={ratingQTY}
                        onChange={handleQTYChange}
                        min={1}
                        max={5}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`QLE${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={ratingQLE}
                        onChange={handleQLEChange}
                        min={1}
                        max={5}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`T${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={ratingT_}
                        onChange={handleT_Change}
                        min={1}
                        max={5}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="number"
                        name={`A${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={ratingA_}
                        onChange={handleA_Change}
                        min={1}
                        max={5}
                    />
                </td>
                <td className="py-2 px-4 border-b border border-gray-800">
                    <input
                        type="text"
                        name={`remarks${index}`}
                        className="w-full p-2 border border-black rounded"
                        value={remarksValue}
                        onChange={handleRemarksChange}
                    />
                </td>
            </tr>
        </>
    );
};

const ExtensionTableForm = () => {


    const [selectedOptionData, setSelectedOptionData] = useState(null);

    const handleOptionChange = async (selectedOption) => {
        try {
            const response = await axios.get(`/api/dean/getDataForOption`, {
                params: { selectedOption }
            });
            const data = response.data;
            setSelectedOptionData(data)

        } catch (error) {
            console.error(error);
        }
    };

    const [extension1Data, setExtension1Data] = useState([]);

    const [formData, setFormData] = useState([]);
    const { data: session, status } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {

                // Make the API request to retrieve user data
                const response = await axios.get("/api/faculty-up/fetchUserData", {
                    params: {
                        userId: selectedOptionData._id, // Pass the user ID as a parameter
                    },
                });

                // Extract the user data from the response
                const userData = response.data.userData;

                console.log(userData.extensionProperty)

                // Initialize the form data state with the retrieved user data
                setExtension1Data(userData.extensionProperty.extension1 || []);


            } catch (error) {
                console.error("Error:", error);
            }
        };

        // Fetch user data when the component mounts
        fetchData();
    }, [selectedOptionData]);

    console.log(extension1Data)

    useEffect(() => {
        const initialData = Array(extension1Indicators.length).fill({});
        setFormData(initialData);
    }, []);

    const handleUpdateValue = (index, field, value, instructionType) => {
        setFormData((prevData) => {
            const extension1Length = extension1Indicators.length;

            let adjustedIndex;

            if (instructionType === "extension1") {
                adjustedIndex = index;
            }

            const updatedData = [...prevData];
            const existingData = updatedData[adjustedIndex] || {}; // Get the existing data for the adjusted index
            const newData = { ...existingData, [field]: value, instructionType }; // Merge the existing data with the new field value
            updatedData[adjustedIndex] = newData; // Update the data for the adjusted index
            delete updatedData[adjustedIndex]._id;
            return updatedData;
        });
    };


    const renderIndicatorRows = (indicatorArray, instructionType, instructionData) => {
        return indicatorArray.map((indicator, index) => {
            const data = instructionData[index] || {}; // Get the data for the current index or an empty object if not available


            console.log(data)

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

        const instructionTypes = ["support1"];

        const instructionData = {};

        instructionTypes.forEach((type) => {
            instructionData[type] = formData
                .filter((data) => data.instructionType === type)
                .map(({ instructionType, ...rest }) => rest);

            console.log(`Extension ${type} Data:`, instructionData[type]);
        });

        console.log("Extension Data:", instructionData);

        try {
            const response = await axios.post("/api/faculty-up/extensionUpForm", {
                userData: instructionData,
                loggedInUserId: selectedOptionData._id,
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

                <div className="">
                    <Dropdown onOptionChange={handleOptionChange} />
                </div>
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
                            <tr className="border-b border-t border-black">
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>Extension</h1>
                                </td>
                            </tr>
                            <tr className="border-b border-black">
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>9.  Extension projects.</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(extension1Indicators, "extension1", extension1Data)}

                        </tbody>
                    </table>
                    <button type="submit" className="mb-4 mt-4 px-10 py-2 bg-blue-950 text-white rounded hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
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
