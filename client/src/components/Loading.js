import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

const Loading = () => {
  const isLoading = useSelector((state) => state.isLoading);

  if (isLoading) {
    return <CircularProgress className="margin-auto" />;
  } return null;
};

export default Loading;
