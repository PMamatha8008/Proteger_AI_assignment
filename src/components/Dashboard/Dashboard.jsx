import React from 'react'
import MonthlyReportHeader from './MonthlyReportHeader'
import StatsCards from './StatsCards'
import IncidentChart from './IncidentChart'
import WorkOrderChart from './WorkOrderChart'
import DepartmentCards from './DepartmentCards'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <MonthlyReportHeader />
      <StatsCards />
      <IncidentChart />
      <WorkOrderChart />
      <DepartmentCards />
    </div>
  )
}

export default Dashboard
