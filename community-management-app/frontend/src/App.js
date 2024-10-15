import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import ChooseUser from './pages/ChooseUser';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import AdminDashboard from './pages/admin/AdminDashboard';

const App = () => {
  const { currentRole } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/choose" element={<ChooseUser />} />
        <Route path="/:rolelogin" element={<LoginPage />} />
        <Route path="/Adminregister" element={<AdminRegisterPage />} />
        {currentRole === 'Admin' && (
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        )}
        {/* routes for other roles' dashboards here */}
      </Routes>
    </Router>
  );
};

export default App;