import React from 'react'
import { Building2, ChevronLeft, ChevronRight, Download, MapPin, Calendar } from 'lucide-react'
import './MonthlyReportHeader.css'

function MonthlyReportHeader() {
  return (
    <div className="monthly-report-header">
      <div className="report-title-section">
        <div className="vajra-logo">
          <div className="v-icon">V</div>
          <span className="vajra-text">Vajra</span>
        </div>
        <h1 className="report-title">Monthly Report</h1>
        <div className="date-picker">
          <ChevronLeft size={18} className="date-nav" />
          <span className="date-text">June 2025</span>
          <Calendar size={16} className="calendar-icon" />
          <ChevronRight size={18} className="date-nav" />
        </div>
        <button className="download-btn">
          <Download size={16} />
          <span>Download PDF</span>
        </button>
      </div>

      <div className="report-cards-row">
        <div className="hospital-card">
          <div className="hospital-icon">
            <Building2 size={28} />
          </div>
          <div className="hospital-info">
            <h3>Sri siddhartha institute of medical science</h3>
            <div className="hospital-location">
              <MapPin size={16} />
              <span>Vijayanagar</span>
            </div>
          </div>
        </div>

        <div className="donut-chart-card">
          <div className="donut-wrapper">
            <svg viewBox="0 0 100 100" className="donut-svg">
              <circle cx="50" cy="50" r="35" fill="none" stroke="#e5e7eb" strokeWidth="14" />
              <circle 
                cx="50" cy="50" r="35" 
                fill="none" 
                stroke="#22d3ee" 
                strokeWidth="14"
                strokeDasharray="154 220"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
              />
              <circle 
                cx="50" cy="50" r="35" 
                fill="none" 
                stroke="#f87171" 
                strokeWidth="14"
                strokeDasharray="44 220"
                strokeDashoffset="-154"
                transform="rotate(-90 50 50)"
              />
              <circle 
                cx="50" cy="50" r="35" 
                fill="none" 
                stroke="#a5b4fc" 
                strokeWidth="14"
                strokeDasharray="22 220"
                strokeDashoffset="-198"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
          <div className="donut-legend">
            <div className="legend-row">
              <span className="legend-dot cyan"></span>
              <span>Working Assets</span>
            </div>
            <div className="legend-row">
              <span className="legend-dot red"></span>
              <span>Not working Assets</span>
            </div>
            <div className="legend-row">
              <span className="legend-dot purple"></span>
              <span>Discarded</span>
            </div>
          </div>
          <div className="not-working-badge">
            <span className="nw-dot"></span>
            <span>Not Working Assets - 7</span>
          </div>
        </div>

        <div className="mini-bar-chart-card">
          <div className="chart-legend-top">
            <span className="legend-item-inline">
              <span className="dot blue"></span> Open
            </span>
            <span className="legend-item-inline">
              <span className="dot gray"></span> Closed
            </span>
          </div>
          <div className="work-order-label">
            <div className="wo-title">Work Order</div>
            <div className="wo-stats">
              <span>Open - 35</span>
              <span>Closed - 20</span>
            </div>
          </div>
          <div className="vertical-bars">
            <div className="vbar-group">
              <div className="vbar-values">
                <span>20</span>
              </div>
              <div className="vbar-stack">
                <div className="vbar blue" style={{ height: '80px' }}></div>
                <div className="vbar gray" style={{ height: '60px' }}></div>
              </div>
              <span className="vbar-label">Incidents</span>
            </div>
            <div className="vbar-group">
              <div className="vbar-values">
                <span>5</span>
              </div>
              <div className="vbar-stack">
                <div className="vbar blue" style={{ height: '50px' }}></div>
                <div className="vbar gray" style={{ height: '40px' }}></div>
              </div>
              <span className="vbar-label">Work Order</span>
            </div>
            <div className="vbar-group">
              <div className="vbar-values">
                <span>10</span>
                <span>7</span>
              </div>
              <div className="vbar-stack">
                <div className="vbar blue" style={{ height: '40px' }}></div>
                <div className="vbar gray" style={{ height: '28px' }}></div>
              </div>
              <span className="vbar-label">Check outs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyReportHeader
