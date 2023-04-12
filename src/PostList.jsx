import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="post-list">
      <ul>
        <li>
          <h3>글 번호</h3>
          <h3>제목</h3>
          <h3>등록일</h3>
          <h3>조회수</h3>
        </li>
        {posts.map((post, index) => (
          <li key={post.id}>
            <h3>{index + 1}</h3>
            <h3>{post.title}</h3>
            <h3>{new Date(post.createdAt).toLocaleDateString()}</h3>
            <h3>{post.views}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
