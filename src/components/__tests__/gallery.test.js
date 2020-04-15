import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import { renderHook, act } from '@testing-library/react-hooks'

import Gallery from '../gallery'
import useImages from '../../hooks/useImages'
import useMosaic from '../../hooks/useMosaic'
import useInfo from '../../hooks/useInfo'
import store from '../../store/index'

describe('Gallery component suite', () => {
  const dummyProps = {
    gnomes: [],
    gnome: {},
    setGnome: jest.fn(),
  }

  test('Gallery snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Gallery {...dummyProps} />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('Should trigger a function to show next images', () => {
    const { result } = renderHook(() => useImages())

    expect(result.current.imagesDisplayed).toBe(0)
    expect(result.current.moreImages).toBe(24)
    act(() => result.current.nextImages())
    expect(result.current.imagesDisplayed).toBe(24)
    expect(result.current.moreImages).toBe(48)
  })
  test('Should trigger a function to show previous images', () => {
    const { result } = renderHook(() => useImages())

    expect(result.current.imagesDisplayed).toBe(0)
    expect(result.current.moreImages).toBe(24)
    act(() => result.current.previousImages())
    expect(result.current.imagesDisplayed).toBe(-24)
    expect(result.current.moreImages).toBe(0)
  })
  test('Should trigger a function to display mosaic view', () => {
    const { result } = renderHook(() => useMosaic())
    expect(result.current.mosaic).toBe(false)
    act(() => result.current.showMosaic())
    expect(result.current.mosaic).toBe(true)
  })
  test('Should trigger a function to display modal info', () => {
    const { result } = renderHook(() => useInfo())
    expect(result.current.showModal).toBe(false)
    act(() => result.current.viewInfo())
    expect(result.current.showModal).toBe(true)
  })
})
