import React, { useEffect } from 'react';
import {
  Routes,
  Route,
    BrowserRouter
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './Login';
import './css/all.css'
import Admin from './pages/userManagement/Admin';
import RiskCoordinator from './pages/userManagement/RiskCoordinator';
import FieldExecutive from './pages/userManagement/FieldExecutive';
import TotalCase from './pages/caseManagement/TotalCase';
import PendingCase from './pages/caseManagement/PendingCase';
import DecliendCase from './pages/caseManagement/DecliendCase';
import PendingCaseQA from './pages/caseManagement/PendingCaseQA';
import HighAgeingCase from './pages/caseManagement/HighAgeingCase';
import ClosedCases from './pages/caseManagement/ClosedCases';

function App() {

  // const location = useLocation();

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }, [location.pathname]); // triggered on route change

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

          {/* User Management Routing Start */}
          <Route path='/dashboard/Admin' element={<Admin />}></Route>
          <Route path='/dashboard/riskCoordinator' element={<RiskCoordinator />}></Route>
          <Route path='/dashboard/fieldExecutive' element={<FieldExecutive />}></Route>
          {/* User Management Routing END */}


          {/* Case Management Routing Start */}
          <Route path='/caseManagement/totalCases' element={<TotalCase />}></Route>
          <Route path='/caseManagement/pendingFromFieldExecutive' element={<PendingCase />}></Route>
          <Route path='/caseManagement/pendingCaseQA' element={<PendingCaseQA />}></Route>
          <Route path='/caseManagement/decliendCases' element={<DecliendCase />}></Route>
          <Route path='/caseManagement/highAgeingCase' element={<HighAgeingCase />}></Route>
          <Route path='/caseManagement/closedCases' element={<ClosedCases />} ></Route>
          {/* Case Management Routing END */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
