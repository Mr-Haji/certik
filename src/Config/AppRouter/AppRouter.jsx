import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../Components/Home/Home';
import SmartAuditContract from '../../Pages/SmartAuditContract';
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Smart-Audit-Contract' element={<SmartAuditContract />} />

    </Routes>
  )
}

export default AppRouter