import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import Filter from './FilterContainer';
import Layout from './Layout';
import ContactForm from './ContactFromContainer';
import ContactList from './ContactList/ContactListContainer';
import Header from './Header';
import Spinner from './Spinner';
import '../base.css';

function App({ isLoadingContacts }) {
  return (
    <ThemeContext>
      <Layout>
        {isLoadingContacts && <Spinner />}
        <Header text={'Phonebook'} />
        <ContactForm />
        <Filter />
        <ContactList />
      </Layout>
    </ThemeContext>
  );
}

export default App;
