export default class DummySwapiService {

  _tools = [
    {
      id: 1,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 3000',
      is_new: true,
      initial_price: 22500,
      price: 15500
    },

    {
      id: 2,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 6000',
      is_new: true,
      initial_price: 30500,
      price: 125500
    },

    {
      id: 3,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 2000',
      is_new: true,
      initial_price: null,
      price: 12500
    },

    {
      id: 4,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 3000',
      is_new: true,
      initial_price: 22500,
      price: 15500
    },

    {
      id: 5,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 6000',
      is_new: true,
      initial_price: 30500,
      price: 25500
    },

    {
      id: 6,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 2000',
      is_new: true,
      initial_price: null,
      price: 12500
    },

        {
      id: 7,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 3000',
      is_new: true,
      initial_price: 22500,
      price: 15500
    },

    {
      id: 8,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 6000',
      is_new: true,
      initial_price: 30500,
      price: 25500
    },

    {
      id: 9,
      title: 'Перфоратор',
      brand: 'BOSCH',
      model: 'BFG 2000',
      is_new: true,
      initial_price: null,
      price: 12500
    },
  ];



  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async () => {
    return this._planets[0]
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[0];
  };

  getImagePerson = () => {
    return `https://placeimg.com/400/500/people`
  };

  getImageStarship = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getImagePlanet = () => {
    return `https://placeimg.com/400/400/nature`
  };
}
