import React, { Component } from 'react';

import Spinner from '../spinner';

import './item-details.css';

export const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  )
}

export default class itemDetails extends Component {

  state = {
    item: null,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          loading: false
        });
      });
  }

  render() {
    const { item, loading } = this.state;
    if (loading) {
      return <Spinner />;
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
            {React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
