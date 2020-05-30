import React from 'react';
import {
  TextField, Button, Typography, Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login = () => {
  const [state, setState] = React.useState({
    login: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const LoggedInUser = {
      login: state.login,
      password: state.password,
    };

    // eslint-disable-next-line no-console
    console.log(LoggedInUser);
  };

  return (
    <Container>
      <Typography variant="h2" component="h1">
        Login
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          name="login"
          value={state.login}
          onChange={handleChange}
          label="Login"
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
      <Typography>
        Dont have an account?
        <Link to="/register">Sign up</Link>
      </Typography>
    </Container>
  );
};

export default Login;
