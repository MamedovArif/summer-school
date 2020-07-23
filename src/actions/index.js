const registrationProcess = (name, phone, email, password) => {
  return {
    type: 'REGISTRATION_PROCESS',
    name,
    phone,
    email,
    password
  }
}

const loginProcess = (email, password) => {
  return {
    type: 'LOGIN_PROCESS',
    email,
    password
  }
}

const logoutProcess = (event) => {
  return {
    type: 'LOGOUT_PROCESS',
    event
  }
}

const processCounterQuantity = (event, id) => {
  return {
    type: 'PROCESS_COUNTER_QUANTITY',
    event,
    id
  }
}

const deleteFromNecessaryList = (event, id) => {
  return {
    type: 'DELETE_FROM_NECCESSARY_LIST',
    event,
    id
  }
}

const moveToNecessaryList = (event, id) => {
  return {
    type: 'MOVE_TO_NECESSARY_LIST',
    event,
    id
  }
}

const handleClickByCartOfList = (event, id, data) => {
  return {
    type: 'HANDLE_CLICK_BY_CART_OF_LIST',
    event,
    id,
    data
  }
}

export {
  registrationProcess,
  loginProcess,
  logoutProcess,
  processCounterQuantity,
  moveToNecessaryList,
  deleteFromNecessaryList,
  handleClickByCartOfList
};
