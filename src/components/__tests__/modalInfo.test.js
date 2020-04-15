import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import ModalInfo from '../info'
import store from '../../store/index'

describe('ModalInfo component suite', () => {
  const dummyProps = {
    children: [],
  }
  test('ModalInfo snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <ModalInfo {...dummyProps} />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
