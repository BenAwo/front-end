import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import BasicTable from './incident-table.jsx'
import './layout.css'

export default function App() {
  return (
    <div className="height: 100%">
    <header>
      <span className="logo">MTN</span>
      <nav>
        <a href="favourites.html">Favourites</a>
      </nav>
      <div className="header-center">
        <a href="all.html">All</a>
        <a href="history.html">History</a>
        <a href="workspaces.html">Workspaces</a>
        <span className="header-title">MTN ServiceNow - Tasks</span>
      </div>
      <div className="header-right">
        <div className="search-wrapper">
          <i className="fa fa-search icon-btn"></i>
          <input type="text" placeholder="Search" />
        </div>
        <i className="fa fa-user icon-btn"></i>
        <i className="fa fa-bell icon-btn"></i>
        <i className="fa fa-cog icon-btn"></i>
      </div>
    </header> 
    <main>
      <aside>
        <div className="filter-input">
          <i className="fa fa-filter"></i>
          <input type="text" placeholder="Filter"></input>
        </div>
        <a href="servicenow.html" className="nav-item"><i className="fa fa-home"></i>Home</a>
        <div></div>
        <a href="incidents.html" className="nav-item"><i className="fa fa-envelope"></i>Incidents</a>
        <div></div>
        <a href="requests.html" className="nav-item"><i className="fa fa-tag"></i>Requests</a>
      </aside>
      <section className="content"> 
        <footer>
          <i className="fa fa-filter"></i>
          <span>Tasks</span>
          <select>
            <option value="created">Created</option>
          </select>
          <input type="text" placeholder="Search" />
          <select>
            <option value="delete">Delete</option>
          </select>
        </footer>
      <div className="content">
      <BasicTable />
      </div>
      </section>
    </main>
  </div>
    );
  }