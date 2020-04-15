import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Searcher from '../searcher'
import store from '../../store/index'

describe('Searcher component suite', () => {
  const wrapperMount = mount(
    <Provider store={store}>
      <Searcher />
    </Provider>
  )
  const dummyProps = {
    gnomes: [],
    setGnome: jest.fn(),
  }
  test('Searcher snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Searcher />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Should trigger a function on submit to update', () => {
    const button = wrapperMount.find('button')
    button.simulate('click')
    expect(dummyProps.setGnome.mock.calls).toEqual([])
  })
})
