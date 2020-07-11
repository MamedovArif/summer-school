import React from 'react';
import { AppStateConsumer } from '../app-state-context';

const withAppState = (Wrapped) => {
  return (props) => {
    return (
      <AppStateConsumer>
        {(appState) => {
          return (
            <Wrapped {...props} appState={appState} />
          )
        }}
      </AppStateConsumer>
    )
  }
}

export default withAppState;
