import React from 'react'
import renderer from 'react-test-renderer'
import Info from '../info'

describe('Info component suite', () => {
  const dummyProps = {
    gnomes: [],
    gnome: {},
  }
  test('Info snapshot', () => {
    const component = renderer.create(<Info {...dummyProps} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
