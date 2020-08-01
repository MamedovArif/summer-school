import React from 'react';

import './pagination.css';

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="pagination">
      <ul className="pagination-list">
         {pageNumbers.map((item) => {
            const defaultChecked = item === 1 ? true : false;
            return (
              <li key={item} className="pagination-item">
                <input onChange={() => paginate(item)} defaultChecked={defaultChecked}
                className="visually-hidden input-radio"
                type="radio" name="service" id={item}/>
                <label htmlFor={item}>{item}</label>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

export default Pagination;
