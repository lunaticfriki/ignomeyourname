import React, { useContext } from 'react'
import renderer from 'react-test-renderer'
import { GnomeContext } from './context/gnomeContext'
import App from './App'

describe('App component suite', () => {
  const gnomes = []
  const gnome = {}
  const setGnome = () => {}

  test('App snapshot', () => {
    const component = renderer.create(
      <GnomeContext.Provider value={{ gnomes, gnome, setGnome }}>
        <App />
      </GnomeContext.Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
