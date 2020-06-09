import React, { useState } from 'react';
import {
  TextField, Button, Typography, Container,
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/authActions';


const Login = () => {
  const errors = useSelector((state) => state.errors);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    email: '',
    password: '',
  });

  if (isAuthenticated) {
    history.push('/');
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: state.email,
      password: state.password,
    };

    dispatch(loginUser(user));
  };

  return (
    <Container>
      <Typography variant="h2" component="h1" className="text-center">
        Login
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          name="email"
          value={state.email}
          onChange={handleChange}
          label="Email"
          variant="outlined"
        />
        {errors.email}
        {errors.emailnotfound}
        <TextField
          name="password"
          value={state.password}
          onChange={handleChange}
          type="password"
          label="Password"
          variant="outlined"
          autoComplete="on"
        />
        {errors.password}
        {errors.passwordincorrect}
        <Button
          variant="contained"
          size="large"
          color="secondary"
          type="submit"
        >
          Sign in
        </Button>
      </form>
      <Typography className="helper">
        Dont have an account?
        <Link to="/register" className="link">
          Sign up
        </Link>
      </Typography>
    </Container>
  );
};

export default Login;
