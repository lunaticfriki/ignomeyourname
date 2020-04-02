import React, { useState } from 'react'

import { translations } from '../components/constants'

const useGnome = (label, options) => {
  const { sideSearcherOptionDefault } = translations

  const [state, setState] = useState('')
  const id = `use-gnome-${label.replace(' ', '').toLowerCase()}`
  const Dropdown = () => (
    <label htmlFor={id} className="c-use-gnome">
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options.length}
      >
        <option hidden={true}>{sideSearcherOptionDefault}</option>
        {options.map(item => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  )
  return [state, Dropdown, setState]
}

export default useGnome
