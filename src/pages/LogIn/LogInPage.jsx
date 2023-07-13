import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMap = { email: setEmail, password: setPassword };

  const handleInputChange = ({ target: { name, value } }) => {
    userMap[name](value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logInThunk({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginPage;
