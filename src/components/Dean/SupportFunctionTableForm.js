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

const SupportFunctionTableForm = () => {

    const [support1Data, setSupport1Data] = useState([]);
    const [support2Data, setSupport2Data] = useState([]);
    const [support3Data, setSupport3Data] = useState([]);
    const [support4Data, setSupport4Data] = useState([]);
    const [support5Data, setSupport5Data] = useState([]);
    const [support6Data, setSupport6Data] = useState([]);
    const [support7Data, setSupport7Data] = useState([]);
    const [support8Data, setSupport8Data] = useState([]);
    const [support9Data, setSupport9Data] = useState([]);

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

                console.log(userData.supportProperty)

                // Initialize the form data state with the retrieved user data

                setSupport1Data(userData.supportProperty.support1 || []);
                setSupport2Data(userData.supportProperty.support2 || []);
                setSupport3Data(userData.supportProperty.support3 || []);
                setSupport4Data(userData.supportProperty.support4 || []);
                setSupport5Data(userData.supportProperty.support5 || []);
                setSupport6Data(userData.supportProperty.support6 || []);
                setSupport7Data(userData.supportProperty.support7 || []);
                setSupport8Data(userData.supportProperty.support8 || []);
                setSupport9Data(userData.supportProperty.support9 || []);



            } catch (error) {
                console.error("Error:", error);
            }
        };

        // Fetch user data when the component mounts
        fetchData();
    }, [session]);

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

    const renderIndicatorRows = (indicatorArray, instructionType, supportData) => {
        return indicatorArray.map((indicator, index) => {
            const data = supportData[index] || {}; // Get the data for the current index or an empty object if not available


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

        const supportTypes = ['support1', 'support2', 'support3', 'support4', 'support5', 'support6', 'support7', 'support8', 'support9'];
        const supportData = {};

        supportTypes.forEach((type, index) => {
            supportData[type] = formData
                .filter((data) => data.instructionType === `supportfunctions${index + 1}`)
                .map(({ target, accomplished, submissionDate, submittedDate }) => ({
                    target,
                    accomplished,
                    submissionDate,
                    submittedDate
                }));
            console.log(`Support ${type} Data:`, supportData[type]);
        });

        console.log('Support Data:', supportData);



        try {
            const response = await axios.post("/api/faculty-up/supportUpForm", {
                userData: supportData,
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
                                    <h1>Support Function</h1>
                                </td>
                            </tr>
                            <tr className='border-b border-black'>
                                <td colspan="10" className="border-b border-black p-2">
                                    <h1>10.  Perform Officially-Deligated Assignment.</h1>
                                </td>
                            </tr>
                            {renderIndicatorRows(supportfunctions1Indicators, "supportfunctions1", support1Data)}

                            <tr className='border-b border-black'>
                                <td colspan="10" className="border-b border-black p-2">
                                    <h1>11.  Participate in the Flag Raising Ceremony</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(supportfunctions2Indicators, "supportfunctions2", support2Data)}


                            <tr className='border-b border-black'>
                                <td colspan="10" className="border-b border-black p-2">
                                    <h1>12.  Participate in the Flag lowering</h1>
                                </td>
                            </tr>
                            {renderIndicatorRows(supportfunctions3Indicators, "supportfunctions3", support3Data)}

                            <tr className='border-b border-black'>
                                <td colspan="10" className="border-b border-black p-2">
                                    <h1>13.  Participate in the health  and wellness  program</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(supportfunctions4Indicators, "supportfunctions4", support4Data)}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>14.  Participate in school celebrations and other allied activities</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(supportfunctions5Indicators, "supportfunctions5", support5Data)}

                            <tr className='border-b border-black'>
                                <td colspan="10" className="border-b border-black p-2">
                                    <h1>15.  Attend  trainings /conferences/seminars</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(supportfunctions6Indicators, "supportfunctions6", support6Data)}

                            <tr className='border-b border-black'>
                                <td colspan="10" className="border-b border-black p-2">
                                    <h1>16.  Attend  Faculty Meeting</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(supportfunctions7Indicators, "supportfunctions7", support7Data)}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>17.  Involvement in accreditation/ISO and other related activities</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(supportfunctions8Indicators, "supportfunctions8", support8Data)}

                            <tr className='border-b border-black'>
                                <td colspan="10" className="border-b border-black p-2">
                                    <h1>18.  Participate in the spiritual activities</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(supportfunctions9Indicators, "supportfunctions9", support9Data)}

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
    { id: "indicator4", label: 'a) Attendance sheet/ Program of activities/other document as proof' }
];

const supportfunctions5Indicators = [
    { id: "indicator5", label: 'a) Attendance sheet/ Program of activities/other document as proof' }
];

const supportfunctions6Indicators = [
    { id: "indicator6", label: 'a) Training/Seminar/ Conference certificate of attendance/ participation' }
];

const supportfunctions7Indicators = [
    { id: "indicator7", label: 'a) Attendance' }
];

const supportfunctions8Indicators = [
    { id: "indicator8", label: 'a) Attendance' }
];

const supportfunctions9Indicators = [
    { id: "indicator9", label: 'a) Attendance sheet/ Program of activities/other document as proof' }
];




