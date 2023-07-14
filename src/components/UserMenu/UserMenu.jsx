import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { name, email } = user;

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <ul className={css.navList}>
      <li>
        <NavLink className={css.navLink} to="/contacts">
          Contacts
        </NavLink>
      </li>
      <li>
        <img src="" alt="" />
        <p>Welcome {name}</p>
        <p>{email}</p>
        <button type="button" onClick={handleLogOut}>
          Log out
        </button>
      </li>
    </ul>
  );
};
