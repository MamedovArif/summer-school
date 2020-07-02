import React from 'react';

const LoginPage = ({isLoggedIn, onLogin}) => {

  if (isLoggedIn) {
    return (
      <div>secret</div>
    )
  }

  return <p>no secret</p>
}

export default SecretPage;
