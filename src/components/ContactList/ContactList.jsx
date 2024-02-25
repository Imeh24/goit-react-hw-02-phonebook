import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ filterContact, deleteContact }) => {
  const filteredContacts = filterContact();

  return (
    <ul>
      {filteredContacts.map(filteredContact => (
        <ContactListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
