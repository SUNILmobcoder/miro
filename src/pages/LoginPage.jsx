import React from 'react';
import { Link } from 'react-router-dom';
import { FormButton } from '../components/Forms';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/Forms/InputField';

const LoginPage = () => {
  const navigate = useNavigate();
  const hadleNavigate = () => {
    navigate('/myboard');
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Link className="link" to="signup">
          {' '}
          Sign Up
        </Link>
        <InputField className="pd" label="Email Id" />
        <InputField label="Password" />
        <FormButton onClick={hadleNavigate} label="LOGIN" />
      </div>
    </div>
  );
};

export default LoginPage;
