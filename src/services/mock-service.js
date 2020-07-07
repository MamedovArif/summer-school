export default class MockService {

  _imageBase = 'https://picsum.photos'

  _perforators = [
    {
      id: 0,
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
      url: `${this._imageBase}/400`
    },

    {
      id: 1,
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
      url: `${this._imageBase}/400`
    },

    {
      id: 2,
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
      url: `${this._imageBase}/400`
    },

    {
      id: 3,
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
      url: `${this._imageBase}/400`
    },

    {
      id: 4,
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
      url: `${this._imageBase}/400`
    },

    {
      id: 5,
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
      url: `${this._imageBase}/400`
    },

        {
      id: 6,
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
      url: `${this._imageBase}/400`
    },

    {
      id: 7,
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
      url: `${this._imageBase}/400`
    },

    {
      id: 8,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 2000',
      isNew: false,
      initialPrice: null,
      price: 12500,
      powerSupply: 'rechargeable',
      type: 'horizontal',
      url: `${this._imageBase}/400`
    },
  ]

  _angleGrinders = [
    {
      id: 0,
      title: 'Болгарка',
      brand: 'BOSCH',
      model: 'BFG 3000',
      isNew: true,
      initialPrice: 500,
      price: 15,
      powerSupply: 'electronetwork',
      type: 'horizontal',
      power: 2000,
      isHit: true
    },

    {
      id: 1,
      title: 'Болгарка',
      brand: 'BOSCH',
      model: 'BFG 6000',
      isNew: false,
      initialPrice: 305,
      price: 125,
      powerSupply: 'rechargeable',
      type: 'vertical',
      power: 2000,
      isHit: true
    },

    {
      id: 2,
      title: 'Болгарка',
      brand: 'BOSCH',
      model: 'BFG 2000',
      isNew: false,
      initialPrice: null,
      price: 12,
      powerSupply: 'pneumatic',
      type: 'vertical',
      power: 2000,
      isHit: true
    },

    {
      id: 3,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 3000',
      isNew: false,
      initialPrice: 22,
      price: 15,
      powerSupply: 'pneumatic',
      type: 'vertical',
      power: 2000,
      isHit: true
    },
  ]

  // getImagePerforator = (id) => {
  //   const iden = id * 50;
  //   return `${this._imageBase}/${id}`
  // }

  // getAllImagePerforators = () => {
  //   const arrayOfId = this._perforators.map((item) => item.id);
  //   console.log(arrayOfId);
  //   return arrayOfId.map((id) => this.getImagePerforator(id));
  // }

  // getImageAngleGrinder = ({id}) => {
  //   const iden = id * 30;
  //   return `${this._imageBase}/${iden}`
  // }

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

  getPerforator = async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.95) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this._perforators[id]);
        }
      }, 700)
    })
  }

  getAllAngleGrinder = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.95) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this._angleGrinders);
        }
      }, 700)
    })
  }

  getAngleGrinder = async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.95) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this._angleGrinders[id]);
        }
      }, 700)
    })
  }
}
