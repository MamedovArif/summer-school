import React, { useState } from 'react';

import './error-button.css';

const ErrorButton = () => {
  const [renderError, setRenderError] = useState(false);
  if (renderError) {
    renderError.bh = 'hkgf';
  }

  return (
    <button onClick={() => setRenderError(true)}
      className="credit-button" to="/contacts">
      Отправить заявку
    </button>
  );
}

export default ErrorButton;
