import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');

        axios.get('/api/home', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => setPosts(response.data.Posts))
        .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const handleDelete = (postId) => {
        const token = localStorage.getItem('jwtToken');

        axios.delete(`/api/delete_post/${postId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => {
            console.log('Post deleted successfully:', response.data);
            const updatedPost = posts.filter(post => post.id !== postId);
            setPosts(updatedPost);
        })
        .catch(error => console.error('Error deleting post:', error));
    };

    return (
        <div>
            <h1>Home</h1>
            {posts.map(post =>(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Home;