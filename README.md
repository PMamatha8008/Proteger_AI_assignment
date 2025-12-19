# Vajra - Monthly Report Dashboard

A React-based UI implementation of the Figma design for Proteger AI assignment.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Clean Component Structure**: Modular components following React best practices
- **Modern UI**: Gradient backgrounds, smooth transitions, and professional styling

## Project Structure

```
src/
├── components/
│   ├── Sidebar/
│   │   ├── Sidebar.jsx
│   │   └── Sidebar.css
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   └── Dashboard/
│       ├── Dashboard.jsx
│       ├── Dashboard.css
│       ├── MonthlyReportHeader.jsx
│       ├── MonthlyReportHeader.css
│       ├── StatsCards.jsx
│       ├── StatsCards.css
│       ├── IncidentChart.jsx
│       ├── IncidentChart.css
│       ├── WorkOrderChart.jsx
│       ├── WorkOrderChart.css
│       ├── DepartmentCards.jsx
│       └── DepartmentCards.css
├── App.jsx
├── main.jsx
└── index.css
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Styling (no CSS frameworks)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the project files

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Design Implementation

This project implements the Figma design which includes:

- **Sidebar Navigation**: Dark themed navigation with menu items
- **Header**: Breadcrumb navigation with location tags
- **Monthly Report Section**: Hospital info card, donut chart, and mini bar chart
- **Stats Cards**: Total assets, check outs, incidents, and work orders
- **Bar Charts**: Horizontal bar charts for incidents and work orders by department
- **Department Cards**: Detailed asset information per department

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px

## Author

Created for Proteger AI Assignment
