import React from 'react';

import './error-indicator.css';
import icon from './error.jpg';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">ОШИБКА!</span>
      <span>
        Извините, что-то пошло не так
      </span>
      <span>
        (сейчас мы все исправим)
      </span>
    </div>
  );
};

export default ErrorIndicator;
