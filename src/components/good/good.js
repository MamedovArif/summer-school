import React, {Component} from 'react';

//import {ServiceConsumer} from '../service-context';
import MockService from '../../services/mock-service';

export default class Good extends Component {

  service = new MockService();

  state = {
    good: {}
  }

  componentDidMount() {
    const {id} = this.props;
    this.service.getPerforator(id)
      .then((result) => {
        this.setState({
          good: result
        })
      })
  }

  render() {
    const {id, title, brand, model, isNew, price} = this.state.good;
    return (
      <div>
        <div>id: {id}</div>
        <div>title: {title}</div>
        <div>brand: {brand}</div>
        <div>model: {model}</div>
        <div>isNew: {isNew}</div>
        <div>price: {price}</div>
      </div>
    )
  }
}

