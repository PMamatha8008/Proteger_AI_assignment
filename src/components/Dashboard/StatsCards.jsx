import React from 'react'
import './StatsCards.css'

function StatsCards() {
  return (
    <div className="stats-cards">
      <div className="stat-card total-asset">
        <span className="stat-label">Total Asset</span>
        <span className="stat-value">200</span>
        <div className="wave-bg">
          <svg viewBox="0 0 200 80" preserveAspectRatio="none">
            <ellipse cx="160" cy="60" rx="80" ry="50" fill="rgba(251,191,191,0.4)" />
            <ellipse cx="140" cy="70" rx="60" ry="40" fill="rgba(251,191,191,0.3)" />
          </svg>
        </div>
      </div>

      {/* Mobile only cards */}
      <div className="stat-card mobile-only not-working">
        <span className="stat-label">Not working Asset</span>
        <span className="stat-value">100</span>
      </div>

      <div className="stat-card mobile-only total-downtime">
        <span className="stat-label">Total Downtime</span>
        <span className="stat-value">35 mins 21 sec</span>
      </div>

      <div className="stat-card checkouts">
        <h3 className="card-title">Check outs</h3>
        <div className="stat-rows">
          <div className="stat-row">
            <span className="label">Checked In</span>
            <span className="value">0</span>
          </div>
          <div className="stat-row">
            <span className="label">Checked Out</span>
            <span className="value">25</span>
          </div>
        </div>
      </div>

      <div className="stat-card incidents">
        <div className="card-header-blue">Incidents</div>
        <div className="stat-rows">
          <div className="stat-row">
            <span className="label">Incidents</span>
            <span className="value">22 Reported</span>
          </div>
          <div className="stat-row">
            <span className="label">Total Downtime</span>
            <span className="value">12 mins 10 sec</span>
          </div>
          <div className="stat-row">
            <span className="label">Closed</span>
            <span className="value">19</span>
          </div>
          <div className="stat-row">
            <span className="label">Open</span>
            <span className="value">3</span>
          </div>
          <div className="stat-row">
            <span className="label">Budget spent</span>
            <span className="value budget">₹ 3,00,000</span>
          </div>
        </div>
      </div>

      <div className="stat-card workorder">
        <div className="card-header-blue">Work Order</div>
        <div className="stat-rows">
          <div className="stat-row">
            <span className="label">Work order</span>
            <span className="value">17 requested</span>
          </div>
          <div className="stat-row">
            <span className="label">Closed</span>
            <span className="value">14</span>
          </div>
          <div className="stat-row">
            <span className="label">Open</span>
            <span className="value">3</span>
          </div>
          <div className="stat-row">
            <span className="label">Budget spent</span>
            <span className="value budget">₹ 3,00,000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCards
