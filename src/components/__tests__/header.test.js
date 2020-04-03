import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Header from '../header'
import { translations } from '../constants'

describe('Header component suite', () => {
  const { headerTitle, headerSubtitle, navSearcher, navAbout } = translations
  const wrapperMount = mount(<Header />)
  test('Header snapshot', () => {
    const component = renderer.create(<Header />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Should render a Header component', () => {
    expect(wrapperMount).toBeTruthy()
  })
  test('Should render the texts', () => {
    expect(wrapperMount.find('h1').text()).toEqual(headerTitle.toUpperCase())
    expect(wrapperMount.find('h2').text()).toEqual(headerSubtitle)
    expect(
      wrapperMount
        .find('li')
        .at(0)
        .text()
    ).toEqual(navSearcher)
    expect(
      wrapperMount
        .find('li')
        .at(1)
        .text()
    ).toEqual(navAbout)
  })
})
