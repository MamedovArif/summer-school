import ItemList from '../item-list';
import { withData, withService} from '../hoc';


const mapPerforatorMethodsToProps = (service) => {
  return {
    getData: service.getAllPerforators
  }
}

const PerforatorList = withService(mapPerforatorMethodsToProps)(
    withData(ItemList));

export {PerforatorList}
