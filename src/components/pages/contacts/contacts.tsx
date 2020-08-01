import React from 'react';

import {wrapperInnerPage} from '../wrapper-inner-page';

import {LinkOfArray} from '../../../types';

const Contacts: React.FC = () => {
  return <div></div>
}

const linksOfArray: Array<LinkOfArray> = [
  {title: 'Контакты', path: 'contacts'}
]

export default wrapperInnerPage(Contacts, linksOfArray);
