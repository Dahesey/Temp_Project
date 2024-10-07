import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ChooseUser from './pages/ChooseUser';
import LoginPage from './pages/LoginPage';

const App = () => {

  const { currentRole } = useSelector(state => state.user);

  return (
    <Router>
       {currentRole === null &&
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/choose" element={<ChooseUser  />} />
        <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
        <Route path="/Frontdesklogin" element={<LoginPage role="Frontdesk" />} />
        <Route path="/Financelogin" element={<LoginPage role="Finance" />} />

      </Routes>}
    </Router>
  );
}



export default App;
