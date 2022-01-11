import axios from 'axios';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError
} from './contacts-actions';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchRequest());
  try {
    const {data} = await axios.get('/contacts');

    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};

export const addNewContact = inputData => dispatch => {
  dispatch(addRequest());
  axios
    .post('/contacts', inputData)
    .then(({data}) => dispatch(addSuccess(data)))
    .catch(error => dispatch(addError(error.message)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch(error => dispatch(deleteError(error.message)));
};

//export default {addNewContact, deleteContact};
