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

const InstructionTableForm = () => {


    const [instruction1Data, setInstruction1Data] = useState([]);
    const [instruction2Data, setInstruction2Data] = useState([]);
    const [instruction3Data, setInstruction3Data] = useState([]);
    const [instruction4Data, setInstruction4Data] = useState([]);
    const [instruction5Data, setInstruction5Data] = useState([]);
    const [instruction6Data, setInstruction6Data] = useState([]);
    const [instruction7Data, setInstruction7Data] = useState([]);



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

                console.log(userData.instructionProperty)

                // Initialize the form data state with the retrieved user data

                setInstruction1Data(userData.instructionProperty.instruction1 || []);
                setInstruction2Data(userData.instructionProperty.instruction2 || []);
                setInstruction3Data(userData.instructionProperty.instruction3 || []);
                setInstruction4Data(userData.instructionProperty.instruction4 || []);
                setInstruction5Data(userData.instructionProperty.instruction5 || []);
                setInstruction6Data(userData.instructionProperty.instruction6 || []);
                setInstruction7Data(userData.instructionProperty.instruction7 || []);

            } catch (error) {
                console.error("Error:", error);
            }
        };

        // Fetch user data when the component mounts
        fetchData();
    }, [session]);

    console.log(instruction1Data)
    console.log(instruction2Data)

    useEffect(() => {
        const initialData = Array(instruction1Indicators.length + instruction2Indicators.length + instruction3Indicators.length +
            instruction4Indicators.length + instruction5Indicators.length + instruction6Indicators.length + instruction7Indicators).fill({});
        setFormData(initialData);
    }, []);

    const handleUpdateValue = (index, field, value, instructionType) => {
        setFormData((prevData) => {
            const instruction1Length = instruction1Indicators.length;
            const instruction2Length = instruction2Indicators.length;
            const instruction3Length = instruction3Indicators.length;
            const instruction4Length = instruction4Indicators.length;
            const instruction5Length = instruction5Indicators.length;
            const instruction6Length = instruction6Indicators.length;
            const instruction7Length = instruction7Indicators.length;

            let adjustedIndex;

            if (instructionType === "instruction1") {
                adjustedIndex = index;
            } else if (instructionType === "instruction2") {
                adjustedIndex = instruction1Length + index;
            } else if (instructionType === "instruction3") {
                adjustedIndex = instruction1Length + instruction2Length + index;
            } else if (instructionType === "instruction4") {
                adjustedIndex = instruction1Length + instruction2Length + instruction3Length + index;
            } else if (instructionType === "instruction5") {
                adjustedIndex = instruction1Length + instruction2Length + instruction3Length + instruction4Length + index;
            } else if (instructionType === "instruction6") {
                adjustedIndex = instruction1Length + instruction2Length + instruction3Length + instruction4Length + instruction5Length + index;
            } else if (instructionType === "instruction7") {
                adjustedIndex = instruction1Length + instruction2Length + instruction3Length + instruction4Length + instruction5Length + instruction6Length + index;
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

        const instructionTypes = ["instruction1", "instruction2", "instruction3", "instruction4", "instruction5", "instruction6", "instruction7"];

        const instructionData = {};

        instructionTypes.forEach((type) => {
            instructionData[type] = formData
                .filter((data) => data.instructionType === type)
                .map(({ instructionType, ...rest }) => rest);

            console.log(`Instruction ${type} Data:`, instructionData[type]);
        });

        console.log("Instruction Data:", instructionData);

        try {
            const response = await axios.post("/api/faculty-up/instructionUpForm", {
                userData: instructionData,
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-black">
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>Instruction</h1>
                                </td>
                            </tr>
                            <tr className="border-b border-black">
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>1. Plan and Prepare Instructional Materials to Enhance Instruction</h1>
                                </td>
                            </tr>
                            {renderIndicatorRows(instruction1Indicators, "instruction1", instruction1Data)}
                            <tr className="border-b border-black">
                                <td className="border-b border-black p-2">
                                    <h1>2. Organizes Classroom Instruction</h1>
                                </td>
                            </tr>
                            {renderIndicatorRows(instruction2Indicators, "instruction2", instruction2Data)}

                            <tr className='border-b border-black'>
                                <td className="border-b border-black p-2">
                                    <h1>3. Teaching Effectiveness</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(instruction3Indicators, 'instruction3', instruction3Data)}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>4. Prepare and Check Summative/Evaluative/Formative Tests</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(instruction4Indicators, 'instruction4', instruction4Data)}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>5.  Compute & Evaluate  Grades.</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(instruction5Indicators, 'instruction5', instruction5Data)}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>6.  Consultation services to faculty and  students.</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(instruction6Indicators, 'instruction6', instruction6Data)}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>7.   Prepare accomplishment report.</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(instruction7Indicators, 'instruction7', instruction7Data)}

                        </tbody>
                    </table>
                    <button type="submit" className="mb-4 mt-4 px-10 py-2 bg-blue-950 text-white rounded hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default InstructionTableForm;

const instruction1Indicators = [
    { id: "indicator1", label: 'a) No. of Syllabus prepared' },
    { id: "indicator2", label: 'b) No. of Course Guide' },
    { id: "indicator3", label: 'c) No. of SLM' },
    { id: "indicator4", label: 'd) No. of Subject Areas with Community Immersion/ Involvement Component' },
];

const instruction2Indicators = [
    { id: "indicator5", label: 'a) Attendance Sheet' },
    { id: "indicator6", label: 'b) Class Records' },
];

const instruction3Indicators = [
    { id: "indicator7", label: 'a) Evaluation of Teaching Effectiveness (CQA-SF-012)' },
    { id: "indicator8", label: 'b) Classroom Observation (CQA-SF-012)' },
];

const instruction4Indicators = [
    { id: "indicator9", label: 'a) 1) TOS/ Rubrics (Midterm)' },
    { id: "indicator10", label: 'a) 2) TOS/ Rubrics (Final Term)' },
    { id: "indicator11", label: 'b)  1) Test Questions (term exams) / Performance\'s based activities (Midterm)' },
    { id: "indicator12", label: 'b) 2) Test Questions (term exams) / Performance\'s based activities (Final Term)' },
    { id: "indicator13", label: 'c) 1) Answer Keys (Midterm)' },
    { id: "indicator14", label: 'c) 2) Answer Keys (Final Term)' },
];

const instruction5Indicators = [
    { id: "indicator15", label: 'a) No. of grading sheets submitted & encoded' },
];

const instruction6Indicators = [
    { id: "indicator16", label: 'a) No. of faculty & students seek advises (LSPU-ACAD-SF-011)' },
];

const instruction7Indicators = [
    { id: "indicator17", label: 'Accomplishment Report' },
];
