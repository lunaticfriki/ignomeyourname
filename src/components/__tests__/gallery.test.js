import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Gallery from '../gallery'

describe('Searcher component suite', () => {
  const dummyProps = {
    gnomes: [],
    gnome: {},
  }
  const wrapperMount = mount(<Gallery {...dummyProps} />)
  test('Searcher snapshot', () => {
    const component = renderer.create(<Gallery {...dummyProps} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
