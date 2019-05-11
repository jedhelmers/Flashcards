import React from 'react';
import AppEntry from './AppEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'
import middleware from './redux/middleware'

const store = createStore(reducer, middleware)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <AppEntry/>
      </Provider>
    )
  }
}
