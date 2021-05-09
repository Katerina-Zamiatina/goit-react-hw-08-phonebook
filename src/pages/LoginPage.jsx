import { useDispatch } from 'react-redux';
import { useState } from 'react';

function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch();
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} autocomplete="off">
        <label htmlFor="">
          E-mail{' '}
          <input
            type="email"
            name="email"
            value={email}
            onCange={handleChange}
          />
        </label>
        <label htmlFor="">
          Password{' '}
          <input
            type="password"
            name="password"
            value={password}
            onCange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
