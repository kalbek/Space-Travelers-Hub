import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <>
    <nav>
      <div className="nav-container">
        <div>
          <div className="flex">
            <div className="logo">Logo</div>
            <div className="title">Space Travellers&apos; Hub</div>
          </div>
          <div className="menus flex gap1">
            <NavLink
              to="/rockets"
              activeClassName="selected"
              style={{ textDecoration: 'none' }}
            >
              <div className="menu ptr">Rockets</div>
            </NavLink>
            <NavLink
              to="/missions"
              activeClassName="selected"
              style={{ textDecoration: 'none' }}
            >
              <div className="menu ptr">Missions</div>
            </NavLink>
            |
            <NavLink
              to="/profile"
              activeClassName="selected"
              style={{ textDecoration: 'none' }}
            >
              <div className="menu ptr">My Profile</div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default Navigation;
