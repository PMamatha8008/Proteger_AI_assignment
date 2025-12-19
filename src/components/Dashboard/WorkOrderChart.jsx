import React from 'react'
import './WorkOrderChart.css'

const workOrderData = [
  { department: 'Neonatal Intensive care unit', open: 20, closed: 7 },
  { department: 'Radiology', open: 6, closed: 8 },
  { department: 'Nursing Department', open: 10, closed: 9 },
  { department: 'Trauma and Emergency care', open: 6, closed: 4 },
  { department: 'Oncology', open: 2, closed: 3 },
]

function WorkOrderChart() {
  const maxValue = 30

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h2 className="chart-title">Work Order Reported -  12</h2>
        <div className="chart-legend">
          <span className="legend-item">
            <span className="dot blue"></span> Open
          </span>
          <span className="legend-item">
            <span className="dot closed"></span> Closed
          </span>
        </div>
      </div>

      <div className="bar-chart">
        {workOrderData.map((item, index) => (
          <div key={index} className="bar-row">
            <div className="bar-label">{item.department}</div>
            <div className="bars-container">
              <div className="single-bar">
                <div 
                  className="bar-fill open" 
                  style={{ width: `${(item.open / maxValue) * 100}%` }}
                >
                  <span className="val">{item.open}</span>
                </div>
              </div>
              <div className="single-bar">
                <div 
                  className="bar-fill closed" 
                  style={{ width: `${(item.closed / maxValue) * 100}%` }}
                >
                  <span className="val">{item.closed}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="x-axis">
        <div className="x-labels">
          {[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30].map(val => (
            <span key={val}>{val}</span>
          ))}
        </div>
      </div>

      <div className="chart-footer">
        Total No.of Work order
      </div>
    </div>
  )
}

export default WorkOrderChart
