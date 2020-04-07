import React from 'react'
import renderer from 'react-test-renderer'
import ModalInfo from '../info'

describe('ModalInfo component suite', () => {
  const dummyProps = {
    children: [],
  }
  test('ModalInfo snapshot', () => {
    const component = renderer.create(<ModalInfo {...dummyProps} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
