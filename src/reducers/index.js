const initialState = {
  isLoggedIn: 'out',
  isRegistration: 'no',
  currentUser: {}, // !
  users: [
    {
      name: 'Robert',
      phone: '+7 786 ...',
      email: 'asd',
      password: 'asdi',
      cartList: [
      {
      id: 'per0',
      title: 'Перфоратор',
      brand: 'MAKITA',
      model: 'HR2470',
      isNew: true,
      initialPrice: 7477,
      price: 6950,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 780,
      numberOfIdle: 1100,
      frequencyOfStrikes: 4500,
      impactEnergy: 2.7,
      weight: 2.6,
      url: `https://avatars.mds.yandex.net/get-mpic/1614201/img_id7059479335064729118.jpeg/9hq`,
      quantity: 5
    },

    {
      id: 'per1',
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'GBH 240',
      isNew: false,
      initialPrice: 6998,
      price: 5950,
      powerSupply: 'electronetwork',
      isHit: false,
      power: 790,
      numberOfIdle: 930,
      frequencyOfStrikes: 4500,
      impactEnergy: 2.8,
      weight: 2.6,
      url: `https://avatars.mds.yandex.net/get-mpic/1808939/img_id6111417658335389636.jpeg/9hq`,
      quantity: 1
    }
    ],
      bookmarksList: [
        ],
    }
  ]
}

const reducer = (state = initialState, action) => {
  const {users, currentUser, isLoggedIn} = state;
  const user = users.find((person) => person.email === action.email);
  let cartList;
  if (currentUser) {
    cartList = currentUser.cartList
  }
  let behavior;
  if (action.event) {
    behavior = action.event.target.name;
  }

  switch (action.type) {
    case 'REGISTRATION_PROCESS':
      if (user) {
        return {
          ...state,
          isRegistration: 'error'
        }
      }

      const newUser = {
        name: action.name,
        phone: action.phone,
        email: action.email,
        password: action.password,
        cartList: [],
        bookmarksList: [],
      };
      const updatedUsers = [].concat(users.slice(), newUser);
      return {
        ...state,
        isLoggedIn: 'entrance',
        isRegistration: 'yes',
        currentUser: newUser,
        users: updatedUsers
      }

    case 'LOGIN_PROCESS':
      if (!user) {
        return {
          ...state,
          isLoggedIn: 'error'
        }
      } else if (user.password === action.password) {
        return {
          ...state,
          isLoggedIn: 'entrance',
          isRegistration: 'yes',
          currentUser: user,
        }
      } else {
        return {
          ...state,
          isLoggedIn: 'error'
        }
      }

    case 'LOGOUT_PROCESS':
      if (action.event.target.textContent === 'нет') {
        return {
          ...state
        }
      }
      return {
        ...state,
        currentUser: {},
        isLoggedIn: 'out',
        isRegistration: 'no',
      }

    case 'PROCESS_COUNTER_QUANTITY':
      const index = cartList.findIndex((item) => {
        return item.id === action.id
      })
      const newCartList = cartList.slice();

      if (behavior === 'add') {
        newCartList[index].quantity += 1
      } else {
        if (newCartList[index].quantity > 1) {
          newCartList[index].quantity -= 1
        } else {
          newCartList.splice(index, 1)
        }
      }
      return {
        ...state,
        currentUser: Object.assign({}, currentUser, {cartList: newCartList})
      }

    case 'DELETE_FROM_NECCESSARY_LIST':
      const dispatcher = {
        cart: 'cartList',
        bookmarks: 'bookmarksList'
      }
      const list = currentUser[dispatcher[behavior]];
      const indexDelete = list.findIndex((item) => item.id === action.id);
      if (indexDelete === -1) {
        throw new Error('cart-page см button "удалить из корзины"')
      }
      const newList = [].concat(list.slice(0, indexDelete), list.slice(indexDelete + 1));
      return {
        ...state,
        currentUser: Object.assign({}, currentUser, {[dispatcher[behavior]]: newList})
      }

    case 'MOVE_TO_NECESSARY_LIST':
      const dispatcherByList = {
        moveFromBookmarks: 'bookmarksList',
        moveFromCart: 'cartList',
      }

      const fromList = currentUser[dispatcherByList[behavior]];
      const values = Object.values(dispatcherByList);
      const acceptor = values.find((item) => item !== dispatcherByList[behavior]);
      const toList = currentUser[acceptor];

      const indexMove = fromList.findIndex((item) => item.id === action.id);
      if (indexMove === -1) {
        throw new Error('')
      }
      const relocatableItem = fromList[indexMove];
      const isRepeatGood = toList.findIndex((item) => {
        return item.id === action.id
      })
      let newToList = [];
      if (isRepeatGood === -1) {
        newToList = [].concat(toList, relocatableItem);
      } else {
        newToList = [].concat(toList);
      }
      const newFromList = [].concat(fromList.slice(0, indexMove), fromList.slice(indexMove + 1));

      return {
        ...state,
        currentUser: Object.assign({}, currentUser,
          {[dispatcherByList[behavior]]: newFromList}, {[acceptor]: newToList})
      }

    case 'HANDLE_CLICK_BY_CART_OF_LIST':
      const dispatcherByTypeButton = {
        byCart: 'cartList',
        byToBookmarks: 'bookmarksList'
      }
      if (isLoggedIn !== 'entrance') {
        return {
          ...state
        };
      }

      const newListHandleClick = currentUser[dispatcherByTypeButton[behavior]].slice();
      const addedProduct = action.data.find((item) => {
        return item.id === action.id;
      })
      const transformAddedProduct = Object.assign({}, addedProduct, {quantity: 1})
      const checkRepeatGood = newListHandleClick.findIndex((item) => {
        return item.id === action.id
      });
      if (checkRepeatGood === -1) {
        newListHandleClick.push(transformAddedProduct);
      } else {
        if (behavior === 'byCart') {
          newListHandleClick[checkRepeatGood].quantity += 1
        }
      }
      return {
        ...state,
        currentUser: Object.assign({}, currentUser, {[dispatcherByTypeButton[behavior]]: newListHandleClick})
      }

    default:
      return state;
  }
}

export default reducer;
