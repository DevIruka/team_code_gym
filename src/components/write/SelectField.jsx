import React from 'react'

const SelectField = ({ id, name, value, onChange, options, label }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}

export default SelectField
