import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Searcher from '../searcher'

describe('Searcher component suite', () => {
  const wrapperMount = mount(<Searcher />)
  const dummyProps = {
    gnomes: [],
    setGnome: jest.fn(),
  }
  test('Searcher snapshot', () => {
    const component = renderer.create(<Searcher />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Should trigger a function on submit', () => {
    const button = wrapperMount.find('button')
    button.simulate('click')
    expect(dummyProps.setGnome.mock.calls).toEqual([])
  })
})
