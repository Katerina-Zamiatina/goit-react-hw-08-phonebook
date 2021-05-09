import { useDispatch } from 'react-redux';
import { useState } from 'react';

function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch();
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
        <label>
          Name
          <input type="name" name="name" value={name} onCange={handleChange} />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onCange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onCange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
