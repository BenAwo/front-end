import HomeIcon from "@mui/icons-material/Home";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import EmailIcon from '@mui/icons-material/Email';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Sidebar = () => {
  return (
    <aside className="S">
      <div className="filter-input">
        <FilterAltIcon />
        <input type="text" placeholder="Filter"></input>
      </div>
      <a href="servicenow.html" className="nav-item">
        <HomeIcon />
        Home
      </a>
      <div></div>
      <a href="incidents.html" className="nav-item">
        <EmailIcon />
        Incidents
      </a>
      <div></div>
      <a href="requests.html" className="nav-item">
        <LocalOfferIcon />
        Requests
      </a>
    </aside>
  );
};

export default Sidebar;
