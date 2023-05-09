import React from 'react'
import {useState} from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from './ProfileImage.png';

function Profile() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className='page'>
      <div className="contentWrap">
        <img
          className="profile-picture"
          src={ProfileImage}
          alt="Profile Picture"
        />
        <div className="input-container">
          <label className="label">이름</label>
          <input
            className="input2"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-container">
          <label className="label">학번</label>
          <input
            className="input2"
            type="text"
            value={studentId}
            onChange={handleStudentIdChange}
          />
        </div>
        <div className="input-container">
          <label className="label">자기소개</label>
          <textarea
            className="input2"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <div>
        <button className="bottomButton">변경</button>
      </div>
    </div>
  );
}

export default Profile;
