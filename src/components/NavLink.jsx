import { Link } from 'react-router-dom';

const NavLink = () => (
  <>
    <nav>
      <div className="nav-container">
        <div>
          <div className="flex">
            <div className="logo">Logo</div>
            <div className="title">Space Travellers&apos; Hub</div>
          </div>
          <div className="menus flex gap1">
            <Link to="./missions">
              <div className="menu ptr">Missions</div>
            </Link>
            <Link to="/profile">
              <div className="menu ptr">My Profile</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </>
);

export default NavLink;
