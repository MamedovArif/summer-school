import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Filters from '../filters';
import AboutPerforator from './about-perforator';
import ItemList from '../../../../item-list';
import { withService, withData } from '../../../../hoc';
//import {PerforatorList} from '../../../../app-components';

import './perforators.css';

class Perforators extends Component {

  state = {
    selectedManufacturers: [
      'BOSCH', 'INTERSKOL', 'MAKITA', 'DEWALT', 'HITACHI'
    ],
    powerSupply: 'electronetwork',
    goods: this.props.data
  }

  handleCheckbox = (evt) => {
    console.log('connect')
    const name = evt.target.name;
    console.log(name);
    this.setState(({goods}) => {
      const sortGoods = goods.filter((item) => {
        return item.brand.toLowerCase() !== name
      })
      console.log(sortGoods);
      return {
        goods: sortGoods
      }
    })
  }


  render() {
    console.log(this.props);
    return (
      <main className="inner-page">
        <div className="inner-page-container">
          <ul className="breadcrumbs">
            <li>
              <Link className="icon-home" to="/">
                <span className="visually-hidden">Главная</span>
              </Link>
            </li>
            <li>
              <Link to="/catalog/">Каталог</Link>
            </li>
            <li><Link to="/catalog/tool">Инструмент</Link></li>
            <li><span>перфораторы</span></li>
          </ul>
          <div className="catalogh1">
            <h1>Интрументы</h1>
          </div>
          <Filters handleCheckbox={this.handleCheckbox}/>

          <ItemList data={this.state.goods}/>

          <AboutPerforator />
         </div>
      </main>
    )
  }
}

const mapPerforatorMethodsToProps = (service) => {
  return {
    getData: service.getAllPerforators
  }
}

export default withService(mapPerforatorMethodsToProps)(
   withData(Perforators))
