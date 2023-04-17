import { ContactItem } from 'components/contactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <List>
      {filtredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
