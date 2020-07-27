import React, {useContext} from 'react';
import ItemDetails, {Record} from '../item-details';
import {wrapperInnerPage} from '../pages/wrapper-inner-page';
import {ServiceContext} from '../../index.js';

const PerforatorDetails = (props) => {
  const service = useContext(ServiceContext);

  return (
    <ItemDetails {...props} getData={service.getPerforator}>
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
