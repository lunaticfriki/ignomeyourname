import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import App from './App'
import store from './store/index'

describe('App component suite', () => {
  test('App snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
