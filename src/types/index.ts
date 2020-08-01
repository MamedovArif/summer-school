import React from 'react';

type Item = {
  [key: string]: any,
  id: string,
  title: string,
  brand: string,
  model: string,
  isNew: boolean,
  initialPrice: number,
  price: number,
  powerSupply: 'electronetwork' | 'accumulator',
  isHit: boolean,
  power: number,
  numberOfIdle: number,
  weight: number,
  url: string,

  quantity?: number
  frequencyOfStrikes?: number,
  impactEnergy?: number,
  maxDiscDiameter?: number,
}

type EmptyArray = []

type User = {
  name: string,
  phone: string,
  email: string,
  password: string,
  cartList: Array<Item> | EmptyArray,
  bookmarksList: Array<Item> | EmptyArray,
}

type IsLoggedIn =  'entrance' | 'out' | 'error';
type IsRegistration = 'no' | 'error' | 'yes'


type MainState = {
  isLoggedIn: IsLoggedIn,
  isRegistration: IsRegistration,
  currentUser: User // !
  users: Array<User> | EmptyArray
}

type LinkOfArray = {
  title: string,
  path: string
}

export type {
  Item,
  MainState,
  EmptyArray,
  User,
  IsLoggedIn,
  IsRegistration,
  LinkOfArray,
}
