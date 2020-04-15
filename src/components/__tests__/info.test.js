import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import Info from '../info'
import store from '../../store/index'

describe('Info component suite', () => {
  const dummyProps = {
    gnomes: [],
    gnome: {},
  }
  test('Info snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Info {...dummyProps} />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
