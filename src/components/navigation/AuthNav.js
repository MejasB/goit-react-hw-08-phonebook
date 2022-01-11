import {NavLink} from 'react-router-dom';

export const AuthNav = () => (
  <nav className="navLinks">
    <NavLink
      to="/register"
      exact
      className="navLink"
      activeClassName="navLinkActive"
    >
      Sign up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className="navLink"
      activeClassName="navLinkActive"
    >
      Sign in
    </NavLink>
  </nav>
);
export default AuthNav;
