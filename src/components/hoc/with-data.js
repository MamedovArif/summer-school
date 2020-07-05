import React, {Component} from 'react';

import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true
    };

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        error: false
      })
      this.props.getData()
        .then((data) => {
          this.setState({
            data
          });
        })
        .catch(() => {
          this.setState({
            error: true
          });
        })
    }

    render() {
      const { data, error } = this.state;

      if (error) {
        return <ErrorIndicator />
      }

      return <View {...this.props} data={data}/>
    }
  }
}

export default withData;
