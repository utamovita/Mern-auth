import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button, Typography } from '@material-ui/core';

const Dashboard = () => {
  const history = useHistory();

  const handleLogOut = () => {
    history.push('/');
  };

  return (
    <Container>
      <Typography variant="h4" component="h1">
        Hello, your email is:
      </Typography>
      <Button size="large" variant="contained" color="primary" onClick={handleLogOut}>
        Log out
      </Button>
      <Typography variant="h5" component="h3">
        This is very secret page, you can enter it only whenever you are logged in.
        <br />
        Who knows, maybe someday there will be some important informations too?
      </Typography>
    </Container>
  );
};

export default Dashboard;
