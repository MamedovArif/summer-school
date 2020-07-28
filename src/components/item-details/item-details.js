import React, { useState, useEffect, useMemo } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-details.css';

export const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  )
}

const useItemDetails = ({itemId, getData} ) => {
  const initialState = useMemo(() => {
    return {
      item: null,
      loading: true,
      error: null
    }
  }, [])

  const [dataState, setDataState] = useState(initialState);

  useEffect(() => {
    setDataState(initialState)
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        setDataState({
          item,
          loading: false,
          error: null
        })
      })
      .catch((error) => {
        setDataState({
          item: null,
          loading: false,
          error: error
        })
      })
  }, [itemId, getData, initialState]);

  return dataState;
}

const ItemDetails = (props) => {
  const object = useMemo(() => {
    const {itemId, getData} = props;
    return {
      itemId,
      getData
    }
  }, [props]);

  const {item, loading, error} = useItemDetails(object)

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />
  }

  const { title, url } = item;
  return (
    <div className="item-details">
      <img className="item-image" width="450"
        src={url}
        alt="item"/>

      <div className="card-body">
        <h4>{title}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(props.children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default ItemDetails;

