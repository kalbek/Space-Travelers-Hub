import { Outlet } from 'react-router-dom';
import NavLink from './NavLink';

const Layout = () => (
  <>
    <NavLink />
    <Outlet />
  </>
);

export default Layout;
