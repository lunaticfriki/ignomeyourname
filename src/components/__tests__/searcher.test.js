import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Searcher from '../searcher'
import { translations } from '../constants'

describe('Footer component suite', () => {
  const { sideSearcherSubmitButton, sideSearcherSelectTitle } = translations
  const wrapperMount = mount(<Searcher />)
  test('Searcher snapshot', () => {
    const component = renderer.create(<Searcher />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
