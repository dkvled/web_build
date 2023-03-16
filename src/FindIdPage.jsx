import React, { useState } from 'react';
import validator from 'validator';

function FindIdPage() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFindId = (e) => {
    e.preventDefault();

    if (!validator.isMobilePhone(phone) && !validator.isEmail(email)) {
      setErrorMessage('전화번호 또는 이메일을 입력하세요.');
      return;
    }

    // 여기에서 아이디 찾기 로직을 구현합니다.
    // ...

    // 아이디를 찾았다면 결과를 보여줍니다.
    // ...
  };

  return (
    <div className='page'>
      <div className='titleWrap'>
        아이디 찾기
      </div>
      
      <form onSubmit={handleFindId}>
        <div className='contentWrap'>
          <div className="inputTitle">
            전화번호
          </div>
          <div className="inputWrap">
            <input 
              type="text" 
              className="input"
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div style={{marginTop: "26px"}} className="inputTitle">
            이메일
          </div>
          <div className="inputWrap">
            <input
              type="text" 
              className="input"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <button style={{marginTop: "150px"}} type="submit" className="bottomButton">찾기</button>
      </form>
    </div>
  );
}

export default FindIdPage;
