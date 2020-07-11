import React from 'react';
import ItemDetails, {Record} from '../item-details';
import { withService } from '../hoc';

const AngleGrinderDetails = (props) => {
  return (
    <ItemDetails {...props}>
        <Record field="model" label="Model" />
        <Record field="brand" label="Brand" />
    </ItemDetails>
  )
}

const mapMethodsToProps = (service) => {
  return {
    getData: service.getAngleGrinder
  }
}

export default withService(mapMethodsToProps)(AngleGrinderDetails);
