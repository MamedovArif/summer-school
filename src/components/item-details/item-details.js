import React, { Component } from 'react';

import ErrorButton from '../error-button';

import './item-details.css';

export const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export default class itemDetails extends Component {

  state = {
    item: null,
    image: null,
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
          item
        });
      });
  }

  render() {

    const { item } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { title, url } = item;
    return (
      <div className="item-details card">
        <img className="item-image"
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
          <ErrorButton />
        </div>
      </div>
    )
  }
}
