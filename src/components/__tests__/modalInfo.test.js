import React from 'react'
import renderer from 'react-test-renderer'
import ModalInfo from '../info'

describe('Searcher component suite', () => {
  const dummyProps = {
    children: [],
  }
  test('Searcher snapshot', () => {
    const component = renderer.create(<ModalInfo {...dummyProps} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
