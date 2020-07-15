import React from 'react';
import ItemDetails, {Record} from '../item-details';
import { withService } from '../hoc';
import {wrapperInnerPage} from '../pages/wrapper-inner-page';

const AngleGrinderDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="модель" />
      <Record field="brand" label="бренд" />
      <Record field="initialPrice" label="первоначальная цена" />
      <Record field="price" label="цена" />
      <Record field="powerSupply" label="тип питания" />
      <Record field="power" label="мощность" />
      <Record field="weight" label="вес" />
      <Record field="numberOfIdle" label="макс. частота вращения диска" />
      <Record field="maxDiscDiameter" label="макс. диаметр диска" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (service) => {
  return {
    getData: service.getAngleGrinder
  }
}

const linksOfArray = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Инструмент', path: 'catalog/tool'},
  {title: 'Болгарки', path: 'catalog/tool/angle-grinders/'},
  {title: 'Болгарка', path: ''}
]

export default withService(mapMethodsToProps)(
  wrapperInnerPage(AngleGrinderDetails, linksOfArray));
