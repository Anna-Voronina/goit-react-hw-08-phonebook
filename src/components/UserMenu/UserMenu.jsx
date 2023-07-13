import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        <img src="" alt="" />
        <p>Welcome</p>
        <button type="button" onClick={handleLogOut}>
          Log out
        </button>
      </li>
    </>
  );
};
