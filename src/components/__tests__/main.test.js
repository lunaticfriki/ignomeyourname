import React from 'react'
import renderer from 'react-test-renderer'

import Main from '../main'

describe('Main component suite', () => {
  test('Main snapshot', () => {
    const component = renderer.create(<Main />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
