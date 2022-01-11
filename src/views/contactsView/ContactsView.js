import Filter from '../../components/filter/Filter';
import ContactList from '../../components/contactList/ContactList';
import ContactForm from '../../components/contactForm/ContactForm';
import {ContactsViewContainer} from './ContactsViewStyled';
import {HomeViewContainer} from '../homeView/HomeViewStyled';

const ContactsView = () => (
  <ContactsViewContainer>
    <HomeViewContainer>
      <h1>Phonebook</h1>
    </HomeViewContainer>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </ContactsViewContainer>
);

export default ContactsView;
