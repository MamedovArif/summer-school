import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Pagination from './pagination.js';
import ReactDOM from 'react-dom';
import {withAppState} from '../hoc';

import './item-list.css';

class ItemList extends Component {

  state = {
    items: [],
    currentItems: [],
    currentPage: 1,
    itemsPerPage: 3
  }

  componentDidUpdate = (prevProps) => { //для чекбоксов
    const itemList = ReactDOM.findDOMNode(this);
    if (this.props.data !== prevProps.data) {

      const sorts = itemList.querySelectorAll('input[name="sorting"]');
      for (let sort of sorts) {
        sort.style = "border: none; border-bottom: 1.5px dotted #ee3643;"
      }

      this.updateItems();
      this.updatePagination(); //успевает среагировать?
    }
  }

  updateItems = () => {
    const items = this.props.data;
    this.setState({
      items
    });
  }

  updatePagination = () => {
    const {currentPage, itemsPerPage} = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    this.setState((state) => {
      const currentItems = state.items.slice(indexOfFirstItem, indexOfLastItem);
      return {
        currentItems
      }
    })
  }

  paginate = (pageNumber) => {
    const indexOfLastItem = pageNumber * this.state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
    const currentItems = this.state.items.slice(indexOfFirstItem, indexOfLastItem);

    this.setState({
      currentPage: pageNumber,
      currentItems,
    })
  }


  sortingByType = (goods, type) => {
    const sortGoods = goods.slice().sort((a, b) => {
      return a[type] - b[type];
    });
    this.setState({
      items: sortGoods
    });
    this.updatePagination();
  }

  renderSort = (type, name, items) => {
    const mapping = {
      price: 'по цене',
      weight: 'по весу',
      power: 'по мощности',
    }
    return (
      <li key={type}>
        <input onChange={() => this.sortingByType(items, type)}
        className="visually-hidden input-radio"
        type="radio" name={name} id={type}/>
        <label htmlFor={type}>{mapping[type]}</label>
      </li>
    )
  }

  renderGood = (item, category, funcs) => {
    const {id, title, brand, model, isNew,
      initialPrice, price, url} = item;
    const {correctCounterCart, correctCounterBookmarks} = funcs;
    const sale = initialPrice ?
      <div className="discount">{initialPrice} ₽</div> :
      <div className="discount"></div>;
    const novelty = isNew ? <div className="flag flag-new">новинка</div> : null;
    return (
      <li key={id} className="layout-item-goods">
        {novelty}
        <div className="actions">
          <button onClick={() => correctCounterCart(id)}
            className="buy-actions">Купить</button>
          <button onClick={() => correctCounterBookmarks(id)}
            className="bookmarks-actions">В закладки</button>
        </div>
        <div className="image-container">
          <img className="image" src={url}
            alt={`${title} ${brand} ${model}`} width="218" height="170" />
        </div>
        <h3>
          <Link className="title"
            to={`/catalog/tool/${category}/${id}`}>
            {title} {brand} {model}
          </Link>
        </h3>
        {sale}
        <div className="price">{price} ₽</div>
      </li>
    )
  }


  render() {
    const {currentItems, items, itemsPerPage} = this.state;
    const {category, appState} = this.props;

    const goods = currentItems.map((item) => { //
      return this.renderGood(item, category, appState.funcs)
     });

    const types = ['price', 'weight', 'power'];
    const inputs = types.map((type) => {
      return this.renderSort(type, 'sorting', items);
    })

    return (
      <div className="right-catalog">
        <div className="sort">
          <p>сортировка:</p>
          <ul className="sort-container">
            {inputs}
          </ul>
        </div>
        <ul className="list-goods">
          {goods}
        </ul>
        <Pagination paginate={this.paginate} totalItems={items.length}
          itemsPerPage={itemsPerPage} />
      </div>
    )
  }
}

export default withAppState(ItemList);


// <h2 className="visually-hidden">Список товаров</h2>
// defaultChecked
