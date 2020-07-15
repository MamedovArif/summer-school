import React, {Component} from 'react';

const withFunctionalList = (View, category) => {
  return class extends Component {
    state = {
      initialGoods: this.props.data,
      currentGoods: this.props.data,
      selectedBrand: ['bosch', 'metabo', 'makita', 'dewalt', 'hitachi'],
      powerSupply: 'electronetwork'
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
      const { handleCheckbox, sortingInitialGoods, handleRadio } = this;
      const { initialGoods, currentGoods} = this.state;
      return <View {...this.props} handleCheckbox={handleCheckbox} category={category}
        sortingInitialGoods={sortingInitialGoods} handleRadio={handleRadio}
        initialGoods={initialGoods} currentGoods={currentGoods}/>
    }
  }
}

export default withFunctionalList;
