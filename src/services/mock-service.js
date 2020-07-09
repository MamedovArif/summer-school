export default class MockService {

  _imageBase = 'https://avatars.mds.yandex.net/get-mpic'

  _perforators = [
    {
      id: 0,
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
      url: `${this._imageBase}/1614201/img_id7059479335064729118.jpeg/9hq`
    },

    {
      id: 1,
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
      url: `${this._imageBase}/1808939/img_id6111417658335389636.jpeg/9hq`
    },

    {
      id: 2,
      title: 'Перфоратор',
      brand: 'MAKITA',
      model: 'DHR202RF Li-Ion 18В',
      isNew: false,
      initialPrice: null,
      price: 8980,
      powerSupply: 'accumulator',
      isHit: true,
      power: 700,
      numberOfIdle: 1200,
      frequencyOfStrikes: 4000,
      impactEnergy: 1.9,
      weight: 3.5,
      url: `${this._imageBase}/1602935/img_id5129775492232508705.jpeg/9hq`
    },

    {
      id: 3,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'GBH 2-28 F',
      isNew: false,
      initialPrice: null,
      price: 12559,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 880,
      numberOfIdle: 900,
      frequencyOfStrikes: 4000,
      impactEnergy: 3.2,
      weight: 3.1,
      url: `${this._imageBase}/1605421/img_id3651857285969135250.jpeg/9hq`
    },

    {
      id: 4,
      title: 'Перфоратор',
      brand: 'HITACHI',
      model: 'DH24PH',
      isNew: false,
      initialPrice: 11750,
      price: 10500,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 730,
      numberOfIdle: 1050,
      frequencyOfStrikes: 4500,
      impactEnergy: 2.7,
      weight: 2.7,
      url: `${this._imageBase}/1605421/img_id4263042739453333466.jpeg/9hq`
    },

    {
      id: 5,
      title: 'Перфоратор',
      brand: 'METABO',
      model: 'UHEV 2860-2 Quick',
      isNew: true,
      initialPrice: 15870,
      price: 14800,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 1100,
      numberOfIdle: 2100,
      frequencyOfStrikes: 4500,
      impactEnergy: 3.4,
      weight: 3.3,
      url: `${this._imageBase}/1912364/img_id5663495404948598156.jpeg/orig`
    },

    {
      id: 6,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'GBH 2-26',
      isNew: false,
      initialPrice: null,
      price: 9490,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 800,
      numberOfIdle: 900,
      frequencyOfStrikes: 4000,
      impactEnergy: 2.7,
      weight: 2.8,
      url: `${this._imageBase}/1644362/img_id6710038094590114061.jpeg/9hq`
    },

    {
      id: 7,
      title: 'Перфоратор',
      brand: 'MAKITA',
      model: 'HR2630',
      isNew: false,
      initialPrice: 8700,
      price: 8590,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 800,
      numberOfIdle: 1200,
      frequencyOfStrikes: 4600,
      impactEnergy: 2.9,
      weight: 2.8,
      url: `${this._imageBase}/1567763/img_id3219251767375855767.jpeg/9hq`
    },

    {
      id: 8,
      title: 'Перфоратор',
      brand: 'DEWALT',
      model: 'D25134K ',
      isNew: false,
      initialPrice: null,
      price: 12900,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 800,
      numberOfIdle: 1500,
      frequencyOfStrikes: 5540,
      impactEnergy: 3,
      weight: 3,
      url: `${this._imageBase}/1669769/img_id994218771506213848.jpeg/9hq`
    },






    // {
    //   id: 9,
    //   title: 'Перфоратор',
    //   brand: 'MAKITA',
    //   model: 'HR2470',
    //   isNew: true,
    //   initialPrice: 7477,
    //   price: 6950,
    //   powerSupply: 'electronetwork',
    //   isHit: true,
    //   power: 780,
    //   numberOfIdle: 1100,
    //   frequencyOfStrikes: 4500,
    //   impactEnergy: 2.7,
    //   weight: 2.6,
    //   url: `${this._imageBase}/1614201/img_id7059479335064729118.jpeg/9hq`
    // },

    // {
    //   id: 10,
    //   title: 'Перфоратор',
    //   brand: 'BOSCH',
    //   model: 'GBH 240',
    //   isNew: false,
    //   initialPrice: 6998,
    //   price: 5950,
    //   powerSupply: 'electronetwork',
    //   isHit: false,
    //   power: 790,
    //   numberOfIdle: 930,
    //   frequencyOfStrikes: 4500,
    //   impactEnergy: 2.8,
    //   weight: 2.6,
    //   url: `${this._imageBase}/1808939/img_id6111417658335389636.jpeg/9hq`
    // },

    // {
    //   id: 11,
    //   title: 'Перфоратор',
    //   brand: 'MAKITA',
    //   model: 'DHR202RF Li-Ion 18В',
    //   isNew: false,
    //   initialPrice: null,
    //   price: 8980,
    //   powerSupply: 'accumulator',
    //   isHit: true,
    //   power: 700,
    //   numberOfIdle: 1200,
    //   frequencyOfStrikes: 4000,
    //   impactEnergy: 1.9,
    //   weight: 3.5,
    //   url: `${this._imageBase}/1602935/img_id5129775492232508705.jpeg/9hq`
    // },

    // {
    //   id: 12,
    //   title: 'Перфоратор',
    //   brand: 'BOSCH',
    //   model: 'GBH 2-28 F',
    //   isNew: false,
    //   initialPrice: null,
    //   price: 12559,
    //   powerSupply: 'electronetwork',
    //   isHit: true,
    //   power: 880,
    //   numberOfIdle: 900,
    //   frequencyOfStrikes: 4000,
    //   impactEnergy: 3.2,
    //   weight: 3.1,
    //   url: `${this._imageBase}/1605421/img_id3651857285969135250.jpeg/9hq`
    // },

    // {
    //   id: 13,
    //   title: 'Перфоратор',
    //   brand: 'HITACHI',
    //   model: 'DH24PH',
    //   isNew: false,
    //   initialPrice: 11750,
    //   price: 10500,
    //   powerSupply: 'electronetwork',
    //   isHit: true,
    //   power: 730,
    //   numberOfIdle: 1050,
    //   frequencyOfStrikes: 4500,
    //   impactEnergy: 2.7,
    //   weight: 2.7,
    //   url: `${this._imageBase}/1605421/img_id4263042739453333466.jpeg/9hq`
    // },

    // {
    //   id: 14,
    //   title: 'Перфоратор',
    //   brand: 'METABO',
    //   model: 'UHEV 2860-2 Quick',
    //   isNew: true,
    //   initialPrice: 15870,
    //   price: 14800,
    //   powerSupply: 'electronetwork',
    //   isHit: true,
    //   power: 1100,
    //   numberOfIdle: 2100,
    //   frequencyOfStrikes: 4500,
    //   impactEnergy: 3.4,
    //   weight: 3.3,
    //   url: `${this._imageBase}/1912364/img_id5663495404948598156.jpeg/orig`
    // }
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
