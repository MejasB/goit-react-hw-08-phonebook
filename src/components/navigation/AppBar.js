import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from '../userMenu/UserMenu';
import {connect} from 'react-redux';
import {authSelectors} from '../../redux/auth';
import {HeaderContainer} from './AppBarStyled';

const AppBarMain = ({isAuthenticated}) => (
  <HeaderContainer>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </HeaderContainer>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
});

export default connect(mapStateToProps)(AppBarMain);
