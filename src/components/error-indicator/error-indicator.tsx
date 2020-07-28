import React from 'react';

import './error-indicator.css';
import icon from './error.jpg';

const ErrorIndicator:React.FC = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" width="100"/>
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
