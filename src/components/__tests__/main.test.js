import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import store from '../../store/index'
import Main from '../main'

describe('Main component suite', () => {
  test('Main snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Main />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
