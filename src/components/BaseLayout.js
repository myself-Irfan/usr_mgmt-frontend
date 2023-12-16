import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Base ({ children }) {
    const isAuthenticated = !!localStorage.getItem('jwtToken');
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login')
        localStorage.removeItem('jwtToken');
    }

    return (
        <div>
            <nav>
                <ul>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/create_post">Create</Link></li>
                            <li><Link to="/login" onClick={handleLogout}>Log Out</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/sign_up">Sign Up</Link></li>
                        </>
                    )}
                </ul>
            </nav>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Base;