import React, {useContext} from 'react';
import ItemDetails, {Record} from '../item-details';
import {wrapperInnerPage} from '../pages/wrapper-inner-page';
import {ServiceContext} from '../../index.js';

import { Item } from '../../types'

type PropsPerforatorDetails = {
  itemId: string
}

const PerforatorDetails:React.FC<PropsPerforatorDetails> = (props) => {
  const service = useContext(ServiceContext);
  const getPerforator: Promise<Item> = service.getPerforator

  return (
    <ItemDetails {...props} getData={getPerforator}>
      <Record field="model" label="модель" />
      <Record field="brand" label="бренд" />
      <Record field="initialPrice" label="первоначальная цена" />
      <Record field="price" label="цена" />
      <Record field="powerSupply" label="тип питания" />
      <Record field="power" label="мощность" />
      <Record field="weight" label="вес" />
      <Record field="numberOfIdle" label="макс. частота вращения диска" />
      <Record field="impactEnergy" label="энергия удара" />
      <Record field="frequencyOfStrikes" label="частота ударов" />
    </ItemDetails>
  )
}

const linksOfArray = [
  {title: 'Каталог', path: 'catalog/'},
  {title: 'Инструмент', path: 'catalog/tool'},
  {title: 'Перфораторы', path: 'catalog/tool/perforators/'},
  {title: 'Перфоратор', path: ''}
]

export default wrapperInnerPage(PerforatorDetails, linksOfArray);
