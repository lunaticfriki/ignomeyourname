import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../layout'

describe('Layout component suite', () => {
  test('Layout snapshot', () => {
    const component = renderer.create(<Layout />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
