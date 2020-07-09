import React, {Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import Pagination from './pagination.js';

import './item-list.css';

export default class ItemList extends Component {

  state = {
    items: [],
    currentItems: [],
    currentPage: 1,
    itemsPerPage: 3
  }

  componentDidMount() {
    this.updateItems();
    this.updatePagination();
  }

  componentDidUpdate(prevProps) { //для чекбоксов
    if (this.props.data !== prevProps.data) {
      this.updateItems();
      this.updatePagination();
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


  sortingByPrice = (goods) => {
    console.log(goods);
    const sortGoods = goods.slice().sort((a, b) => {
      return a.price - b.price;
    });
    console.log(sortGoods);
    this.setState({
      items: sortGoods
    });
    this.updatePagination();
  }

  sortingByPower = (goods) => {
    const sortGoods = goods.sort((a, b) => {
      return a.power - b.power;
    });
    this.setState({
      items: sortGoods
    });
    this.updatePagination();
  }

  sortingByWeight = (goods) => {
    const sortGoods = goods.sort((a, b) => {
      return a.weight - b.weight;
    });
    this.setState({
      items: sortGoods
    });
    this.updatePagination();
  }

  renderGood = (item) => {
    const {id, title, brand, model, isNew,
      initialPrice, price, url} = item;
    const sale = initialPrice ?
      <div className="discount">{initialPrice} ₽</div> :
      <div className="discount"></div>;
    const novelty = isNew ? <div className="flag flag-new">новинка</div> : null;
    return (
      <li key={id} className="layout-item-goods">
        {novelty}
        <div className="actions">
          <Link to="/buy" className="buy-actions">Купить</Link>
          <Link to="/bookmarks" className="bookmarks-actions">В закладки</Link>
        </div>
        <div className="image-container">
          <img className="image" src={url}
            alt={`${title} ${brand} ${model}`} width="218" height="170" />
        </div>
        <h3><Link className="title" to={`/catalog/tool/perforators/${id}`}>{title} {brand} {model}</Link></h3>
        {sale}
        <div className="price">{price} ₽</div>
      </li>
    )
  }


  render() {
    const {currentItems, items, itemsPerPage} = this.state; // className="button-current"
    console.log(items);
    console.log(currentItems);
    const goods = currentItems.map((item) =>{ //
      return this.renderGood(item)
     });
    return (
      <Fragment>
        <h2 className="visually-hidden">Список товаров</h2>
        <div className="right-catalog">
          <div className="sort">
             <p>сортировка:</p>
             <ul className="sort-container">
               <li>
                  <button onClick={() => {
                    this.sortingByPrice(items)
                  }}>по цене</button>
               </li>
               <li>
                  <button onClick={() => {
                    this.sortingByWeight(items)
                  }}>по весу</button>
               </li>
               <li>
                  <button onClick={() => {
                    this.sortingByPower(items)
                  }}>по мощности</button>
               </li>
             </ul>
          </div>
          <ul className="list-goods">
            {goods}
          </ul>
          <Pagination paginate={this.paginate} totalItems={items.length}
            itemsPerPage={itemsPerPage} />
        </div>
      </Fragment>
    )
  }
}
