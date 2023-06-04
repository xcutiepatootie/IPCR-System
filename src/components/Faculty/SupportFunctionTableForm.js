import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const PerformanceIndicatorRow = ({ indicator, index, onUpdateValue, instructionType }) => {
    const [targetValue, setTargetValue] = useState("");
    const [accomplishedValue, setAccomplishedValue] = useState("");
    const [submissionDateValue, setSubmissionDateValue] = useState("");
    const [submittedDateValue, setSubmittedDateValue] = useState("");

    const handleTargetChange = (e) => {
        const value = e.target.value;
        setTargetValue(value);
        onUpdateValue(index, "target", value, instructionType);
    };

    const handleAccomplishedChange = (e) => {
        const value = e.target.value;
        setAccomplishedValue(value);
        onUpdateValue(index, "accomplished", value, instructionType);
    };

    const handleSubmissionDateChange = (e) => {
        const value = e.target.value;
        setSubmissionDateValue(value);
        onUpdateValue(index, "submissionDate", value, instructionType);
    };

    const handleSubmittedDateChange = (e) => {
        const value = e.target.value;
        setSubmittedDateValue(value);
        onUpdateValue(index, "submittedDate", value, instructionType);
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

const SupportFunctionTableForm = () => {
    const [formData, setFormData] = useState([]);
    const { data: session, status } = useSession();

    useEffect(() => {
        const initialData = Array(supportfunctions1Indicators.length + supportfunctions2Indicators.length + supportfunctions3Indicators.length +
            supportfunctions4Indicators.length + supportfunctions5Indicators.length + supportfunctions6Indicators.length + supportfunctions7Indicators + 
            supportfunctions8Indicators + supportfunctions9Indicators).fill({});
        setFormData(initialData);
    }, []);

    const handleUpdateValue = (index, field, value, instructionType) => {
        setFormData((prevData) => {
            const supportfunctions1Length = supportfunctions1Indicators.length;
            const supportfunctions2Length = supportfunctions2Indicators.length;
            const supportfunctions3Length = supportfunctions3Indicators.length;
            const supportfunctions4Length = supportfunctions4Indicators.length;
            const supportfunctions5Length = supportfunctions5Indicators.length;
            const supportfunctions6Length = supportfunctions6Indicators.length;
            const supportfunctions7Length = supportfunctions7Indicators.length;
            const supportfunctions8Length = supportfunctions8Indicators.length;
            const supportfunctions9Length = supportfunctions9Indicators.length;

            let adjustedIndex;

            if (instructionType === "supportfunctions1") {
                adjustedIndex = index;
            } else if (instructionType === "supportfunctions2") {
                adjustedIndex = supportfunctions1Length + index;
            } else if (instructionType === "supportfunctions3") {
                adjustedIndex = supportfunctions1Length + supportfunctions2Length + index;
            } else if (instructionType === "supportfunctions4") {
                adjustedIndex = supportfunctions1Length + supportfunctions2Length + supportfunctions3Length + index;
            } else if (instructionType === "supportfunctions5") {
                adjustedIndex = supportfunctions1Length + supportfunctions2Length + supportfunctions3Length + supportfunctions4Length + index;
            } else if (instructionType === "supportfunctions6") {
                adjustedIndex = supportfunctions1Length + supportfunctions2Length + supportfunctions3Length + supportfunctions4Length + supportfunctions5Length + index;
            } else if (instructionType === "supportfunctions7") {
                adjustedIndex = supportfunctions1Length + supportfunctions2Length + supportfunctions3Length + supportfunctions4Length + supportfunctions5Length + supportfunctions6Length + index;
            } else if (instructionType === "supportfunctions8") {
                adjustedIndex = supportfunctions1Length + supportfunctions2Length + supportfunctions3Length + supportfunctions4Length + supportfunctions5Length + supportfunctions6Length + supportfunctions7Length + index;
            } else if (instructionType === "supportfunctions9") {
                adjustedIndex = supportfunctions1Length + supportfunctions2Length + supportfunctions3Length + supportfunctions4Length + supportfunctions5Length + supportfunctions6Length + supportfunctions7Length + supportfunctions8Length + index;
            }

            const updatedData = [...prevData];
            const existingData = updatedData[adjustedIndex] || {}; // Get the existing data for the adjusted index
            const newData = { ...existingData, [field]: value, instructionType }; // Merge the existing data with the new field value
            updatedData[adjustedIndex] = newData; // Update the data for the adjusted index
            delete updatedData[adjustedIndex]._id;
            return updatedData;
        });
    };

    const renderIndicatorRows = (indicatorArray, instructionType) => {
        //  console.log("Rendering indicator rows", indicatorArray); // Debugging statement

        return indicatorArray.map((indicator, index) => (
            <PerformanceIndicatorRow
                key={indicator.id}
                indicator={indicator}
                index={index}
                onUpdateValue={handleUpdateValue}
                instructionType={instructionType}
            />
        ));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("/api/faculty-up/mergeUserData", {
                userData: formData,
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
                            <h1>Support Function</h1>
                        </td>
                    </tr>
                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>10.  Perform Officially-Deligated Assignment.</h1>
                        </td>
                    </tr>
                    {renderIndicatorRows(supportfunctions1Indicators, "supportfunctions1")}

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>11.  Participate in the Flag Raising Ceremony</h1>
                        </td>
                    </tr>

                    {renderIndicatorRows(supportfunctions2Indicators, "supportfunctions2")}


                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>12.  Participate in the Flag lowering</h1>
                        </td>
                    </tr>
                    {renderIndicatorRows(supportfunctions3Indicators, "supportfunctions3")}

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>13.  Participate in the health  and wellness  program</h1>
                        </td>
                    </tr>

                    {renderIndicatorRows(supportfunctions4Indicators, "supportfunctions4")}

                    <tr className='border-b border-black'>
                        <td colspan="10" className="border-b border-black p-2">
                            <h1>14.  Participate in school celebrations and other allied activities</h1>
                        </td>
                    </tr>

                    {renderIndicatorRows(supportfunctions5Indicators, "supportfunctions5")}

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>15.  Attend  trainings /conferences/seminars</h1>
                        </td>
                    </tr>

                    {renderIndicatorRows(supportfunctions6Indicators, "supportfunctions6")}

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>16.  Attend  Faculty Meeting</h1>
                        </td>
                    </tr>

                    {renderIndicatorRows(supportfunctions7Indicators, "supportfunctions7")}

                    <tr className='border-b border-black'>
                        <td colspan="10" className="border-b border-black p-2">
                            <h1>17.  Involvement in accreditation/ISO and other related activities</h1>
                        </td>
                    </tr>

                    {renderIndicatorRows(supportfunctions8Indicators, "supportfunctions8")}

                    <tr className='border-b border-black'>
                        <td className="border-b border-black p-2">
                            <h1>18.  Participate in the spiritual activities</h1>
                        </td>
                    </tr>

                    {renderIndicatorRows(supportfunctions9Indicators, "supportfunctions9")}

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

const supportfunctions1Indicators = [
    { id: "indicator1", label: 'a) Accomplishment Report' }
];

const supportfunctions2Indicators = [
    { id: "indicator2", label: 'a) Attendance' }
];

const supportfunctions3Indicators = [
    { id: "indicator3", label: 'a) Attendance' }
];

const supportfunctions4Indicators = [
    { id: "indicator4", label: 'a) Attendance sheet/Program of activities/other document as proof' }
];

const supportfunctions5Indicators = [
    { id: "indicator5", label: 'a) Attendance sheet/Program of activities/other document as proof' }
];

const supportfunctions6Indicators = [
    { id: "indicator6", label: 'a) Training/Seminar/Conference certificate of attendance/ participation' }
];

const supportfunctions7Indicators = [
    { id: "indicator7", label: 'a) Attendance' }
];

const supportfunctions8Indicators = [
    { id: "indicator8", label: 'a) Attendance' }
];

const supportfunctions9Indicators = [
    { id: "indicator9", label: 'a) Attendance sheet/Program of activities/other document as proof' }
];




