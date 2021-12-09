import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import {Chat, Dashboard, Home, Login, Signup } from '../screens'
import { BoardPage, LoginPage, MyBoardPage, SignupPage } from '../pages';

const Navigation = () => {
  // const [authenticated, setAuthenticated] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/myboard" element={<MyBoardPage />} />
      <Route path="/board" element={<BoardPage />} />
    </Routes>
  );
};

export default Navigation;
