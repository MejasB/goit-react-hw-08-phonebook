import {Component} from 'react';
import {connect} from 'react-redux';
import SignIn from '../../components/signIn/SignIn';
import {authOperations} from '../../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({name: '', email: '', password: ''});
  };

  render() {
    const {email, password} = this.state;

    return (
      <div>
        <SignIn
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          email={email}
          password={password}
        />
        {/* Вариант без использования компонента SignIn */}
        {/* <h1>Login Page</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Login</button>
        </form> */}
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn
};

export default connect(null, mapDispatchToProps)(LoginView);
