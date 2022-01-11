import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {authSelectors} from '../../redux/auth';

const Navigation = ({isAuthenticated}) => (
  <nav className="navLinks">
    <NavLink to="/" exact className="navLink" activeClassName="navLinkActive">
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className="navLink"
        activeClassName="navLinkActive"
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
});

export default connect(mapStateToProps)(Navigation);
