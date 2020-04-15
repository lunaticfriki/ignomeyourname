import reducer from '../index'
// import * as actions from '../../actions/creators/gnomesAction'
import { FETCH_GNOMES_REQUEST, FETCH_GNOMES_SUCCESS, FETCH_GNOMES_FAILURE } from '../../actions/types/'
import expect from 'expect'
import fetchGnomesMock from '../../__mocks__/fetchGnomesMock'

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      gnomesApi: {
        gnomes: {
          status: 0,
          body: [],
        },
        gnome: '',
      },
    })
  })

  it('should handle FETCH_GNOMES_REQUEST', () => {
    const fetchGnomesRequest = {
      type: FETCH_GNOMES_REQUEST,
    }
    expect(reducer({}, fetchGnomesRequest)).toEqual({
      gnomesApi: {
        gnomes: {
          status: 0,
          body: [],
        },
        gnome: '',
      },
    })
  })

  it('should handle FETCH_GNOMES_SUCCESS', () => {
    const fetchGnomesSuccess = {
      type: FETCH_GNOMES_SUCCESS,
      payload: fetchGnomesMock.data,
    }
    expect(reducer({}, fetchGnomesSuccess)).toEqual({
      gnomesApi: {
        gnomes: {
          status: 1,
          body: fetchGnomesMock.data,
        },
        gnome: '',
      },
    })
  })

  it('should handle FETCH_GNOMES_FAILURE', () => {
    const fetchGnomesFailure = {
      type: FETCH_GNOMES_FAILURE,
      payload: { success: false },
    }
    expect(reducer({}, fetchGnomesFailure)).toEqual({
      gnomesApi: {
        gnomes: {
          status: -1,
          body: { success: false },
        },
        gnome: '',
      },
    })
  })
})
