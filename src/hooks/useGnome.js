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
        data-testid={id}
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option hidden={true}>{sideSearcherOptionDefault}</option>
        {options
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item, idx) => (
            <option key={idx} value={item.name}>
              {item.name}
            </option>
          ))}
      </select>
    </label>
  )
  return [state, Dropdown, setState]
}

export default useGnome
