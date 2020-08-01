import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Pagination from './pagination';

import {connect} from 'react-redux';
import {handleClickByCartOfList} from '../../actions';

import './item-list.css';

import { Item, MainState, EmptyArray} from '../../types'

type HandleClickFun = (event: React.MouseEvent<HTMLButtonElement>,
    id: string, data: Array<Item> | EmptyArray) => void

type StateItemList = {
  items: Array<Item> | EmptyArray,
  currentItems: Array<Item> | EmptyArray,
  currentPage: number,
  itemsPerPage: number
}

type PropsItemList = {
  category: string,
  handleClickByCartOfList: HandleClickFun,
  data: Array<Item> | EmptyArray,
}

type Mapping = {
  [key: string]: string,
  price: string,
  weight: string,
  power: string,
}

interface Action {
  type: string,
  event: Object,
  id: string,
  data: Array<Item>
}

class ItemList extends Component<PropsItemList, StateItemList> {

  state = {
    items: [],
    currentItems: [],
    currentPage: 1,
    itemsPerPage: 3
  }
  private inputRef = React.createRef<HTMLSelectElement>()
  componentDidUpdate = (prevProps: PropsItemList): void => { //для чекбоксов
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

  paginate = (e: React.ChangeEvent<HTMLInputElement>,
        pageNumber: number): void => {
    const indexOfLastItem = pageNumber * this.state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
    const currentItems = this.state.items.slice(indexOfFirstItem, indexOfLastItem);

    this.setState({
      currentPage: pageNumber,
      currentItems,
    })
  }

  sortingByType = (e:React.ChangeEvent<HTMLInputElement>,
      goods: Array<Item>, type: string): void => {
    const sortGoods = goods.slice().sort((a, b) => {
      return a[type] - b[type];
    });
    this.setState({
      items: sortGoods
    });
    this.updatePagination();
  }

  renderSort = (type: string, name: string, items: Array<Item>) => {
    const mapping: Mapping = {
      price: 'по цене',
      weight: 'по весу',
      power: 'по мощности',
    }
    return (
      <li key={type}>
        <input onChange={(e) => this.sortingByType(e, items, type)}
        className="visually-hidden input-radio"
        type="radio" name={name} id={type}/>
        <label htmlFor={type}>{mapping[type]}</label>
      </li>
    )
  }

  renderGood = (item: Item, category: string, handleClickByCartOfList: HandleClickFun,
      data: Array<Item>): React.ReactNode => {
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
          <button name="byCart" onClick={(evt) => handleClickByCartOfList(evt, id, data)}
            className="buy-actions">Купить</button>
          <button name="byToBookmarks" onClick={(evt) => handleClickByCartOfList(evt, id, data)}
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
    const {category, handleClickByCartOfList, data} = this.props;

    const goods = currentItems.map((item) => { //
      return this.renderGood(item, category, handleClickByCartOfList, data)
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

const mapStateToProps = () => {
  return {}
}

const mapDispatchToprops: Object = (dispatch: (arg: Action) => MainState) => {
  return {
    handleClickByCartOfList: (event: Object, id: string, data: Array<Item>) =>
      dispatch(handleClickByCartOfList(event, id, data))
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(ItemList);


// <h2 className="visually-hidden">Список товаров</h2>
// defaultChecked
