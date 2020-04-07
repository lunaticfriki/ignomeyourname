import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import About from '../about'
import { translations } from '../constants'
import image from '../../assets/images/david-brooke-martin.jpg'

describe('About component suite', () => {
  const { aboutTitle, aboutArticle, aboutPhotoText } = translations
  const wrapperMount = mount(<About />)
  test('About snapshot', () => {
    const component = renderer.create(<About />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Should render a About component', () => {
    expect(wrapperMount).toBeTruthy()
  })
  test('Should render the texts', () => {
    expect(wrapperMount.find('h3').text()).toEqual(aboutTitle)
    expect(wrapperMount.find('article').text()).toEqual(aboutArticle)
    expect(wrapperMount.find('i').text()).toEqual(aboutPhotoText)
  })
  test('Should render an image', () => {
    expect(wrapperMount.find('img').prop('src')).toEqual(image)
  })
})
