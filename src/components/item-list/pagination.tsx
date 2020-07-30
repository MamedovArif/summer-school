import React from 'react';

import './pagination.css';

type PropsPagination = {
  itemsPerPage: number,
  totalItems: number,
  paginate: (e: React.ChangeEvent<HTMLInputElement>, pageNumber: number) => void
}

const Pagination = ({itemsPerPage, totalItems, paginate}: PropsPagination) => {
  const pageNumbers: Array<number> = [];

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
                <input onChange={(e) => paginate(e, item)} defaultChecked={defaultChecked}
                className="visually-hidden input-radio"
                type="radio" name="service" id={item.toString()}/>
                <label htmlFor={item.toString()}>{item}</label>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

export default Pagination;
