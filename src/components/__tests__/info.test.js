import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Info from '../info'

describe('Searcher component suite', () => {
  const dummyProps = {
    gnomes: [],
    gnome: {},
  }
  test('Searcher snapshot', () => {
    const component = renderer.create(<Info {...dummyProps} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
