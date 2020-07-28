import React, {Fragment, useState, useCallback, useEffect, useMemo} from 'react';

import Filters from './filters';
import AboutPerforator from './about-perforator';
import ItemList from '../item-list';

// import Spinner from '../spinner';
// import ErrorIndicator from '../error-indicator';

import { withData } from '../hoc';
import {wrapperInnerPage} from '../pages/wrapper-inner-page';


const useWithFunctionalList = (data) => {
  const [initialGoods] = useState(data);
  const [currentGoods, setCurrentGoods] = useState(data);
  const [selectedBrand, setSelectedBrand] = useState(['bosch', 'metabo',
      'makita', 'dewalt', 'hitachi']);
  const [powerSupply, setPowerSupply] = useState('electronetwork');

  const handleRadio = (event) => {
    const currentNetworking = event.target.id;
    setPowerSupply(currentNetworking)
  }

  const sortingInitialGoods = useCallback(() => {
    const sortSupply = initialGoods.filter((item) => {
      return item.powerSupply === powerSupply
    })
    const sortBrand = sortSupply.filter((item) => {
      return selectedBrand.includes(item.brand.toLowerCase())
    })
    setCurrentGoods(sortBrand)
  }, [powerSupply, selectedBrand, initialGoods])

  useEffect(() => {
    sortingInitialGoods()
  }, [sortingInitialGoods]);

  const handleCheckbox = (evt) => {
    const name = evt.target.name;
    const checked = evt.target.checked;
    if (!checked) {
      const newSelectedBrand = selectedBrand.filter((item) => {
        return item !== name
      })
      setSelectedBrand(newSelectedBrand)
    } else {
      const addSelectedBrand = selectedBrand.concat(name);
      setSelectedBrand(addSelectedBrand);
    }
  }

  return {
    handleCheckbox,
    sortingInitialGoods,
    handleRadio,
    initialGoods,
    currentGoods
  }
}

const List = (props) => {
  const { data, category } = props;

  const dataForHooks = useMemo(() => data, [data]);
  const object = useWithFunctionalList(dataForHooks);

  const {initialGoods, currentGoods,
    handleCheckbox, handleRadio, sortingInitialGoods} = object;

  const aboutPerforator = category === 'perforators' ?
    <AboutPerforator /> : null;

  return (
    <Fragment>
      <Filters sortingInitialGoods={sortingInitialGoods}
        data={initialGoods}
        handleCheckbox={handleCheckbox} handleRadio={handleRadio}/>

      <ItemList data={currentGoods} category={category}/>

      {aboutPerforator}
    </Fragment>
  )
}

const linksOfPerforators = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Инструмент', path: 'catalog/tool'},
  {title: 'Перфораторы', path: 'catalog/tool/perforators/'},
]

const linksOfAngleGrinders = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Инструмент', path: 'catalog/tool'},
  {title: 'Болгарки', path: 'catalog/tool/angle-grinders/'},
]

const PerforatorList = withData(
  wrapperInnerPage(List, linksOfPerforators));

const AngleGrinderList = withData(
  wrapperInnerPage(List, linksOfAngleGrinders));

export {PerforatorList, AngleGrinderList};
