import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';

export default function Signup() {

  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [confirm, setConfirm] = useState('');

  const [nameValid, setNameValid] = useState(false);
  const [birthValid, setBirthValid] = useState(false);
  const [telValid, setTelValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [confirmValid, setConfirmValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleName = (e) => {
    setName(e.target.value);
  }


  const handleBirth = (e) => {
    setBirth(e.target.value)
    const regex = 
    /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/; //이메일 주소 검증 정규 표현식
    if(regex.test(birth)){
      setBirthValid(true);
    } else {
      setBirthValid(false);
    }
  }

  const handleTel = (e) => {
    setTel(e.target.value)
    const regex = 
    /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if(regex.test(tel)){
      setTelValid(true);
    } else {
      setTelValid(false);
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    const regex = 
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; //이메일 주소 검증 정규 표현식
    if(regex.test(email)){
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/; //비밀번호 정규 표현식
    if(regex.test(pw)) {
      setPwValid(true);
    } else{
      setPwValid(false);
    }
  }

  const handleConfirm = (e) => {
    setConfirm(e.target.value);
    if(pw === confirm) {
      setConfirmValid(true);
    } else{
      setConfirmValid(false);
    }
  }
  
  useEffect(() => {
    if(birthValid && telValid && emailValid && pwValid && confirmValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  },[birthValid, telValid, emailValid, pwValid, confirmValid]);

  return(
    <div className="page">
      <div className="titleWrap">
        회원가입
      </div>

      <div className="contentWrap">

        <div className="inputTitle">이름</div>
        <div className="inputWrap">
          <input 
           type='text'
           className="input"
           maxLength='20'
           value={name}
           onChange={handleName} />
        </div>

        <div style={{marginTop: "32px"}} className="inputTitle">생년월일</div>
        <div className="inputWrap">
          <input
           type='text'
           className="input"
           placeholder="ex: 20030717"
           value={birth}
           onChange={handleBirth} />
        </div>
        <div className="errorMessageWrap">
          {
            !birthValid && birth.length > 0 && (
              <div>생년월일을 8자리 숫자로 입력해주세요.</div>
            )}
        </div>

        <div style={{marginTop: "20px"}} className="inputTitle">전화번호</div>
        <div className="inputWrap">
          <input
           type='text'
           className="input"
           placeholder='ex: 01012345678'
           value={tel}
           onChange={handleTel} />
        </div>
        <div className="errorMessageWrap">
              {!telValid && tel.length > 0 && (
                  <div>-를 사용하지 않고 올바른 전화번호 형식으로 입력해주세요.</div>
                )}
        </div>

        <div style={{marginTop: "20px"}} className="inputTitle">이메일</div>
        <div className="inputWrap">
          <input
           type='text'
           className="input"
           placeholder="text@gmail.com"
           value={email}
           onChange={handleEmail} />
        </div>
        <div className="errorMessageWrap">
              {!emailValid && email.length > 0 && (
                  <div>올바른 이메일을 입력해주세요.</div>
                )}
        </div>

        <div style={{marginTop: "20px"}} className="inputTitle">비밀번호</div>
        <div className="inputWrap">
          <input
           type='password'
           className="input"
           placeholder="영문, 숫자, 특수문자 포함 8자 이상"
           value={pw}
           onChange={handlePw} />
        </div>
        <div className="errorMessageWrap">
              {!pwValid && pw.length > 0 && (
                  <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
              )}
        </div>

        <div style={{marginTop: "20px"}} className="inputTitle">비밀번호 확인</div>
        <div className="inputWrap">
          <input
           type='password'
           className="input"
           value={confirm}
           onChange={handleConfirm} />
        </div>
        <div className="errorMessageWrap">
              {!confirmValid && confirm.length > 0 && (
                  <div>비밀번호가 일치하지 않습니다.</div>
              )}
        </div>
      </div>
      <div>
        <button disabled={notAllow} className="bottomButton"> 
          회원가입 하기
        </button>
      </div>
   </div>
  );
}