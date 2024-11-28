import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../Components/Home/Home';
import SmartAuditContract from '../../Pages/SmartAuditContract';
import L1ChainAudit from '../../Pages/L1ChainAudit';
import Skynet from '../../Pages/Skynet';
import SecurityStore from '../../Pages/SecuriityStore';
import Pentest from '../../Pages/Pentest';
import SkyNode from '../../Pages/SkyNode';
import BugBounty from '../../Pages/BugBounty';
import IncidentResponse from '../../Pages/IncidenResponse';
import Advisory from '../../Pages/Advisory';
import FormalVerification from '../../Pages/FormalVerification';
import Skyinsights from '../../Pages/Skyinsights';
import Kyc from '../../Pages/Kyc';
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Smart-Audit-Contract' element={<SmartAuditContract />} />
      <Route path='/L1-Chain-Audit' element={<L1ChainAudit />} />
      <Route path='/sky-net' element={<Skynet />} />
      <Route path='/Security-Store' element={<SecurityStore />} />
      <Route path='/Pen-test' element={<Pentest />} />
      <Route path='/sky-node' element={<SkyNode />} />
      <Route path='/bug-bounty' element={<BugBounty />} />
      <Route path='/Incident-Response' element={<IncidentResponse />} />
      <Route path='/advisory' element={<Advisory />} />
      <Route path='/formal-verification' element={<FormalVerification />} />
      <Route path='/skyinsights' element={<Skyinsights />} />
      <Route path='/Kyc' element={<Kyc />} />

    </Routes>
  )
}

export default AppRouter