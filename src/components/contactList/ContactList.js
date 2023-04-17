import { ContactItem } from 'components/contactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/contacts/selectors';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const ContactList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);

  return (
    <List>
      {filtredContacts.map(({ id, name, number }) => {
        const randomColor = getRandomHexColor();
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            randomColor={randomColor}
          />
        );
      })}
    </List>
  );
};
