import { FETCH_GNOMES_REQUEST, FETCH_GNOMES_SUCCESS, FETCH_GNOMES_FAILURE, SET_GNOME } from '../types/index'
import axios from 'axios'

export function fetchGnomes() {
  return (dispatch) => {
    dispatch(fetchGnomesRequest())
    axios
      .get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
      .then((res) => {
        dispatch(fetchGnomesSuccess(res.data.Brastlewark))
      })
      .catch((err) => {
        dispatch(fetchGnomesFailure(err))
        return err
      })
  }
}

const fetchGnomesRequest = () => ({
  type: FETCH_GNOMES_REQUEST,
})

const fetchGnomesSuccess = (gnomes) => ({ type: FETCH_GNOMES_SUCCESS, payload: gnomes })

const fetchGnomesFailure = (err) => ({ type: FETCH_GNOMES_FAILURE, payload: err.message })

export const setGnome = (gnome) => ({
  type: SET_GNOME,
  payload: gnome,
})
