import React from 'react';
import './index.css';

const PostFilter = () => {
  return (
    <div className="post-filter">
      <select>
        <option>최신순</option>
        <option>조회순</option>
      </select>
      <input type="text" placeholder="검색어를 입력하세요" />
      <button>검색</button>
</div>
);
};

export default PostFilter;
