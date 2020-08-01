import React from 'react';

import {wrapperInnerPage} from '../wrapper-inner-page';

import {LinkOfArray} from '../../../types';

const News: React.FC = () => {
  return <div></div>
}

const linksOfArray: Array<LinkOfArray> = [
  {title: 'Новости', path: 'news'}
]

export default wrapperInnerPage(News, linksOfArray);
