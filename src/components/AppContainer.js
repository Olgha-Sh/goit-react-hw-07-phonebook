import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../redux/contacts/contactsOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';
import App from './App';

class AppContainer extends Component {
  componentDidMount() {
    const { onFetchExistContacts } = this.props;
    return onFetchExistContacts();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    isLoadingContacts: contactsSelectors.getLoading(state),
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addLocalContacts: array =>
//       dispatch(ContactsActions.addLocalContacts(array)),
//   };
// };

const mapDispatchToProps = {
  onFetchExistContacts: contactsOperations.fetchExistContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
