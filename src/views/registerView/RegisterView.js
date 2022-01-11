import {Component} from 'react';
import {connect} from 'react-redux';
import SignUp from '../../components/signUp/SignUp';
import {authOperations} from '../../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({name: '', email: '', password: ''});
  };

  render() {
    const {name, email, password} = this.state;

    return (
      <>
        <SignUp
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          name={name}
          email={email}
          password={password}
        />

        {/* Вариант без использования компонента SignUp */}
        {/* <h1>Registration Page</h1>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Register</button>
        </form> */}
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register
};

export default connect(null, mapDispatchToProps)(RegisterView);
// export default RegisterView;
