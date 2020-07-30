import React, { useState, useEffect, useMemo } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-details.css';

interface Item {
  [key: string]: any;
  id: string;
  title: string;
  brand: string;
  model: string;
  isNew: boolean;
  initialPrice: number;
  price: number;
  powerSupply: string;
  isHit: boolean;
  power: number;
  numberOfIdle: number;
  weight: number;
  url: string;
  frequencyOfStrikes?: number;
  impactEnergy?: number;
  maxDiscDiameter?: number;
}

type HooksState = {
  item: Item | null,
  loading: boolean,
  error: Object | null
}

type PropsItemDetails = {
  getData: (id: string) => Promise<Item | null>,
  itemId: string,
  children?: any //React.ReactChildren ////JSX.Element | JSX.Element[]
}

interface PropsRecord {
  item: Item
  field: string
  label: string
}

export const Record = ({item, field, label}: PropsRecord) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  )
}

const useItemDetails = ({itemId, getData}: PropsItemDetails): HooksState => {
  const initialState:HooksState = useMemo(() => {
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

const ItemDetails = (props: PropsItemDetails) => {
  const object:PropsItemDetails = useMemo(() => {
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

  let title: string | undefined;
  let url: string | undefined;

  if (item) {
    title = item.title;
    url = item.url
  }

  return (
    <div className="item-details">
      <img className="item-image" width="450"
        src={url}
        alt="item"/>

      <div className="card-body">
        <h4>{title}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(props.children, (child: React.ReactElement) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default ItemDetails;

