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

import { Loader } from 'components/loader/Loader';
import { GlobalStyle } from 'components/constants/GlobalStyle';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import {
  ButtonAdd,
  ShowIcon,
  HideIcon,
  Phonebook,
  Title,
  UpperBox,
  Headers,
  Name,
  Number,
  Total,
} from 'pages/contacts/ContactsPage.styled';

import { Notification } from 'components/notification/Notification';
import { Modal } from 'components/modal/Modal';
import { DeleteContactWarning } from 'components/deleteContactWarning/DeleteContactWarning';

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
        <UpperBox>
          <Title>Contacts</Title>
          {isLoading && !error && <Loader width={96} />}
          <ButtonAdd type="button" onClick={handleOpenAddForm}>
            {!isAddFormOpen ? <ShowIcon /> : <HideIcon />}
          </ButtonAdd>
        </UpperBox>
        {isAddFormOpen && <ContactForm />}
        <Headers>
          <Total>Total: {contacts?.length}</Total>
          <Name>Name:</Name>
          <Number>Number:</Number>
          <Filter />
        </Headers>
        <div>
          {contacts?.length < 1 && !isLoading ? (
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
