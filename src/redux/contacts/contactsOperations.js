import axios from 'axios';
import contactsActions from './contactsActions';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg2MjVhMjkyYWE0MDAwMTc1NmViNGIiLCJpYXQiOjE1ODU4NDk3NjJ9.1Om75vMwZ92vQ2qS5U7ctfC6Kgjtlmy2fuwt_cgIrbI';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const fetchExistContacts = () => dispatch => {
  dispatch(contactsActions.fetchExistContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) =>
      dispatch(contactsActions.fetchExistContactsSuccess(data)),
    )
    .catch(error => dispatch(contactsActions.fetchExistContactsError(error)));
};

const addContact = ({ name, number }) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactsActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch(error =>
      dispatch(contactsActions.removeContactError(error.message)),
    );
};

export default {
  addContact,
  fetchExistContacts,
  removeContact,
};
