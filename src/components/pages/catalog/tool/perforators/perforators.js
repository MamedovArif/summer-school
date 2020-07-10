import React, {Component, Fragment} from 'react';

import Filters from '../filters';
import AboutPerforator from './about-perforator';
import ItemList from '../../../../item-list';
import { withService, withData } from '../../../../hoc';
import {wrapperInnerPage} from '../../../wrapper-inner-page';
//import {PerforatorList} from '../../../../app-components';

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
    const {initialGoods, currentGoods} = this.state;
    return (
      <Fragment>
        <Filters sortingInitialGoods={this.sortingInitialGoods}
          data={initialGoods}
          handleCheckbox={this.handleCheckbox} handleRadio={this.handleRadio}/>

        <ItemList data={currentGoods}/>

        <AboutPerforator />
      </Fragment>
    )
  }
}

const mapPerforatorMethodsToProps = (service) => {
  return {
    getData: service.getAllPerforators
  }
}

const linksOfArray = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Инструмент', path: 'catalog/tool'},
  {title: 'Перфораторы', path: 'catalog/tool/perforators/'},
]


export default withService(mapPerforatorMethodsToProps)(
  withData(wrapperInnerPage(Perforators, linksOfArray)));

