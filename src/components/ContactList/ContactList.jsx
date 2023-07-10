import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.contactList}>
      {filteredContacts?.map(({ name, id, phone }) => (
        <li key={id} className={css.contactListItem}>
          <span className={css.contactListItemText}>{`${name}: ${phone}`}</span>
          <button
            className={css.contactListItemBtn}
            type="button"
            onClick={() => dispatch(deleteContactThunk(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
