import React from 'react';
import {
  TextField, Button, Typography, Container,
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../actions/authActions';

const Register = () => {
  const errors = useSelector((state) => state.errors);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
    password2: '',
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

    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
      password2: state.password2,
    };

    dispatch(registerUser(newUser, history));
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
        {errors.name}
        <TextField
          name="email"
          value={state.email}
          onChange={handleChange}
          label="E-mail"
          variant="outlined"
        />
        {errors.email}
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
        <TextField
          name="password2"
          value={state.password2}
          onChange={handleChange}
          type="password"
          label="Repeat password"
          variant="outlined"
          autoComplete="on"
        />
        {errors.password2}
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
        <Link to="/login" className="link">
          Sign in
        </Link>
      </Typography>
    </Container>
  );
};

export default Register;
