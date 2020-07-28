import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';

type ErrorBoundryProps = {}

export default class ErrorBoundry extends Component<ErrorBoundryProps, {hasError: boolean}> {
  constructor(props: ErrorBoundryProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidUpdate(prevProps: ErrorBoundryProps): void {

  }

  componentDidCatch(): void {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return this.props.children;
  }
}
