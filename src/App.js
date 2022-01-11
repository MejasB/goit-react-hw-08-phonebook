// import ContactForm from './components/contactForm/ContactForm';
// import Filter from './components/filter/Filter';
// import ContactList from './components/contactList/ContactList';
import {Route, Switch} from 'react-router';
// import HomeView from './views/homeView/HomeView';
import AppBar from './components/navigation/AppBar';
import {Component, lazy} from 'react';
import {connect} from 'react-redux';
import {authOperations} from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import {Suspense} from 'react';

const HomeView = lazy(() => import('./views/homeView/HomeView'));
const RegisterView = lazy(() => import('./views/registerView/RegisterView'));
const LoginView = lazy(() => import('./views/loginView/LoginView'));
const ContactsView = lazy(() => import('./views/contactsView/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <div>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
};

export default connect(null, mapDispatchToProps)(App);
