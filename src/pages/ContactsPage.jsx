import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import Container from '../components/Container';
import Form from '../components/Form';
import ContactsList from '../components/Contacts';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import { getLoading } from '../redux/contacts/contacts-selectors';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      {isLoading && (
        <Loader type="ThreeDots" color="#818181" height={80} width={80} />
      )}
    </Container>
  );
}

export default ContactsPage;
