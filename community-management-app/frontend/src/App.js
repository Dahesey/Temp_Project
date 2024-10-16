import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import ChooseUser from './pages/ChooseUser';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminHomePage from './pages/admin/AdminHomePage';
import ShowFrontDesk from './pages/admin/frontdeskRelated/ShowFrontDesk';
import ShowFinance from './pages/admin/financeRelated/ShowFinance';
import AdminProfile from './pages/admin/AdminProfile';

const App = () => {
  // const { currentRole } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/choose" element={<ChooseUser />} />
        <Route path="/login/:role" element={<LoginPage />} /> {/*changed from /:rolelogin */}
        <Route path="/Adminregister" element={<AdminRegisterPage />} />
        {/*{currentRole === 'Admin' && (*/}
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        {/*})}*/}
        <Route path="/Admin/dashboard" element={<AdminHomePage />} />
        <Route path="/Admin/finance" element={<ShowFinance />} />
        <Route path="/Admin/profile" element={<AdminProfile />} />
        <Route path="/Admin/frontdesk" element={<ShowFrontDesk />} />
        {/* routes for other roles' dashboards here */}
      </Routes>
    </Router>
  );
};

export default App;