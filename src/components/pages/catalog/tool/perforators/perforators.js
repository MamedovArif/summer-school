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
    initialGoods: this.props.data,
    currentGoods: this.props.data,
    selectedBrand: ['bosch', 'metabo', 'makita', 'dewalt', 'hitachi'],
    powerSupply: 'electronetwork',

  }

  componentDidMount() {
    this.sortingInitialGoods();
  }

  handleRadio = (event) => {
    const currentNetworking = event.target.id;
    this.setState({
      powerSupply: currentNetworking
    })
  }

  sortingInitialGoods = () => {
    this.setState(({goods, initialGoods, powerSupply, selectedBrand}) => {
      const sortSupply = initialGoods.filter((item) => {
        return item.powerSupply === powerSupply
      })
      const sortBrand = sortSupply.filter((item) => {
        return selectedBrand.includes(item.brand.toLowerCase())
      })
      return {
        currentGoods: sortBrand
      }
    })
  }

  handleCheckbox = (evt) => {
    const name = evt.target.name;
    const checked = evt.target.checked;
    this.setState(({selectedBrand}) => {
      if (!checked) {
        const newSelectedBrand = selectedBrand.filter((item) => {
          return item !== name
        })
        return {
          selectedBrand: newSelectedBrand
        }
      } else {
        const addSelectedBrand = selectedBrand.concat(name);
        return {
          selectedBrand: addSelectedBrand
        }
      }
    });
  }

  render() {
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
          <Filters sortingInitialGoods={this.sortingInitialGoods}
            handleCheckbox={this.handleCheckbox} handleRadio={this.handleRadio}/>


          <ItemList data={this.state.currentGoods}/>

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
   withData(Perforators));

/*
const name = evt.target.name;
    const checked = evt.target.checked;
    this.setState(({currentGoods, initialGoods}) => {
      if (!checked) {
        const sortGoods = currentGoods.filter((item) => {
          return item.brand.toLowerCase() !== name
        })
        return {
          currentGoods: sortGoods
        }
      } else {
        const addGoods = initialGoods.filter((item) => {
          return item.brand.toLowerCase() === name
        })
        const addCheckboxGoods = currentGoods.concat(addGoods)
        return {
          currentGoods: addCheckboxGoods
        }
      }
    }); */


    // sortingPowerSupply(value) {
  //   this.setState(({goods}) => {
  //     const sortSupply = goods.filter((item) => {
  //       return item.powerSupply === value
  //     })
  //     return {
  //       goods: sortSupply
  //     }
  //   })
  // }
