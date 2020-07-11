import React, {Component, Fragment} from 'react';

import Filters from '../filters';
import ItemList from '../../../../item-list';
import { withService, withData } from '../../../../hoc';
import {wrapperInnerPage} from '../../../wrapper-inner-page';

class AngleGrinders extends Component {

  state = {
    initialGoods: this.props.data,
    currentGoods: this.props.data,
    selectedBrand: ['bosch', 'metabo', 'makita', 'dewalt', 'hitachi'],
    powerSupply: 'electronetwork',
    category: 'angle-grinders'
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
    const {initialGoods, currentGoods, category} = this.state;
    return (
      <Fragment>
        <Filters sortingInitialGoods={this.sortingInitialGoods}
          data={initialGoods}
          handleCheckbox={this.handleCheckbox} handleRadio={this.handleRadio}/>

        <ItemList data={currentGoods} category={category}/>

      </Fragment>
    )
  }
}

const mapAngleGrindersMethodsToProps = (service) => {
  return {
    getData: service.getAllAngleGrinders
  }
}

const linksOfArray = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Инструмент', path: 'catalog/tool'},
  {title: 'Болгарки', path: 'catalog/tool/angle-grinders/'},
]


export default withService(mapAngleGrindersMethodsToProps)(
  withData(wrapperInnerPage(AngleGrinders, linksOfArray)));

