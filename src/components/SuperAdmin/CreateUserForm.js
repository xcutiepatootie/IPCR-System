import React, { useState } from 'react';
import axios from 'axios';

const CreateUserForm = ({ addUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform form validation and submit the data
        try {
            const response = await axios.post('/api/signup', { name, email, password, role });
            // Assuming your API returns a success message
            console.log(response.data.message);
            // Perform any additional actions or show a success message to the user
        } catch (error) {
            // Handle error responses from the API
            console.error(error);
            // Show an error message to the user
        }
        
        setName('');
        setEmail('');
        setRole('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add User</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Role:</label>
                <label>
                    <input
                        type="radio"
                        value="campusdirector"
                        checked={role === 'campusdirector'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Campus Director
                </label>
                <label>
                    <input
                        type="radio"
                        value="dean"
                        checked={role === 'dean'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Dean
                </label>
                <label>
                    <input
                        type="radio"
                        value="faculty"
                        checked={role === 'faculty'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Faculty
                </label>
                <label>
                    <input
                        type="radio"
                        value="eiuh"
                        checked={role === 'eiuh'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Extension Implementing Unit Head
                </label>
                <label>
                    <input
                        type="radio"
                        value="riuh"
                        checked={role === 'riuh'}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    Research Implementing Unit Head
                </label>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>{/*  */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateUserForm;