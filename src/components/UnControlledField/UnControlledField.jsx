import React, { useRef } from 'react';

const UnControlledField = () => {
  const emailRef = useRef();
  const passworRef = useRef();
  

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passworRef.current.value;
    console.log(email, password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name=""/>
        <br />
        <input ref={passworRef} type="password" name=""/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;