import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/Signup', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    navigate('/Login');
                } else {
                    alert(result.data.error || 'Signup failed');
                }
            })
            .catch(err => {
                console.error(err);
                alert(err.response.data.error || 'Signup failed');
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 backdrop-blur-md">
            <div className="w-full max-w-md bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-8 text-center text-white">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2 text-white" htmlFor="name">Name</label>
                        <input className="w-full px-3 py-2 text-black rounded-md" type="text" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2 text-white" htmlFor="email">Email</label>
                        <input className="w-full px-3 py-2 text-black rounded-md" type="email" id="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2 text-white" htmlFor="password">Password</label>
                        <input className="w-full px-3 py-2 text-black rounded-md" type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="text-center">
                        <input className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded-md cursor-pointer hover:bg-green-700" type="submit" value="Sign Up" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
