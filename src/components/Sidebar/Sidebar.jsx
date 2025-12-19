import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  Box, 
  AlertTriangle, 
  Settings, 
  FileText, 
  Users, 
  BarChart3, 
  Phone, 
  LogOut,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import './Sidebar.css'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: Box, label: 'Assets', active: false, hasSubmenu: true },
  { icon: AlertTriangle, label: 'Incidents', active: false },
  { icon: Settings, label: 'Services', active: false },
  { icon: FileText, label: 'Request', active: false },
  { icon: Users, label: 'Users', active: false, hasSubmenu: true },
  { icon: BarChart3, label: 'Reports', active: true, hasSubmenu: true },
]

const bottomItems = [
  { icon: Phone, label: 'Contact us', active: false },
  { icon: LogOut, label: 'Log Out', active: false },
]

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <aside className={`sidebar ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">V</span>
            <span className="logo-text">Vajra</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                <a href="#" className="nav-link">
                  <item.icon size={20} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                  {item.hasSubmenu && <ChevronDown size={16} className="submenu-icon" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-bottom">
          <ul className="nav-list">
            {bottomItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href="#" className="nav-link">
                  <item.icon size={20} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {mobileOpen && <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  )
}

export default Sidebar
