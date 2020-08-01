import React from 'react';

import {wrapperInnerPage} from '../wrapper-inner-page';

import {LinkOfArray} from '../../../types';

const Company: React.FC = () => {
  return <div></div>
}

const linksOfArray: Array<LinkOfArray> = [
  {title: 'Компания', path: 'company'}
]

export default wrapperInnerPage(Company, linksOfArray);
