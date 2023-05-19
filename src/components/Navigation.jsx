import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="flex">
          <div className="logo">Logo</div>
          <div className="title">Space Travellers&apos; Hub</div>
        </div>
        <div className="menus flex gap1">
          <NavLink
            to="/rockets"
            className={({ isActive }) => (isActive ? "selected" : "")}
            style={{ textDecoration: "none" }}
          >
            <div className="menu ptr">Rockets</div>
          </NavLink>
          <NavLink
            to="/missions"
            className={({ isActive }) => (isActive ? "selected" : "")}
            style={{ textDecoration: "none" }}
          >
            <div className="menu ptr">Missions</div>
          </NavLink>
          |
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "selected" : "")}
            style={{ textDecoration: "none" }}
          >
            <div className="menu ptr">My Profile</div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
