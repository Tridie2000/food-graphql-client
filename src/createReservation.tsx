import React from 'react';
import { compose } from 'react-apollo';
import { getStoresQuery } from './queries';

interface CreateReservationProps {
  storesData: object;
}

class CreateReservation extends React.PureComponent<CreateReservationProps> {
  render() {
    const { storesData } = this.props;
    console.warn('stores data', storesData);
    return (
      <form>
        <select>
          <option value="volvo">Volvo</option>
        </select>
      </form>
    );
  }
}

export default compose(getStoresQuery)(CreateReservation);
