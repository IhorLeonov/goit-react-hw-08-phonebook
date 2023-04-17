import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import {
  selectError,
  selectIsLoading,
  selectContacts,
  selectDeleteId,
  selectShowModal,
} from 'redux/contacts/selectors';

import { GlobalStyle } from 'components/constants/GlobalStyle';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { MainTitle, Phonebook, SecondTitle } from 'components/app/App.styled';
import { Notification } from 'components/notification/Notification';
import { Modal } from 'components/modal/Modal';
import { DeleteContactWarning } from 'components/deleteContactWarning/DeleteContactWarning';

// import { Helmet } from 'react-helmet-async';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const showModal = useSelector(selectShowModal);
  const deleteId = useSelector(selectDeleteId);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log();

  return (
    <div>
      <Phonebook>
        {/* <Helmet> */}
        <MainTitle>Phonebook</MainTitle>
        {/* </Helmet> */}
        <ContactForm />
        <Filter />
        {!isLoading && <SecondTitle>Contacts</SecondTitle>}
        {isLoading && !error && <SecondTitle>Loading...</SecondTitle>}
        {contacts?.length < 1 ? (
          <Notification message={'Phonebook is empty!'} />
        ) : (
          <ContactList />
        )}
        <GlobalStyle />
      </Phonebook>
      {showModal && (
        <Modal>
          <DeleteContactWarning id={deleteId} />
        </Modal>
      )}
    </div>
  );
};

export default ContactsPage;
