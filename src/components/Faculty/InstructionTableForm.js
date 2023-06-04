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

const InstructionTableForm = () => {
    const [formData, setFormData] = useState([]);
    const { data: session, status } = useSession();

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
        <div className="h-screen flex overflow-auto">
            <div className="m-4">
                <form onSubmit={handleSubmit}>
                    <table className="w-full border border-black">
                        <thead>
                            {/* Header rows */}
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
                            {renderIndicatorRows(instruction1Indicators, "instruction1")}
                            <tr className="border-b border-black">
                                <td className="border-b border-black p-2">
                                    <h1>2. Organizes Classroom Instruction</h1>
                                </td>
                            </tr>
                            {renderIndicatorRows(instruction2Indicators, "instruction2")}

                            <tr className='border-b border-black'>
                                <td className="border-b border-black p-2">
                                    <h1>3. Teaching Effectiveness</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(instruction3Indicators, 'instruction3')}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>4. Prepare and Check Summative/Evaluative/Formative Tests</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(instruction4Indicators, 'instruction4')}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>5.  Compute & Evaluate  Grades.</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(instruction5Indicators, 'instruction5')}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>6.  Consultation services to faculty and  students.</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(instruction6Indicators, 'instruction6')}

                            <tr className='border-b border-black'>
                                <td colSpan="10" className="border-b border-black p-2">
                                    <h1>7.   Prepare accomplishment report.</h1>
                                </td>
                            </tr>

                            {renderIndicatorRows(instruction7Indicators, 'instruction7')}










                            {/* Repeat the same pattern for other sections */}
                        </tbody>
                    </table>
                    <button type="submit">Submit</button>
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
