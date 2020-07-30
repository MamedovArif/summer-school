import React, {Component} from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

type BaseProps = {
  getData: () => Promise<Object[]> // !!!
}

type InjectedProps = {
  data: Array<Object>
}

type WithDataState = {
  data: any,
  loading: boolean,
  error: boolean,
}

const withData = <P extends BaseProps, InjectedProps>(View: React.ComponentType<P>) => { // !!!

  return class extends Component<P & BaseProps, WithDataState> { // !!!
    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount(): void {
      this.update();
    }

    //public getData = this.props.getData;

    componentDidUpdate(prevProps: P): void {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    update() {
      this.setState({
        loading: true,
        error: false
      })
      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          });
        })
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (error) {
        return <ErrorIndicator />
      }

      return <View {...this.props as P} data={data}/>
    }
  }
}

export default withData;
