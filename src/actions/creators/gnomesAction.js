import { FETCH_GNOMES_REQUEST, FETCH_GNOMES_SUCCESS, FETCH_GNOMES_FAILURE, SET_GNOME } from '../types/index'
import axios from 'axios'

export function fetchGnomes() {
  return (dispatch) => {
    dispatch({
      type: FETCH_GNOMES_REQUEST,
    })
    axios
      .get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .then((res) => {
        dispatch({ type: FETCH_GNOMES_SUCCESS, payload: res.data.Brastlewark })
      })
      .catch((err) => dispatch({ type: FETCH_GNOMES_FAILURE, payload: err.message }))
  }
}

export const setGnome = (gnome) => ({
  type: SET_GNOME,
  payload: gnome,
})
