import React, {useContext} from 'react';
import ItemDetails, {Record} from '../item-details';
import {wrapperInnerPage} from '../pages/wrapper-inner-page';
import {ServiceContext} from '../../index.js';

import { Item } from '../../types'

type PropsAngleGrinderDetails = {
  itemId: string
}

const AngleGrinderDetails:React.FC<PropsAngleGrinderDetails> = (props) => {
  const service = useContext(ServiceContext);
  const getAngleGrinder: Promise<Item> = service.getAngleGrinder

  return (
    <ItemDetails {...props} getData={getAngleGrinder}>
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

const linksOfArray = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Инструмент', path: 'catalog/tool'},
  {title: 'Болгарки', path: 'catalog/tool/angle-grinders/'},
  {title: 'Болгарка', path: ''}
]

export default wrapperInnerPage(AngleGrinderDetails, linksOfArray);
