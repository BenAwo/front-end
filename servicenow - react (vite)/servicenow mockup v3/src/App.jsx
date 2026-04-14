import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import BasicTable from './incident-table.jsx'
import HomeIcon from '@mui/icons-material/Home';
import './layout.css'
import Sidebar from './components/sidebar.jsx'
import Taskbar from './components/taskbar.jsx'
import Header from './components/header.jsx'

export default function App() {
  return (
    <div className="">
    <Header />
     <div className="main">
        <Sidebar />
        <div className="content">
          <Taskbar />
          <BasicTable />
        </div>
      </div>
  </div>
    );
  }