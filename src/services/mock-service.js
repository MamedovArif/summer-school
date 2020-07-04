export default class MockService {

  _perforators = [
    {
      id: 1,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 3000',
      isNew: true,
      initialPrice: 500,
      price: 15,
      url: 'jkjk',
    },

    {
      id: 2,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 6000',
      isNew: false,
      initialPrice: 30500,
      price: 125500,
      url: 'jkjk',
    },

    {
      id: 3,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 2000',
      isNew: false,
      initialPrice: null,
      price: 12500,
      url: 'jkjk',
    },

    {
      id: 4,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 3000',
      isNew: false,
      initialPrice: 22500,
      price: 15500,
      url: 'jkjk',
    },

    {
      id: 5,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 6000',
      isnew: false,
      initialPrice: 30500,
      price: 25500,
      url: 'jkjk',
    },

    {
      id: 6,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 2000',
      isNew: false,
      initialPrice: null,
      price: 12500,
      url: 'jkjk',
    },

        {
      id: 7,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 3000',
      isNew: false,
      initialPrice: 22500,
      price: 15500,
      url: 'jkjk',
    },

    {
      id: 8,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 6000',
      isNew: false,
      initialPrice: 30500,
      price: 25500,
      url: 'jkjk',
    },

    {
      id: 9,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 2000',
      isNew: false,
      initialPrice: null,
      price: 12500,
      url: 'jkjk',
    },
  ]

  getAllPerforators = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.95) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this._perforators);
        }
      }, 700)
    })
  }

  getPerforator = async () => {
    return this._perforators[0];
  }
}
