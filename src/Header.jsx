import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header1">
      <div className="logo">
        <h2>웹 메이커스</h2>
      </div>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/profile">프로필</Link>
      
    </div>
  );
};

export default Header;
