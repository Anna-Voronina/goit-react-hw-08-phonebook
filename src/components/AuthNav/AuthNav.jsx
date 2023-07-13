import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <li>
        <NavLink to="/register">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log in</NavLink>
      </li>
    </>
  );
};
