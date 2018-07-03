import React from 'react';

const Post = ({ post, handleDelete }) => 
    
    <div className="tile" key={post.id}>
        <button className="deleteButton" 
        onClick={() => handleDelete(post)}
        >x</button>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
    </div>

export default Post

