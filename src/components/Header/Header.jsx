import React from 'react'
import { ArrowLeft, Bell, ChevronDown, LayoutGrid, Menu } from 'lucide-react'
import './Header.css'

function Header() {
  return (
    <>
      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-logo">
            <span className="logo-v">V</span>
            <span className="logo-text">Vajra</span>
          </div>
          <button className="menu-btn">
            <Menu size={24} />
          </button>
        </div>
        <h1 className="mobile-title">Monthly Report</h1>
      </header>

      {/* Desktop Header */}
      <header className="desktop-header">
        <div className="header-left">
          <button className="back-btn">
            <ArrowLeft size={20} />
          </button>
          <h1 className="page-title">
            <span className="title-main">Reports</span>
            <span className="title-sep">/</span>
            <span className="title-sub">Bio Medical</span>
          </h1>
        </div>
        
        <div className="header-right">
          <div className="nb-tag">
            <span className="nb-badge">NB</span>
            <span>Non Bio Medical</span>
          </div>
          <div className="location-dropdown">
            <span>Vijayanagar</span>
            <ChevronDown size={14} />
          </div>
          <button className="icon-btn">
            <LayoutGrid size={18} />
          </button>
          <button className="icon-btn">
            <Bell size={18} />
          </button>
          <div className="user-avatar">A</div>
        </div>
      </header>
    </>
  )
}

export default Header
