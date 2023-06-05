import { useState, useEffect } from 'react';

const Dropdown = ({ onOptionChange }) => {
    const [faculties, setFaculties] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const fetchFaculties = async () => {
            const response = await fetch('/api/dean/getFacultyList');
            const facultiesData = await response.json();
            setFaculties(facultiesData);
        };

        fetchFaculties();
    }, []);

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        // Execute the callback with the selected option
        onOptionChange(selectedValue);
    };

    return (
        <select value={selectedOption} onChange={handleOptionChange}>
            {faculties.map((faculty) => (
                <option key={faculty._id} value={faculty._id}>
                    {faculty.name}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
