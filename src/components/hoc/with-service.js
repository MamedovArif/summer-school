import React from 'react';
import { ServiceConsumer } from '../service-context';

const withService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <ServiceConsumer>
        {(service) => {
          const serviceProps = mapMethodsToProps(service);
          return (
            <Wrapped {...props} {...serviceProps} />
          )
        }}
      </ServiceConsumer>
    )
  }
}

export default withService;
