export default class MockService {

  _imageBase = 'https://avatars.mds.yandex.net/get-mpic'

  _perforators = [
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
      url: `${this._imageBase}/1614201/img_id7059479335064729118.jpeg/9hq`
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
      url: `${this._imageBase}/1808939/img_id6111417658335389636.jpeg/9hq`
    },

    {
      id: 'per2',
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
      id: 'per3',
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
      id: 'per4',
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
      id: 'per5',
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
      id: 'per6',
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
      id: 'per7',
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
      id: 'per8',
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
      id: 'ang0',
      title: 'УШМ',
      brand: 'MAKITA',
      model: 'GA5030',
      isNew: true,
      initialPrice: 3955,
      price: 3609,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 720,
      numberOfIdle: 10000,
      maxDiscDiameter: 125,
      weight: 1.8,
      url: `${this._imageBase}/1525999/img_id5900912705532455145.jpeg/orig`
    },

    {
      id: 'ang1',
      title: 'УШМ',
      brand: 'DEWALT',
      model: 'DWE4257',
      isNew: true,
      initialPrice: 8170,
      price: 7609,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 1500,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 2.6,
      url: `${this._imageBase}/1522540/img_id9114775383041630560.jpeg/orig`
    },

    {
      id: 'ang2',
      title: 'УШМ',
      brand: 'METABO',
      model: 'WX 2000',
      isNew: true,
      initialPrice: null,
      price: 7599,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 2000,
      numberOfIdle: 6600,
      maxDiscDiameter: 230,
      weight: 5.8,
      url: `${this._imageBase}/96484/img_id7870553854011100454/orig`
    },

    {
      id: 'ang3',
      title: 'УШМ',
      brand: 'BOSCH',
      model: 'PWS 700-125',
      isNew: true,
      initialPrice: null,
      price: 4399,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 701,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 1.68,
      url: `${this._imageBase}/1363071/img_id3082069143458408104.png/orig`
    },

    {
      id: 'ang4',
      title: 'УШМ',
      brand: 'METABO',
      model: 'WX 2200-230',
      isNew: true,
      initialPrice: 6972,
      price: 6852,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 2200,
      numberOfIdle: 6600,
      maxDiscDiameter: 230,
      weight: 5.8,
      url: `${this._imageBase}/1567763/img_id8160704105666304907/orig`
    },

    {
      id: 'ang5',
      title: 'УШМ',
      brand: 'MAKITA',
      model: '9558HN',
      isNew: true,
      initialPrice: 4309,
      price: 3609,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 840,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 1.6,
      url: `${this._imageBase}/1767151/img_id3435654540053423287.jpeg/orig`
    },

    {
      id: 'ang6',
      title: 'УШМ',
      brand: 'METABO',
      model: 'WQ 1000',
      isNew: true,
      initialPrice: 5349,
      price: 5190,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 1010,
      numberOfIdle: 10000,
      maxDiscDiameter: 125,
      weight: 1.8,
      url: `${this._imageBase}/1365202/img_id225081156555175400.jpeg/orig`
    },

    {
      id: 'ang7',
      title: 'УШМ',
      brand: 'METABO',
      model: 'WEV 850-125',
      isNew: true,
      initialPrice: null,
      price: 4749,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 850,
      numberOfIdle: 11500,
      maxDiscDiameter: 125,
      weight: 1.9,
      url: `${this._imageBase}/1883514/img_id1616270054657863129.jpeg/orig`
    },

    {
      id: 'ang8',
      title: 'УШМ',
      brand: 'BOSCH',
      model: 'GWS 22-180 LVI',
      isNew: true,
      initialPrice: 16469,
      price: 15967,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 2200,
      numberOfIdle: 8500,
      maxDiscDiameter: 180,
      weight: 5.3,
      url: `${this._imageBase}/195452/img_id2829261645955279353/orig`
    },

    {
      id: 'ang9',
      title: 'УШМ',
      brand: 'MAKITA',
      model: 'GA6021',
      isNew: true,
      initialPrice: null,
      price: 7430,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 1050,
      numberOfIdle: 10000,
      maxDiscDiameter: 150,
      weight: 2.3,
      url: `${this._imageBase}/1538707/img_id8421780347419024688.jpeg/orig`
    },

    {
      id: 'ang10',
      title: 'УШМ',
      brand: 'METABO',
      model: 'W 850-125 603608010',
      isNew: true,
      initialPrice: null,
      price: 3609,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 850,
      numberOfIdle: 11500,
      maxDiscDiameter: 125,
      weight: 1.8,
      url: `${this._imageBase}/1715213/img_id816024444170068407.jpeg/orig`
    },

    {
      id: 'ang11',
      title: 'УШМ',
      brand: 'MAKITA',
      model: 'GA5030',
      isNew: true,
      initialPrice: 3955,
      price: 3609,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 720,
      numberOfIdle: 1100,
      maxDiscDiameter: 125,
      weight: 1.8,
      url: `${this._imageBase}/1525999/img_id5900912705532455145.jpeg/orig`
    },

    {
      id: 'ang12',
      title: 'УШМ',
      brand: 'METABO',
      model: 'W 850-125 601233010',
      isNew: true,
      initialPrice: 5200,
      price: 4750,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 850,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 2,
      url: `${this._imageBase}/1614201/img_id5784595712662820391.jpeg/orig`
    },

    {
      id: 'ang13',
      title: 'УШМ',
      brand: 'BOSCH',
      model: 'GWX 14-125',
      isNew: true,
      initialPrice: 8789,
      price: 8500,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 1400,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 2.3,
      url: `${this._imageBase}/1673800/img_id7193687748270126782.jpeg/orig`
    },

    {
      id: 'ang14',
      title: 'УШМ',
      brand: 'METABO',
      model: 'W 650-125',
      isNew: true,
      initialPrice: null,
      price: 2400,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 650,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 1.7,
      url: `${this._imageBase}/1911047/img_id8937566623143194963.jpeg/orig`
    },

    {
      id: 'ang15',
      title: 'УШМ',
      brand: 'BOSCH',
      model: 'GWS 660-125',
      isNew: true,
      initialPrice: 2361,
      price: 2100,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 660,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 1.9,
      url: `${this._imageBase}/1571888/img_id3894645795092849270.jpeg/orig`
    },

    {
      id: 'ang16',
      title: 'УШМ',
      brand: 'MAKITA',
      model: 'GA5030X3',
      isNew: true,
      initialPrice: 3699,
      price: 3600,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 720,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 1.8,
      url: `${this._imageBase}/195452/img_id4323487916254557205/orig`
    },

    {
      id: 'ang17',
      title: 'УШМ',
      brand: 'MAKITA',
      model: 'GA5030',
      isNew: true,
      initialPrice: 3955,
      price: 3609,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 720,
      numberOfIdle: 1100,
      maxDiscDiameter: 125,
      weight: 1.8,
      url: `${this._imageBase}/1525999/img_id5900912705532455145.jpeg/orig`
    },

    {
      id: 'ang18',
      title: 'УШМ',
      brand: 'MAKITA',
      model: '9069',
      isNew: true,
      initialPrice: null,
      price: 6670,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 720,
      numberOfIdle: 6600,
      maxDiscDiameter: 230,
      weight: 4.2,
      url: `${this._imageBase}/1538707/img_id6875122344108762231.jpeg/orig`
    },

    {
      id: 'ang19',
      title: 'УШМ',
      brand: 'MAKITA',
      model: 'GA5030K',
      isNew: true,
      initialPrice: null,
      price: 4329,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 720,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 1.8,
      url: `${this._imageBase}/1620389/img_id5506817126363996885.jpeg/orig`
    },

    {
      id: 'ang20',
      title: 'УШМ',
      brand: 'DEWALT',
      model: 'DWE4015',
      isNew: true,
      initialPrice: 3777,
      price: 3609,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 750,
      numberOfIdle: 12000,
      maxDiscDiameter: 125,
      weight: 1.8,
      url: `${this._imageBase}/1525215/img_id5782638571093513910.jpeg/orig`
    },

    {
      id: 'ang21',
      title: 'УШМ',
      brand: 'METABO',
      model: 'GA5030',
      isNew: true,
      initialPrice: 13955,
      price: 13091,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 2600,
      numberOfIdle: 6600,
      maxDiscDiameter: 230,
      weight: 6.3,
      url: `${this._imageBase}/1884605/img_id6794302988714614067/orig`
    },

    {
      id: 'ang22',
      title: 'УШМ',
      brand: 'DEWALT',
      model: 'DWE492',
      isNew: true,
      initialPrice: 9450,
      price: 8954,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 2200,
      numberOfIdle: 6600,
      maxDiscDiameter: 230,
      weight: 5.2,
      url: `${this._imageBase}/195452/img_id5528938655782587748/orig`
    },

    {
      id: 'ang23',
      title: 'УШМ',
      brand: 'BOSCH',
      model: 'GWS 13-125 CIE',
      isNew: true,
      initialPrice: 7950,
      price: 7820,
      powerSupply: 'electronetwork',
      isHit: true,
      power: 1300,
      numberOfIdle: 11500,
      maxDiscDiameter: 125,
      weight: 2.3,
      url: `${this._imageBase}/1865278/img_id2313826261665458585/orig`
    },

    {
      id: 'ang24',
      title: 'УШМ',
      brand: 'DEWALT',
      model: 'DWE4237',
      isNew: true,
      initialPrice: 9790,
      price: 9540,
      powerSupply: 'accumulator',
      isHit: true,
      power: 1200,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 2.2,
      url: `${this._imageBase}/195452/img_id7439481625788293058/orig`
    },

    {
      id: 'ang25',
      title: 'УШМ',
      brand: 'MAKITA',
      model: 'GA5041R',
      isNew: true,
      initialPrice: null,
      price: 8897,
      powerSupply: 'accumulator',
      isHit: true,
      power: 1100,
      numberOfIdle: 11000,
      maxDiscDiameter: 125,
      weight: 2.4,
      url: `${this._imageBase}/1866031/img_id4984682844879837665.jpeg/orig`
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

  getAllAngleGrinders = async () => {
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
