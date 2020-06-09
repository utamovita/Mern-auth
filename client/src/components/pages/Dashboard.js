import React from 'react';
import { Container, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };

  return (
    <Container>
      <Typography variant="h4" component="h1">
        Hello,
        {' '}
        <strong>{user}</strong>
      </Typography>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handleLogOut}
      >
        Log out
      </Button>
      <Typography variant="h5" component="h3">
        This is very secret page, you can enter it only whenever you are logged
        in.
        <br />
        Who knows, maybe someday there will be some important informations too?
      </Typography>
    </Container>
  );
};

export default Dashboard;
