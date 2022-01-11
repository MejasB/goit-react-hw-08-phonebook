import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  ButtonContainer,
  ContactFormContainer,
  InputContainer,
  LabelContainer
} from './ContactFormStyled';

import {addNewContact, getContacts} from '../../redux/contacts';

class ContactForm extends Component {
  state = {name: '', number: ''};

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.props.contacts.some(contact => contact.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
      return;
    }

    this.props.addNewContact({
      name: this.state.name,
      number: this.state.number
    });
  };

  render() {
    return (
      <ContactFormContainer onSubmit={this.handleSubmit}>
        <LabelContainer htmlFor="name">Name</LabelContainer>
        <InputContainer
          type="text"
          id="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <LabelContainer htmlFor="number">Number</LabelContainer>
        <InputContainer
          type="tel"
          id="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
          value={this.state.value}
        />
        <ButtonContainer type="submit">Add contact</ButtonContainer>
      </ContactFormContainer>
    );
  }
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  // console.log('Contacts form - mapstate');
  // console.dir(state);
  return {
    contacts: getContacts(state)
  };
};

// Решение до Redux Toolkit, оставила для сравнения
const mapDispatchToProps = dispatch => {
  return {
    addNewContact: contact => dispatch(addNewContact(contact))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
