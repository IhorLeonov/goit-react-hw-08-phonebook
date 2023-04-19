import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/contacts/contactsSlice';

import {
  DeleteModal,
  Text,
  ButtonOk,
  ButtonNo,
  ButtonWrapper,
} from './DeleteContactWarning.styled';

export const DeleteContactWarning = ({ id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    dispatch(toggleModal(id));
  };
  const handleCloseModal = () => dispatch(toggleModal(id));

  return (
    <DeleteModal>
      <Text>A you sure?</Text>
      <ButtonWrapper>
        <ButtonOk type="button" onClick={handleDeleteContact}>
          Ok
        </ButtonOk>
        <ButtonNo type="button" onClick={handleCloseModal}>
          No
        </ButtonNo>
      </ButtonWrapper>
    </DeleteModal>
  );
};
