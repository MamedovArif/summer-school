import React, {Component} from 'react';

import ErrorButton from '../../../error-button';

import './services.css';

const Transfer = () => {
  return (
    <li className="transfer ">
        <h2 className="transfer-headline">Доставка</h2>
      <p className="transfer-description">Мы с удовольствием доставим ваш товар прямо <br />
      к вашему подъезду совершенно бесплатно!
      Ведь мы неплохо заработаем,<br /> поднимая его на ваш этаж!</p>
    </li>
  )
}

const Guarantee = () => {
  return (
    <li className="guarantee">
      <h2 className="guarantee-headline">Гарантия</h2>
      <p className="guarantee-description">Если купленный у нас товар поломается или заискрит,<br />
      а также в случае пожара, спровоцированного его возгоранием, вы всегда можете быть уверены
      в нашей гарантии. Мы обменяем сгоревший товар на новый.<br/>
      Дом уж восстановите как-нибудь сами.</p>
    </li>
  )
}

const Credit = () => {
  return (
    <li className="credit">
      <h2 className="credit-headline">Кредит</h2>
      <p className="credit-description">Залезть в долговую яму стало проще!<br/>
      Кредитные консультанты придут вам на помощь.</p>
      <ErrorButton />
    </li>
  )
}

export default class Services extends Component {

  state = {
    selectedItem: 'Доставка',
  }

  handleClick = (evt) => {
    const text = evt.target.textContent;
    this.setState((state) => {
      if (state.selectedItem === text) {
        return;
      }
      return {
        selectedItem: text
      }
    })
  }

  render() {
    const {selectedItem} = this.state;
    const guarantee = selectedItem === 'Гарантия' ? <Guarantee /> : null;
    const transfer = selectedItem === 'Доставка' ? <Transfer /> : null;
    const credit = selectedItem === 'Кредит' ? <Credit /> : null;

    return (
      <div className="out-servis">
        <section className="servis">
          <div className="servis-container">
            <h2>Сервисы</h2>
            <p>Хороший интернет-магазин отличается от плохого не только ценами!
             Мы стараемся изо всех сил, чтобы сделать ваши покупки приятными.
            </p>
          </div>
          <div className="servis-slide">
            <ul className="servis-menu">
              <li>
                <button className="noted"
                  onClick={this.handleClick}>Доставка
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleClick}>Гарантия
                </button>
              </li>
              <li>
                <button
                  onClick={this.handleClick}>Кредит
                </button>
              </li>
            </ul>
            <ul className="servis-content">
              {guarantee}
              {transfer}
              {credit}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
