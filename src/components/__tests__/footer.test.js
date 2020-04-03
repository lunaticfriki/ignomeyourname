import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Footer from '../footer'
import { translations } from '../constants'

describe('Footer component suite', () => {
  const { footerSignature, footerMessage, year } = translations
  const wrapperMount = mount(<Footer />)
  test('Footer snapshot', () => {
    const component = renderer.create(<Footer />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Should render a Footer component', () => {
    expect(wrapperMount).toBeTruthy()
  })
  test('Should render the texts', () => {
    expect(wrapperMount.find('i').text()).toEqual(`${footerSignature} ${footerMessage} - ${year}`)
  })
})
