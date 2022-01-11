import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {v4 as uuid} from 'uuid';
import {connect} from 'react-redux';

import ContactListItem from '../contactListItem/ContactListItem';

import {
  deleteContact,
  fetchContacts,
  getFilteredContacts,
  getLoading
} from '../../redux/contacts';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <ul>
        {this.props.isLoadingContacts && <h2>Loading...</h2>}
        {this.props.contacts.map(contact => (
          <ContactListItem
            name={contact.name}
            number={contact.number}
            key={uuid()}
            deleteContact={() => this.props.deleteContact(contact.id)}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => {
  return {
    contacts: getFilteredContacts(state),
    isLoadingContacts: getLoading(state)
  };
};

const mapDispatchToProps = {deleteContact, fetchContacts};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
