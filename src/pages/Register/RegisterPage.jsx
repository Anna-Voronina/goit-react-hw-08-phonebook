import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const userMap = { name: setName, email: setEmail, password: setPassword };

  const handleInputChange = ({ target: { name, value } }) => {
    userMap[name](value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signUpThunk({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
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
      <button type="submit">Sign up</button>
    </form>
  );
};

export default RegisterPage;
