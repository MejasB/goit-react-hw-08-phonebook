//Добавь компонент UserMenu, состоящий из почты пользователя и кнопки Выйти.

import {connect} from 'react-redux';
import {authSelectors, authOperations} from '../../redux/auth';
import {UserMenuContainer} from './UserMenuStyled';

const UserMenu = ({userName, userEmail, onLogout}) => (
  <UserMenuContainer>
    <p className="userMenuRext">
      Welcome, <b>{userName}</b>
    </p>
    <p className="userMenuRext">
      Email: <b>{userEmail}</b>
    </p>
    <button type="button" className="navLink" onClick={onLogout}>
      Sign off
    </button>
  </UserMenuContainer>
);

const mapStateToProps = state => ({
  userName: authSelectors.getUserName(state),
  userEmail: authSelectors.getUserEmail(state)
});
const mapDispatchToProps = {
  onLogout: authOperations.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
