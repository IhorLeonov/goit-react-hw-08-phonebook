import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Layout } from 'components/layout/Layout';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { MainTitle, Phonebook, SecondTitle } from 'components/app/App.styled';
import { Notification } from 'components/notification/Notification';
import { Modal } from 'components/modal/Modal';
import { DeleteContactWarning } from 'components/deleteContactWarning/DeleteContactWarning';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import {
  selectError,
  selectIsLoading,
  selectContacts,
  selectDeleteId,
  selectShowModal,
} from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const showModal = useSelector(selectShowModal);
  const deleteId = useSelector(selectDeleteId);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Phonebook>
        <MainTitle>Phonebook</MainTitle>

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
    </Layout>
  );
};
