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
      powerSupply: 'electronetwork',
      type: 'horizontal',
      power: 2000,
      isHit: true,
      url: 'https://picsum.photos/345',
    },

    {
      id: 2,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 6000',
      isNew: false,
      initialPrice: 30500,
      price: 125500,
      powerSupply: 'rechargeable',
      type: 'vertical',
      power: 2000,
      isHit: true,
      url: 'https://picsum.photos/34',
    },

    {
      id: 3,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 2000',
      isNew: false,
      initialPrice: null,
      price: 12500,
      powerSupply: 'pneumatic',
      type: 'vertical',
      power: 2000,
      isHit: true,
      url: 'https://picsum.photos/264',
    },

    {
      id: 4,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 3000',
      isNew: false,
      initialPrice: 22500,
      price: 15500,
      powerSupply: 'pneumatic',
      type: 'vertical',
      power: 2000,
      isHit: true,
      url: 'https://picsum.photos/3465',
    },

    {
      id: 5,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 6000',
      isnew: false,
      initialPrice: 30500,
      price: 25500,
      powerSupply: 'pneumatic',
      type: 'vertical',
      power: 2000,
      isHit: true,
      url: 'https://picsum.photos/4578',
    },

    {
      id: 6,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 2000',
      isNew: false,
      initialPrice: null,
      price: 12500,
      powerSupply: 'electronetwork',
      type: 'horizontal',
      power: 2000,
      isHit: true,
      url: 'https://picsum.photos/95',
    },

        {
      id: 7,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 3000',
      isNew: false,
      initialPrice: 22500,
      price: 15500,
      powerSupply: 'electronetwork',
      type: 'horizontal',
      power: 2000,
      isHit: true,
      url: 'https://picsum.photos/35',
    },

    {
      id: 8,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 6000',
      isNew: false,
      initialPrice: 30500,
      price: 25500,
      powerSupply: 'rechargeable',
      type: 'horizontal',
      power: 2000,
      isHit: true,
      url: 'https://picsum.photos/78',
    },

    {
      id: 9,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 2000',
      isNew: false,
      initialPrice: null,
      price: 12500,
      powerSupply: 'rechargeable',
      type: 'horizontal',
      url: 'https://picsum.photos/3456',
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
}
