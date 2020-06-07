import React from 'react';
import {
  TextField, Button, Typography, Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Register = () => {
  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const registeredUser = {
      name: state.name,
      email: state.email,
      password: state.password,
      password2: state.password2,
    };

    setState({
      name: '',
      email: '',
      password: '',
      password2: '',
    });

    // eslint-disable-next-line no-console
    console.log(registeredUser);
  };

  return (
    <Container>
      <Typography variant="h2" component="h1" className="text-center">
        Register
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          name="name"
          value={state.name}
          onChange={handleChange}
          label="Name"
          variant="outlined"
        />
        <TextField
          name="email"
          value={state.email}
          onChange={handleChange}
          label="E-mail"
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
        <TextField
          name="password2"
          value={state.password2}
          onChange={handleChange}
          type="password"
          label="Repeat password"
          variant="outlined"
          autoComplete="on"
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Sign in
        </Button>
      </form>
      <Typography className="helper">
        Already have an account?
        <Link to="/" className="link">
          Sign in
        </Link>
      </Typography>
    </Container>
  );
};

export default Register;
