import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const GnomeContext = createContext()

const GnomeProvider = (props) => {
  const [gnomes, setGnomes] = useState([])
  const [gnome, setGnome] = useState('')
  useEffect(() => {
    const fetchGnomes = async () => {
      const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
      const gnomeList = await axios.get(url)
      setGnomes(gnomeList.data.Brastlewark)
    }
    fetchGnomes()
  }, [])

  return <GnomeContext.Provider value={{ gnomes, gnome, setGnome, setGnomes }}>{props.children}</GnomeContext.Provider>
}

export default GnomeProvider
