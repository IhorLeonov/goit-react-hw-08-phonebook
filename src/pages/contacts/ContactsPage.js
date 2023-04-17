import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { openAddForm } from 'redux/contacts/contactsSlice';

import {
  selectError,
  selectIsLoading,
  selectContacts,
  selectDeleteId,
  selectShowModal,
  selectIsAddFormOpen,
} from 'redux/contacts/selectors';

import { GlobalStyle } from 'components/constants/GlobalStyle';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import {
  ButtonAdd,
  // MainTitle,
  Phonebook,
  SecondTitle,
  UpperBox,
} from 'pages/contacts/ContactsPage.styled';
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
  const isAddFormOpen = useSelector(selectIsAddFormOpen);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenAddForm = () => {
    dispatch(openAddForm());
  };

  return (
    <div>
      <Phonebook>
        {/* <Helmet> */}
        {/* <MainTitle>Phonebook</MainTitle> */}
        {/* </Helmet> */}
        <UpperBox>
          {!isLoading && <SecondTitle>Contacts</SecondTitle>}
          {isLoading && !error && <SecondTitle>Loading...</SecondTitle>}
          <ButtonAdd type="button" onClick={handleOpenAddForm}>
            +
          </ButtonAdd>
          <Filter />
        </UpperBox>
        {isAddFormOpen && <ContactForm />}
        <div>
          {contacts?.length < 1 ? (
            <Notification message={'Phonebook is empty!'} />
          ) : (
            <ContactList />
          )}
        </div>
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
