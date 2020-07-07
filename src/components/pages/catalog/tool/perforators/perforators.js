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
    powerSupply: 'electronetwork',
    initialGoods: this.props.data,
    goods: this.props.data
  }

  // componentDidMount() {
  //   this.sortingPowerSupply(this.state.powerSupply);
  // }

  handleRadio = (event) => {
    const currentNetworking = event.target.id;
    console.log(currentNetworking);
    this.setState({
      powerSupply: currentNetworking
    })
    console.log(this.state.powerSupply);
    //this.sortingPowerSupply(this.state.powerSupply);
  }

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

  handleCheckbox = (evt) => {
    const name = evt.target.name;
    const checked = evt.target.checked;
    this.setState(({goods, initialGoods}) => {
      if (!checked) {
        const sortGoods = goods.filter((item) => {
          return item.brand.toLowerCase() !== name
        })
        return {
          goods: sortGoods
        }
      } else {
        const addGoods = initialGoods.filter((item) => {
          return item.brand.toLowerCase() === name
        })
        const addCheckboxGoods = goods.concat(addGoods)
        return {
          goods: addCheckboxGoods
        }
      }
    });
    //handleRadio(this.state.powerSupply)
  }


  render() {
    // if (this.state.powerSupply === 'electronetwork') {
    //   this.setState(({goods}) => {
    //     const sortSupply = goods.filter((item) => {
    //       return item.powerSupply === 'electronetwork'
    //     })
    //     return {
    //       goods: sortSupply
    //     }
    //   })
    // } else {
    //   this.setState(({goods}) => {
    //     const sortSupply = goods.filter((item) => {
    //       return item.powerSupply === 'accumulator'
    //     })
    //     return {
    //       goods: sortSupply
    //     }
    //   })
    // }
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
          <Filters
            handleCheckbox={this.handleCheckbox} handleRadio={this.handleRadio}/>

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
