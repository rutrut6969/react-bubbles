import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = () => {
  const { push } = useHistory();
  const [creds, setCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', creds)
      .then((res) => {
        console.log({ res });
        localStorage.setItem('token', JSON.stringify(res.data.payload));
        push('/bubbles');
      });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <form onSubmit={login}>
        <h4>Welcome To The Bubbles App!</h4>
        <h6>Please Login!</h6>
        <label htmlFor='username'>
          Username:
          <input
            type='text'
            name='username'
            value={creds.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password:
          <input
            type='password'
            name='password'
            value={creds.password}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
