import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <AuthNav />
          <UserMenu />
        </ul>
      </nav>
    </header>
  );
};
