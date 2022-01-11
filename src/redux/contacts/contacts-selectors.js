import {createSelector} from 'reselect';

export const getLoading = state => state.contacts.loading;
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

//Селектор до использования мемоизации (оставлено для примера)
// export const getFilteredContacts = state => {
//   console.log('Перерендер интерфейса');
//   const allContacts = getContacts(state);
//   const filter = getFilter(state);

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase().trim())
//   );
// };

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    console.log('Перерендер интерфейса');
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
