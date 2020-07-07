import React, {Fragment, Component} from 'react';
import { Link } from 'react-router-dom';

import './item-list.css';



export default class ItemList extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    const items = this.props.data;
    console.log(items);
    this.setState({
      items
    })
  }

  componentDidUpdate() {

  }

  sortingByPrice = (goods) => {
    const sortGoods = goods.sort((a, b) => {
      return a.price - b.price;
    })
    this.setState({
      items: sortGoods
    })
  }

  sortingByPower = (goods) => {
    const sortGoods = goods.sort((a, b) => {
      return a.power - b.power;
    })
    this.setState({
      items: sortGoods
    })
  }

  sortingByWeight = (goods) => {
    const sortGoods = goods.sort((a, b) => {
      return a.weight - b.weight;
    })
    this.setState({
      items: sortGoods
    })
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
    const {items} = this.state;
    console.log(items); // className="button-current"
    const goods = items.map((item) =>{
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
          <div className="pagination">
          <ul className="pagination-list">
             <li className="pagination-item pagination-item-current"><button>1</button></li>
             <li className="pagination-item"><button>2</button></li>
             <li className="pagination-item"><button>3</button></li>
          </ul>
          <button className="next">Следующая</button>
          </div>
        </div>
      </Fragment>
    )
  }
}
