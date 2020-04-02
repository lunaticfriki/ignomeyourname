import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

test('Should render the home page', () => {
  const dummyProps = {}
  const wrapper = shallow(<App {...dummyProps} />)

  expect(wrapper.find(App)).toBeTruthy()
})
