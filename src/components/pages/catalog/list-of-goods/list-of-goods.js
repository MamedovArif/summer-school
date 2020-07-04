import React, {Fragment, Component} from 'react';
import { Link } from 'react-router-dom';

import './list-of-goods.css';

export default class ListOfGoods extends Component {

  state = {
    goods: [],
  }

  componentDidMount() {
    const {service} = this.props;
    service.getAllPerforators()
      .then((goods) => {
        this.setState({
          goods: goods
        })
      })
  }

  renderGood(good) {
    const {id, title, brand, model, isNew,
      initialPrice, price, url} = good;
    const sale = initialPrice ?
      <div className="discount">{initialPrice} P.</div> :
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
        <h3><Link className="title" to="/catalog/8">{title} {brand} {model}</Link></h3>
        {sale}
        <div className="price">{price} P.</div>
      </li>
    )
  }


  render() {
    console.log(this.state.goods);
    const {goods} = this.state;
    const items = goods.map(this.renderGood);
    return (
      <Fragment>
        <h2 className="visually-hidden">Список товаров</h2>
        <div className="right-catalog">
          <div className="sort">
             <p>сортировка:</p>
             <ul className="sort-container">
               <li>
                  <button className="button-current">по цене</button>
               </li>
               <li>
                  <button>по типу</button>
               </li>
               <li>
                  <button>по функционалу</button>
               </li>
             </ul>
             <div className="up-down">
               <button className="up current-up">
                 <span className="visually-hidden">перелистать наверх</span>
                 <svg className="svg-up" xmlns="http://www.w3.org/2000/svg"
                 width="11" height="10" viewBox="0 0 11 10"><path d="M5.5 0L0 10h11z"/>
                 </svg>
               </button>
               <button className="down">
                 <span className="visually-hidden">перелистать вниз</span>
                 <svg className="svg-down" xmlns="http://www.w3.org/2000/svg"
                 width="11" height="10" viewBox="0 0 11 10"><path d="M5.5 0L0 10h11z"/>
                 </svg>
               </button>
             </div>
          </div>
          <ul className="list-goods">
            {items}
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
