import React from 'react';

const SecretPage = ({isLoggedIn}) => {

  if (isLoggedIn) {
    return (
      <div>secret</div>
    )
  }

  return <p>no secret</p>
}

export default SecretPage;
