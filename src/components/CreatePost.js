import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
    const [formData,setFormData] = useState({
        title: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('jwtToken');

        axios.post('/api/create_post', formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => {
            console.log('Post created successfully:', response.data);
            navigate('/');
        })
        .catch(error => console.error('Error creating post:', error));
    };

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required/>

                <label>Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} required/>

                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default Create;
