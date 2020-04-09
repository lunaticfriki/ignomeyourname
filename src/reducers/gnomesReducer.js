import { FETCH_GNOMES_REQUEST, FETCH_GNOMES_SUCCESS, FETCH_GNOMES_FAILURE, SET_GNOME } from '../actions/types'

const initialState = {
  gnomes: {
    status: 0,
    body: [],
  },
  gnome: '',
}

const gnomesApi = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GNOMES_REQUEST:
      return {
        ...state,
        gnomes: {
          status: 0,
          body: [],
        },
      }
    case FETCH_GNOMES_SUCCESS:
      return {
        ...state,
        gnomes: {
          status: 1,
          body: action.payload,
        },
      }
    case FETCH_GNOMES_FAILURE:
      return {
        ...state,
        gnomes: {
          status: -1,
          body: action.payload,
        },
      }
    case SET_GNOME:
      return {
        ...state,
        gnome: action.payload,
      }
    default:
      return state
  }
}

export default gnomesApi
