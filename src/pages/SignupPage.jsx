import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormButton, InputField } from '../components/Forms';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const hansleSubmit = () => {
    navigate('/myboard');
  };
  return (
    <div className="container">
      <div className="wrapper">
        <Link className="link" to="/">
          Login
        </Link>
        <InputField
          value={email}
          onChange={handleEmailChange}
          label="Email Id"
        />
        <InputField
          value={password}
          onChange={handlePasswordChange}
          label="Password"
        />
        <FormButton onClick={hansleSubmit} label="SIGNUP" />
      </div>
    </div>
  );
};

export default SignupPage;
