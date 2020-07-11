import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {

  if (isLoggedIn) {
    return (
      <div>твои заказы</div>
    )
  }

  return <Redirect to='/login' />
}

export default SecretPage;
