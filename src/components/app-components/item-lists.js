import React, {Fragment} from 'react';

import Filters from './filters';
import AboutPerforator from './about-perforator';
import ItemList from '../item-list';

import { withData, withFunctionalList } from '../hoc';
import {wrapperInnerPage} from '../pages/wrapper-inner-page';

const List = (props) => {

  const {initialGoods, currentGoods, category,
    handleCheckbox, handleRadio, sortingInitialGoods} = props;

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
  wrapperInnerPage(withFunctionalList(List, 'perforators'), linksOfPerforators));

const AngleGrinderList = withData(
  wrapperInnerPage(withFunctionalList(List, 'angle-grinders'), linksOfAngleGrinders));

export {PerforatorList, AngleGrinderList};
