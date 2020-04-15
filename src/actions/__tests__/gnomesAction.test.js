import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'
import * as actions from '../creators/gnomesAction'
import fetchGnomesMock from '../../__mocks__/fetchGnomesMock'
import { fetchGnomes } from '../creators/gnomesAction'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetchGnomes actions', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('creates GET_POSTS_SUCCESS after successfuly fetching gnomes', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: fetchGnomesMock,
      })
    })

    const expectedActions = [
      { type: actions.FETCH_GNOMES_REQUEST },
      { type: actions.FETCH_GNOMES_SUCCESS, gnomes: fetchGnomesMock },
    ]

    const store = mockStore({ gnomes: { status: 0, body: [] } })
    store.dispatch(fetchGnomes())

    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions)
      done()
    })
  })
})
