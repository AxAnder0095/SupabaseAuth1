import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext.jsx';

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');

    const {session, signUpNewUser} = UserAuth();
    console.log(session);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <p>Already have an account? <Link to="/signin">Sign In!</Link></p>
                <div>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
};