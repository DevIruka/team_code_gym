import React from 'react'
import {
  StLabel,
  StSelect,
} from '../../styles/components/write_style/selectFieldStyle'

const SelectField = ({ id, name, value, onChange, options, label }) => {
  return (
    <div>
      <StLabel htmlFor={id}>{label}</StLabel>
      <StSelect id={id} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StSelect>
    </div>
  )
}

export default SelectField
