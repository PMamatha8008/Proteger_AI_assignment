import React from 'react'
import { ArrowRight } from 'lucide-react'
import './DepartmentCards.css'

const departments = [
  {
    name: 'Anesthesiology',
    type: 'incident',
    stats: { reported: 5, open: 20, downtime: '7 min 22 sec' },
    assets: [
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'CT scan', code: 'A001234', startDate: '18-06-2025', clearDate: '19-06-2025' },
    ]
  },
  {
    name: 'Radiology',
    type: 'incident',
    stats: { reported: 5, open: 20, downtime: '7 min 22 sec' },
    assets: [
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'CT scan', code: 'A001234', startDate: '18-06-2025', clearDate: '19-06-2025' },
    ]
  },
  {
    name: 'Dermatology',
    type: 'workorder',
    stats: { reported: 5, open: 20, downtime: '7 min 22 sec' },
    assets: [
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'CT scan', code: 'A001234', startDate: '18-06-2025', clearDate: '19-06-2025' },
    ]
  },
  {
    name: 'Gynacology',
    type: 'workorder',
    stats: { reported: 5, open: 20, downtime: '7 min 22 sec' },
    assets: [
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'Strecher', code: 'A001234', startDate: '21-08-2025', clearDate: '26-08-2025' },
      { name: 'CT scan', code: 'A001234', startDate: '18-06-2025', clearDate: '19-06-2025' },
    ]
  },
]

function AssetCard({ asset, showArrow }) {
  return (
    <div className="asset-card-wrapper">
      <div className="asset-card">
        <div className="asset-row">
          <span className="asset-label">Asset name :</span>
          <span className="asset-value">{asset.name}</span>
        </div>
        <div className="asset-row">
          <span className="asset-label">Asset code :</span>
          <span className="asset-value code">: {asset.code}</span>
        </div>
        <div className="asset-row">
          <span className="asset-label">Start Date</span>
          <span className="asset-value">: {asset.startDate}</span>
        </div>
        <div className="asset-row">
          <span className="asset-label">Clear Date</span>
          <span className="asset-value">: {asset.clearDate}</span>
        </div>
      </div>
      {showArrow && (
        <div className="arrow-connector">
          <ArrowRight size={16} />
        </div>
      )}
    </div>
  )
}

function DepartmentSection({ department, isFirst, type }) {
  return (
    <div className="department-section">
      {isFirst && (
        <div className="section-header">
          <div className="header-left">
            <h3 className="section-title">
              {type === 'incident' ? 'Incident Reported per department' : 'Work order Reported per department'}
            </h3>
          </div>
          <div className="header-right">
            <div className="stat-line">
              <span className="stat-label">Incidents Reported :</span>
              <span className="stat-val">{department.stats.reported}</span>
            </div>
            <div className="stat-line">
              <span className="stat-label">Incidents Open :</span>
              <span className="stat-val">{department.stats.open}</span>
            </div>
            <div className="stat-line">
              <span className="stat-label">Total Downtime :</span>
              <span className="stat-val">{department.stats.downtime}</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="dept-name-row">
        <span className="dept-label">Department :</span>
        <span className="dept-name">{department.name}</span>
      </div>
      
      <div className="assets-row">
        {department.assets.map((asset, index) => (
          <AssetCard 
            key={index} 
            asset={asset} 
            showArrow={index < department.assets.length - 1} 
          />
        ))}
      </div>
    </div>
  )
}

function DepartmentCards() {
  const incidentDepartments = departments.filter(d => d.type === 'incident')
  const workorderDepartments = departments.filter(d => d.type === 'workorder')

  return (
    <div className="department-cards">
      <div className="department-group">
        {incidentDepartments.map((dept, index) => (
          <DepartmentSection 
            key={dept.name} 
            department={dept} 
            isFirst={index === 0}
            type="incident"
          />
        ))}
      </div>
      
      <div className="department-group">
        {workorderDepartments.map((dept, index) => (
          <DepartmentSection 
            key={dept.name} 
            department={dept} 
            isFirst={index === 0}
            type="workorder"
          />
        ))}
      </div>
    </div>
  )
}

export default DepartmentCards
