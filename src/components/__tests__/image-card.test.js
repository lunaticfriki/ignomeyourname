import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import ImageCard from '../image-card'

describe('Searcher component suite', () => {
  const dummyProps = {
    gn: {},
    setGnome: jest.fn(),
    viewInfo: jest.fn(),
    handleModalInfo: jest.fn(),
  }

  const wrapperMount = mount(<ImageCard {...dummyProps} />)

  test('ImageCard snapshot', () => {
    const component = renderer.create(<ImageCard {...dummyProps} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Should trigger a function to handle modal info', () => {
    wrapperMount.find('article').simulate('click')
    expect(dummyProps.handleModalInfo.mock.calls.length).toBe(1)
  })
})
