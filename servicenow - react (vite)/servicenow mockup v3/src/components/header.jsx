import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  return (
    <div>
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
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <PersonIcon />
        <NotificationsIcon />
        <SettingsIcon />
      </div>
    </header> 
    </div>
  )
}

export default Header;
