import React from 'react';
import {
  TextField, Button, Typography, Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions';

const Login = () => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

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
        <TextField
          name="password"
          value={state.password}
          onChange={handleChange}
          type="password"
          label="Password"
          variant="outlined"
          autoComplete="on"
        />
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
        <Link to="/register" className="link">Sign up</Link>
      </Typography>
    </Container>
  );
};

export default Login;
