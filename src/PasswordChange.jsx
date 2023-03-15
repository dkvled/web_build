import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';

function PasswordChange() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [currentPasswordValid, setCurrentPasswordValid] = useState(false);
  const [newPasswordValid, setNewPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
    const regex =  /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
    if(regex.test(currentPassword)) {
      setCurrentPasswordValid(true);
    } else{
      setCurrentPasswordValid(false);
    }
  }

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
    const regex =  /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
    if(regex.test(newPassword)) {
      setNewPasswordValid(true);
    } else{
      setNewPasswordValid(false);
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('현재 비밀번호:', currentPassword);
    console.log('새로운 비밀번호:', newPassword);
  }//서버와연동해서 구현해야함

  useEffect(() => {
    if(currentPasswordValid && newPasswordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [currentPasswordValid, newPasswordValid]);

  return (
    <div className="page">
      <div className="titleWrap">
        비밀번호 수정
      </div>

      <form onSubmit={handleSubmit}>

      <div >
        <div >
          <div style={{marginTop: "32px"}} className="inputTitle" htmlFor="current-password">현재 비밀번호</div>
          <div className="inputWrap">
            <input
              type="password"  
              value={currentPassword} 
              className="input"
              onChange={handleCurrentPassword} />
          </div>
        </div>
        <div>
          <div style={{marginTop: "32px"}} className="inputTitle" htmlFor="new-password">새로운 비밀번호</div>
          <div className="inputWrap">
            <input 
              type="password"
              value={newPassword}
              placeholder="9자 이상 입력"
              className="input" 
              onChange={handleNewPassword} />
          </div>
        </div>
      </div>

      <div style={{marginTop: "150px"}}>
        <button  disabled={notAllow} className="bottomButton" type="submit">변경</button>
      </div>
      
    </form>
    </div>
  );
}

export default PasswordChange;
